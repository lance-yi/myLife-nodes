var mainLeftObj = 
	'<ul class="currencyType">\
		<li v-on:click="navProJect(money,$event)" :id="\'m_p_\'+money.producerId" v-for="money in moneyList">\
			<i></i>\
			<a href="javascript:;">\
				<h3><img :src="money.logo" /><span>{{money.NAME}}</span></h3>\
				<div class="progressBarDiv">\
					<div class="progress_container">\
						<div :id="\'progress_bar\'+money.producerId" class="progress_bar tip" :data-title="money.percent*100"></div>\
					</div>\
					<span>{{money.percent*100}}%</span>\
				</div>\
			</a>\
		</li>\
	</ul>';
$("#moneyType").append(mainLeftObj);
var moneyType = new Vue({
	el: "#moneyType",
	data: {
		moneyList: [],
		nature : 0 //激活属性
	},
	methods: {
    	navProJect(obj,thisObj){
    		var target=thisObj.target;
    		$(target).parents("li").addClass("on").siblings().removeClass("on");
    		location.href="./navProJect.html?producerId="+obj.producerId;
		}
  	},
  	watch : {
        	 
    }
})

var money_data={
	"url":"/mall/backend/homepage/queryMenu",
	"data":null,
	"type":"get",
	"token":token
};
var money_list=simplifyRequest(money_data);
if(isNotBlank(money_list)){
	moneyType.moneyList=money_list.data;
}else{
	alert(money_list.msg);
}

moneyType.$watch('nature', function (newValue, oldValue) {
	//进度条
	$.each(moneyType.moneyList, function(key, val){
		var obj=$('#progress_bar'+val.producerId);
		var percent = obj.data('title');
		obj.animate({width:percent+"%"},1000);
	});
});
//激活属性
moneyType.nature=1;

