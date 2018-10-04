/*
* @Author: Administrator
* @Date:   2018-08-12 21:03:29
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-16 22:38:47
*/
// 二维码部分
$('.top li').hover(function() {
	var index=$(this).index();
	if(index==0){
		$('.pic1').show();

	}else if(index==1){
		$('.pic2').show();

	}else{
		$('.pic3').show();
	}

	
}, function() {

	$('.pic1').hide();
	$('.pic2').hide();
	$('.pic3').hide();
});

// 选择语言
$('.language').hover(function() {
	$('.lang').show()
}, function() {
	$('.lang').hide()
});


// 轮播图

var num=0;
var timer;
function gogo(){
	timer=setInterval(function(){
		num++;
		if(num>6){
			num=0;
		}
		
	// 图片移动
		$('#ulist li').eq(num).addClass('current');
		$('#ulist li').eq(num).siblings().removeClass('current')

		// 圆圈变色
		$('ol li').eq(num).addClass('current');
		$('ol li').eq(num).siblings().removeClass('current')

	},1000)
}
gogo()


/*鼠标移入移出*/

$('#ulist').hover(function() {
	clearInterval(timer)
}, function() {
	gogo()
});


/* 点击圆圈*/
$('ol li').click(function(event) {
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	// 获取用户点击标签的索引值
	num=$(this).index();
	$('#ulist li').eq(num).addClass('current');
	$('#ulist li').eq(num).siblings().removeClass('current')

});

/*酒店展示*/

$('.hotel li').hover(function() {

	 $(this).stop().animate({'width':'400px'}, 1000);
	 $(this).siblings().stop().animate({'width':'130px'}, 500);

}, function() {

	 $(this).stop().animate({'width':'170px'}, 500);
	 $(this).siblings().stop().nimate({'width':'170px'}, 500);
});

/*目的地*/
$('#hlist li').hover(function() {
	$(this).css('border-color','#f60')
}, function() {
	$(this).css('border-color','transparent')
});



// 导航部分
$('#hlist li').click(function(event) {
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	var index=$(this).index();

	$('section>div').eq(index).addClass('current');
	$('section>div').eq(index).siblings().removeClass('current');
});

// 登录注册部分

$('.login_reg').hover(function() {
	$('.login').show();
}, function() {
	$('.login').hide();
});



// 酒店预订部分
$('.left li').click(function(event) {
	$(this).addClass('current').siblings().removeClass('current')
	var index=$(this).index();
    $('.right>div').eq(index).addClass('current').siblings().removeClass('current')


});


/*促销部分*/
$('.saleshotel li').hover(function() {
	$(this).css('border-color','#bb7733')
	var index=$(this).index();
	$('.sales_pic>img').eq(index).animate({'top':'-10px'}, 500);
	

}, function() {
	$(this).css('border-color','#ccc')
	$('.sales_pic>img').stop().animate({'top':'0px'}, 500);
});


/*品牌酒店部分*/

$('.morebrand li').hover(function() {
	$(this).addClass('current').siblings().removeClass('current');
	var index=$(this).index();
	$('.morebrand i').eq(index).stop().animate({'top':'-10px'}, 500);

}, function() {
	$(this).removeClass('current');
	$('.morebrand i').stop().animate({'top':'0px'}, 500);
});


/*logo部分*/
$('#flist li').hover(function() {
	$(this).addClass('current').siblings().removeClass('current')
}, function() {
	
});

$('.morelogo li').hover(function() {
	
	$(this).children('span').stop().animate({'top':'5px'}, 500);

}, function() {
	
	$(this).children('span').stop().animate({'top':'20px'}, 500);
});