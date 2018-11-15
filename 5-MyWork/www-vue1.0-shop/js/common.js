var back="http://47.98.183.237:8080";
var photo_url="http://ltalk-website.oss-cn-hangzhou.aliyuncs.com/";
var token='d1b23da1da044aa1b0dd605eef4398e4';

// http://47.98.183.237:8080/swagger-ui.html#/ 接口文档地址

/**验证字符是否为空 返回true为空*/
function isBlank(obj){
	if( obj==null || obj=='' || obj=='undefined'){
		return true;
	}
	return false;
}

/**验证字符是否为空 返回true为非空*/
function isNotBlank(obj){
	if( obj!=null && obj!=''){
		return true;
	}
	return false;
}

/**字符*/
function StringTurn(obj){
	if(isBlank(obj)){
		return '无';
	}
	return obj;
}

/**自定义字符*/
function CustomString(obj,str){
	if(isBlank(obj)){
		return str;
	}
	return obj;
}
/**
 * 简化的请求
 * data.url请求连接
 * data.data 请求条件
 * data.type 请求方式
 */
function simplifyRequest(data){ 
	var obj="";
	$.ajax({ 
		url:back+data.url,
		data:data.data,
		dataType:"json",//服务器返回json格式数据
		type:data.type,//HTTP请求类型
		async: false,
		timeout:10000,//超时时间设置为10秒
     	success: function(data){
			obj=data
		}
	});
	return obj;
}
/**
 * 简化的请求
 * data.url请求连接  请求后缀连接
 * data.data 请求条件 格式{userid:"1"}
 * data.type 请求方式 post/get
 * data.token 请求token 可以不填
 */
function simplifyRequestJson(data){ 
	var obj=""; 
	$.ajax({
        type:data.type,//HTTP请求类型
        url:back+data.url,//back 是请求前置连接
		data:JSON.stringify(data.data),//json转成string
        contentType: "application/json", //必须有
        dataType: "json", //表示返回值类型，不必须
        async: false,
        beforeSend: function (XMLHttpRequest) {
     		XMLHttpRequest.setRequestHeader("token",data.token);
        },
        success: function (data) {
            obj=data
        }
    });
	return obj;
}



function GetQueryString(name) {
   var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");  //寻找&+url参数名=参数值+&.&可以不存在
   var r = window.location.search.substr(1).match(reg);
   if(r!=null)return  decodeURIComponent(r[2]); return null;
}  

/**
 * @function escapeHTML 转义html脚本 < > & " '
 * @param a  字符串   
 */
function escapeHTML(a){
    a = "" + a;
    return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
 
/**
 * @function unescapeHTML 还原html脚本 < > & " '
 * @param a  字符串
 */
function unescapeHTML(a){
    a = "" + a;
    return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
}


//店铺-挖矿信息栏
function blagObj(){
	var flagBom = new Vue({
		el: '#flagBom',
		data: {
			flagforList:[],
		}
	});
	var dig_Url={
		"url":"/mall/backend/homepage/producer/queryMiningInfo",
		"data":{'producerId':9},
		"type":"get",
		"token":token
	};
	var dig_data=simplifyRequest(dig_Url);
	if(isNotBlank(dig_data)){
		flagBom.flagforList=dig_data.data;
	}else{
		alert(dig_data.msg);
	}
}
	
//登录授权
function authorizationLogin(obj){
	var login_Url={
		"url": "/mall/backend/access/checkLoginState",
		"data": {"redirectUrl":pageUrl},
		"type": "get",
		"token": token
	};
	var login_Data=simplifyRequestJson(login_Url);
	if(isNotBlank(login_Data)){
		if(login_Data.success){
			loginData=login_Data.data.login;
		}else{
			alert(login_Data.msg);
		}
	}
}