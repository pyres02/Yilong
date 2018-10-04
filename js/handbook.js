/*
* @Author: hp
* @Date:   2018-08-17 14:34:21
* @Last Modified by:   admin
* @Last Modified time: 2018-09-07 23:17:23
*/

/*下拉框部分*/
$('.current-type').click(function(event) {

	$('.current-list').show();
	$('.current-list ul').show();
});

$('.current-list li').hover(function() {
	
	$(this).addClass('current').siblings().removeClass('current')
}, function() {
	
});

$('.current-list ').hover(function() {
	
	
}, function() {
	$('.current-list').hide();
});


/*下拉条*/
$('.current-list li').click(function(event) {
	var val=$(this).html();
	$('.current-type input').val(val);
	$(this).parent().hide();
});




/*图片滚动部分*/

        var num=0;
         var timer;
        
         // 定义定时器 
         function gogo(){
            timer=setInterval(function(){
                num++;
                // 当num>6时，通过css样式 让其移动，然后让num=1，目的是让动画看起来更加连贯
                if(num>5){
                    num=0;
                    $('.rotate ul').css('left',-800*num+'px');
                    num=1;
                   
                }

                // 当num==6时，是第六张图（与第一张一样）让第一个小圆圈变色

                if(num==5){
                    $('ol li').eq(0).addClass('current').siblings().removeClass('current');
                  
                }

                $('#ulist a').eq(num).addClass('current').siblings().removeClass('current')

                //  圆圈随图片移动
            $('.rotate ol li').eq(num).addClass('current').siblings().removeClass('current');
                // 排他
        
     // 图片移动
            $('.rotate ul').animate({'left':-800*num+'px'})

            },2000)
         }

              
gogo();

// 鼠标移入移出

     $('.rotate').hover(function() {     
             clearInterval(timer);

             }, function() {
                gogo();
     });


/* 点击圆圈*/
$('ol li').click(function(event) {

	var num=$(this).index();
	
	$(this).addClass('current').siblings().removeClass('current');

     $('#ulist a').eq(num).addClass('current').siblings().removeClass('current')
	  $('.rotate ul').css('left',-800*num+'px');

               
         if(num>6){
           num=0;
             $('.rotate ul').css('left',-800*num+'px');
             num=1;
                   
      }
   

});



/*二维码显示部分*/
$('.app-btn').hover(function() {
	$('.app-pic').show();
}, function() {
	$('.app-pic').hide();
});

/*文字滚动部分*/
  var num2=0;
    var timer2;
        
         // 定义定时器 
         function go(){
            timer2=setInterval(function(){
                num2++;
                
          
     // 文字移动
            $('.text-list ul').animate({'top':-17*num+'px'})

            },1000)
         }
        
go();


/*周边游部分*/
$('.nlist li').hover(function() {
 $(this).addClass('current').siblings().removeClass('current')
 var index=$(this).index();
 $('.nearby-trip>div').eq(index).addClass('current').siblings().removeClass('current')
}, function() {
	
});

/*出行日历*/
$('.date li').mouseenter(function(event) {
 $(this).addClass('current').siblings().removeClass('current')
  
});

$('.date li').click(function(event) {
	 $(this).addClass('current').siblings().removeClass('current')
     var index=$(this).index();
 $('.date-section>div').eq(index).addClass('current').siblings().removeClass('current')
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


/*回到顶部*/




$(window).scroll(function(event) {

		var vh=$(window).scrollTop();

		if(vh>$(window).height()){
			$('.back-top').show();
		}else{
			$('.back-top').hide();
		}


});



/*显示条部分*/

 $('.input').click(function(event) {
 	var index=$(this).index();
 	$('.c_show>div ul').eq(index).show();
 });


 /*点击出现对应的内容*/

 $('.c_show input').click(function(event) {
 	$('.c_show ul').show();
 	
 });

 $('.c_show ul').hover(function() {
 	$('.c_show ul').show();
 }, function() {
 	$('.c_show ul').hide();
 });