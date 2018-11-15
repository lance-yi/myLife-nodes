
var headerObj = 
	'<div class="topDiv">\
		<div class="top w1200 cleafix">\
			<h2>\
				<span>您好！请</span>\
				<a href="javascript:;">登录</a>\
				<a href="javascript:;">免费注册</a>\
				<i></i>\
				<a href="javascript:;">我的订单</a>\
			</h2>\
		</div>\
	</div>\
	<div class="headerDiv">\
		<div class="header w1200 cleafix">\
			<div class="logo fl">\
				<a v-on:click="indexPage()" href="javascript:;">\
					<img src="./images/logo.png" />\
				</a>\
				<span id="home_name">商城</span>\
			</div>\
			<a v-on:click="cartPage()" href="javascript:;" class="cartBut fr">\
				<span>购物车<em class="angleDom" id="angle_dom_buy">{{cartAngle}}</em></span>\
			</a>\
		</div>\
	</div>';
//当前页面URL
var pageUrl = window.location.href;
var header = new Vue({
	el: "#header",
	data: {
		headerObj:headerObj,
		cartAngle: 0
	},
	methods: {
		//logo 跳转首页
		indexPage(){
			location.href="./index.html";
		},
		//跳转购物车页面
		cartPage(){
			location.href="./shopCart.html";
		}
	}
})

if( isBlank(header.cartAngle) ){
	$("#angle_dom_buy").html(0);
}

//计算购物车数量
function shopcount(){
	if(isNotBlank(localStorage.goodsInforData)){
		var locallist= JSON.parse(localStorage.goodsInforData);
		$("#angle_dom_buy").html(locallist.length);
		if(locallist.length==0){
			$(".cartNoData").show();
			$(".cartContent").hide(); 
		}
	}else{
		$(".cartNoData").show();
		$(".cartContent").hide();
	}
	
}
shopcount()
