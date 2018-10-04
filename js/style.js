/*
* @Author: Administrator
* @Date:   2018-08-09 21:35:12
* @Last Modified by:   admin
* @Last Modified time: 2018-09-18 10:20:18
*/

/* 二维码部分*/
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

/* 选择语言*/
$('.language').hover(function() {
	$('.lang').show()
}, function() {
	$('.lang').hide()
});




/* 导航条部分*/
$('.nlist li').hover(function() {
	$(this).css('background','#456da7')
}, function() {
	$(this).css('background','#2064c8')
});

$('.nlist li').click(function(event) {
	$(this).addClass('current').siblings().removeClass('current');
});


/*轮播图*/

var num=0;
var timer;
function gogo(){
	timer=setInterval(function(){
		num++;
		if(num>6){
			num=0;
		}
		
	/* 图片移动*/
		$('#ulist li').eq(num).addClass('current');
		$('#ulist li').eq(num).siblings().removeClass('current')

		/*圆圈变色*/
		$('ol li').eq(num).addClass('current');
		$('ol li').eq(num).siblings().removeClass('current')

	},2000)
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
	 $(this).siblings().stop().animate({'width':'170px'}, 500);
});

/*目的地*/
$('#hlist li').hover(function() {
	$(this).css('border-color','#f60')
}, function() {
	$(this).css('border-color','transparent')
});



/* 导航部分*/
$('#hlist li').click(function(event) {
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	var index=$(this).index();

	$('section>div').eq(index).addClass('current');
	$('section>div').eq(index).siblings().removeClass('current');
});

/*登录注册部分*/

$('.login_reg').hover(function() {
	$('.login').show();
}, function() {
	$('.login').hide();
});


/*  海外*/
$('#alist li').hover(function() {
	$(this).css('border-color','#f60')
}, function() {
	$(this).css('border-color','transparent')
});

/*导航部分*/
$('#alist li').click(function(event) {
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	var index=$(this).index();

	$('.abroad section>div').eq(index).addClass('current');
	$('.abroad section>div').eq(index).siblings().removeClass('current');
});

/*图片部分*/
$('section li').hover(function() {
	$(this).css('border-color','#f60')
	$(this).children().children('img').stop().animate({'top':'-20px'}, 500);

}, function() {
	$(this).css('border-color','#ccc')
	$(this).children().children('img').stop().animate({'top':'0px'}, 500);
});

/*旅游指南*/

$('#tlist li').hover(function() {
	var index=$(this).index();
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	$('#plist li').eq(index).addClass('current').siblings().removeClass('current');
	
}, function() {
	
});

$('.t_right li').hover(function() {
	$(this).css('border-color', '#89ca00');
}, function() {
	$(this).css('border-color', '#ccc');
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

/*酒店预订部分*/

 
/*左边部分*/

$('.left li').click(function(event) {

	$(this).addClass('current').siblings().removeClass('current')
	var index=$(this).index();
     /*大的*/
	$('.right>div').eq(index).addClass('current').siblings().removeClass('current')
	/*国内和国外*/
	 $('.right>div.current ul li').eq(0).addClass('curr').siblings().removeClass('curr')
	
   /* 选择*/
	$('.right>div.current>div').eq(0).addClass('cu').siblings().removeClass('cu')

  });
      
 
/* 上面部分*/


   $('.right>.r_box  li ').click(function(event) {
     var  index=$(this).index();
   

   		$(this).addClass('curr').siblings().removeClass('curr')
	 $('.right .current>div').eq(index).addClass('cu').siblings().removeClass('cu')


	
   });


/**/
$('.t_select>i').click(function(event) {

   // 切换
	
	$(this).toggleClass('check');

	
});


