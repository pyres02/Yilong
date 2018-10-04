/*
* @Author: Administrator
* @Date:   2018-08-21 22:02:35
* @Last Modified by:   admin
* @Last Modified time: 2018-09-12 19:00:44
*/

// 页面一进来，就让第一屏有动画
setTimeout(function(){
	$('section>div').eq(0).removeClass('one').siblings().addClass('one');
    
},2)

var num=0;
// 点击右边导航
$('ol li').click(function(event) {
	// 当前增加类，其余删除类
	$(this).addClass('current').siblings().removeClass('current')
	var index=$(this).index();
	$('section').animate({'top':-100*index+'%'});

	$('section>div').eq(index).removeClass('one').siblings().addClass('one');
	$('.wrap').hide().slideDown(1000);

	
 $('.central').addClass('show').removeClass('show').addClass('show');


});


var timer;

// 滚动事件

$(document).mousewheel(function(e,b){
	// 向下滚动 b -1  向上滚动 b 1
	// 函数节流
	clearTimeout(timer)
  // 用到单次定时器，是为了节流
	timer=setTimeout(function(){
		console.log(b)
		num=num-b
		if(num<0){
			num=0
		}
		if(num>4){
			num=4
		}
    // 点击右边的按钮,带动画的移动
		$('ol li').eq(num).addClass('current').siblings().removeClass('current')
		$('section').stop().animate({'top':-100*num+'%'});	
     // 第二屏滚动时的动画
     if(num==1){
     	$('#page2 .central').addClass('show');
     }else{
     	$('#page2 .central').removeClass('show').removeClass('change');
     }

     // 第三屏滚动时的动画
      if(num==2){
     	$('#page3 .central').addClass('show');
     }else{
     	$('#page3 .central').removeClass('show').removeClass('change');
     }

   // 第4屏滚动时的动画
      if(num==3){
      $('#page4 .central').addClass('show');
     }else{
      $('#page4 .central').removeClass('show').removeClass('change');
     }

//  第5屏滚动时的动画
      if(num==4){
      $('#page5 .central').addClass('show');
          $('.screen5 .central i').animate({'height':'120px'}, 5000);
          $('.screen5 .central span').animate({'height':'300px'}, 4000);
          $('.screen5 .central span').show();

     }else{
      $('#page5 .central').removeClass('show').removeClass('change');
         $('.screen5 .central i').animate({'height':'0px'});
         $('.screen5 .central span').animate({'height':'0px'});
         $('.screen5 .central span').show();
     }

	},1000)
})



$('.wrap ul').click(function(event) {
	var index=$(this).index();
	$('ol li').eq(index+1).addClass('current').siblings().removeClass('current')
});

/**图标显示效果*/
	$('.wrap').slideDown(1000);

  /*第2 屏*/
  $('.screen2 .hot_left li').click(function(event) {
  	var index=$(this).index()
  	$(this).addClass('current').siblings().removeClass('current');
     $(".screen2.central h2 span").html(index+1+'月')
     console.log('index:'+index);

     
     $('.screen2 .central h2').removeClass();
     $(".screen2 .central h2 ").addClass('h'+(++index));
     


  	  if(index%2==0){
  	  	$('#page2 .central').addClass('change');
  	  }else{
  	  	$('#page2 .central').removeClass('change');
  	  }
  		
  });  		


 /*第3 屏*/
  $('.screen3 .hot_left li').click(function(event) {
  	var index=$(this).index();
  	index=index+12;
  	
  	$(this).addClass('current').siblings().removeClass('current');
     $(".screen3 .central h2 span").html($(this).html());
   
     $('.screen3 .central h2').removeClass();
     $(".screen3 .central h2 ").addClass('h'+(++index));
  		
     if(index%2==0){
  	  	$('#page3 .central').addClass('change');
  	  }else{
  	  	$('#page3 .central').removeClass('change').removeClass('change');
  	  }


  });  		


 /*第4屏*/
  $('.screen4 .hot_left li').click(function(event) {
    var index=$(this).index()
    index=index+16;
    $(this).addClass('current').siblings().removeClass('current');
  
     $(".screen4 .central h2 span").html($(this).html());
     $('.screen4 .central h2').removeClass();
     $(".screen4 .central h2 ").addClass('h'+(++index));


      if(index%2==0){
        $('#page4 .central').addClass('change');
      }else{
        $('#page4 .central').removeClass('change');
      }
      
    


  });     


  /*第5屏*/
  $('.screen5 .hot_left li').click(function(event) {
    var index=$(this).index()
    //加22是因为图片的从23开始的
    index=index+22;
    $(this).addClass('current').siblings().removeClass('current');
  // 修改中间图片的标题
     $(".screen5 .central h2 span").html($(this).html());
     $('.screen5 .central h2').removeClass();
     $(".screen5 .central h2 ").addClass('h'+(++index));

     // 中间文字动画出现（设置它的默认位置）
      $('.screen5 .central i').css({'height':'0px'});
      $('.screen5 .central span').css({'height':'0px'});

       $('.screen5 .central span').show();

// 点击左边的按钮切换内容
      if(index%2==0){
        $('#page5 .central').addClass('change');
         // 中间文字动画出现
         $('.screen5 .central i').animate({'height':'120px'}, 5000);
        $('.screen5 .central span').animate({'height':'300px'}, 4000);


      }else{
        $('#page5 .central').removeClass('change');
         $('.screen5 .central i').animate({'height':'120px'}, 5000);
        $('.screen5 .central span').animate({'height':'300px'}, 4000);
      }
      
    
    


  });     



   $('.screen5 .central h2').hover(function() {
       $('.screen5 .central span').css({'height':'180px'});
        $('.screen5 .central i').hide();
        $('.screen5 .central span').show();

         
    }, function() {
      
        $('.screen5 .central i').show();
        $('.screen5 .central span').hide();
    });
