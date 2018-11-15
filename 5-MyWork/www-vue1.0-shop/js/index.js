$(function(){
	$(".notice ul li:nth-child(3n)").css({'margin-right':'30px'});
	$(".optimization ul li:nth-child(2n)").css({'float':'right'});
	$(".flagBom ul li:first-child p").css({"color":"#979797"});
	$(".flagBom ul li:last-child p").css({"color":"#4a8658"});
	$(".flagBom ul li:last-child").css({"width":"120px","margin-right":"0"});
	$(".goodsMain ul li:first-child").css({'padding':'0'});
	$(".goodsMain ul li:nth-child(3) label").css({'margin-top':'5px'});
	$(".goodsMain ul li:nth-child(6)").css({'border-top':'1px dashed #ECECEC'});
	$(".tableCartIn tr th:first-child,.tableCartIn tr td:first-child").css({'border-left':'1px solid #f0f0f0'});
	$(".tableCartIn tr th:last-child,.tableCartIn tr td:last-child").css({'border-right':'1px solid #f0f0f0'});
	$(".tableCartIn tr:last-child td").css({'border':'none','padding':'10px 0'});
	$(".tableCart tr th:nth-child(2)").css({'text-align':'left'});
	$(".orderDeraTwo ul li:last-child").css({'border-right':'none'});
	$(".sellOne ul li:nth-child(2n)").css({'float':'right'});
	$(".storeInfor ul li:nth-child(2n),.siftList li:nth-child(3n)").css({'margin-right':'0'});
	$(".storeInfor ul li:last-child").css({'border-bottom':'none'});
	
	//选择商品属性查询价格
	$(".versionDiv span:first-child").addClass("on");
	
	//订单详情
	$("#orderDetaBtn").click(function(){
		$(this).toggleClass("on");
		$('.checkOrderData').slideToggle();
	});
})
