/*
* @Author: hp
* @Date:   2018-08-20 19:01:59
* @Last Modified by:   admin
* @Last Modified time: 2018-09-06 19:15:16
*/


$('.right>input').click(function(event) {
    var index=$(this).index();
    $('.right>div').eq(index).addClass('current').siblings('').removeClass('current');
 
});


$('.mobile>p').hover(function() {
    $(".bind-phonetip").show()
}, function() {
     $(".bind-phonetip").hide()
});





/**表单验证*/

function login(){

    		var reg=true;
    		if(user.value==''){
    			usertip.innerHTML="用户名不能为空"
    			usertip.style.color='red'
    			reg=false;
    		}else{
    			usertip.innerHTML='下一步'
    			usertip.style.color='lime';
    		}


    		if(pass.value==''){
    			passtip.innerHTML="密码不能为空"
    			passtip.style.color='red';
    			reg=false;
    		}else{
    			passtip.innerHTML='下一步'
    			passtip.style.color='lime';
    		}
// 验证码
            if(code.value!='1234'){
                codetip.innerHTML="验证码不正确"
                codetip.style.color='red';
                reg=false;
            }else{
                codetip.innerHTML='下一步'
                codetip.style.color='lime';
            }


    		return reg;

    	}
// 失去焦点
    	user.onblur=function(){
    		if(user.value==''){
    			usertip.innerHTML="用户名不能为空"
    			usertip.style.color='red';
    
    		}else{
    			usertip.innerHTML='下一步'
    			usertip.style.color='lime';
    		}
    	}

    	pass.onblur=function(){
    		if(pass.value==''){
    			passtip.innerHTML="密码不能为空"
    			passtip.style.color='red';
    			reg=false;
    		}else{
    			passtip.innerHTML='下一步'
    			passtip.style.color='lime';
    		}

    	}
code.onblur=function(){
            if(code.value==''){
                codetip.innerHTML="验证码不能为空"
                codetip.style.color='red';
                reg=false;
            }else{
                codetip.innerHTML='下一步'
                codetip.style.color='lime';
            }

        }



