/*
* @Author: hp
* @Date:   2018-08-24 11:01:10
* @Last Modified by:   admin
* @Last Modified time: 2018-09-06 19:05:58
*/


$('.way').click(function(event) {
	$('#travelHabits').show();
});




/*表单验证部分*/

/*正则表达式*/
// 手机号验证
var num=/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/
// 邮箱
var em= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
// 密码
// 最少6位，至少有一个数字，至少有一个字母
var ps=/^.*(?=.{6,})(?=.*\d)(?=.*[A-Za-z]).*$/

// 表单提交部分

function reg(){

	var flag=true;
	    		// 手机号
	    		if(phone.value==''){

	    			phonetip.innerHTML="手机号不能为空"
    			    phonetip.style.color='red'
	    			flag=false;
	    			
	    		}else if(!num.test(phone.value)){

	    			phonetip.innerHTML="手机号格式不正确"
    			    phonetip.style.color='red'
	    			flag=false;
	    			console.log(9999)

	    		}else {
	    			phonetip.innerHTML='正确'
	    			phonetip.style.color='lime';
    		    }
     

    		    // 验证码
	    	
	    		
	    		if(code.value!='1234'){

	    			codetip.innerHTML="验证码不正确"
    			   codetip.style.color='red'
	    			flag=false;
	    			
	    		}else {
	    			codetip.innerHTML='正确'
	    			codetip.style.color='lime';
    		    }

    		    // 短信验证码
    		    if(note.value!='1234'){

	    			notetip.innerHTML="短信验证不正确"
    			   notetip.style.color='red'
	    			flag=false;
	    			
	    		}else {
	    			notetip.innerHTML='正确'
	    			notetip.style.color='lime';
    		    }

    		    // 邮箱部分
    		    if(email.value==''){

	    			emailtip.innerHTML="邮箱不能为空"
    			    emailtip.style.color='red'
	    			flag=false;
	    			
	    		}else if(!em.test(email.value)){
	    			emailtip.innerHTML="邮箱格式不正确"
    			    emailtip.style.color='red'
	    			flag=false;
	    			console.log(9999)

	    		}else {
	    			emailtip.innerHTML='正确'
	    			emailtip.style.color='lime';
    		    }

    		 // 密码
    		 if(pass.value==''){

	    			passtip.innerHTML="密码不能为空"
    			    passtip.style.color='red'
	    			flag=false;
	    			
	    		}else if(!ps.test(pass.value)){

	    			passtip.innerHTML="密码太简单"
    			    passtip.style.color='red'
	    			flag=false;
	    			console.log(9999)

	    		}else {
	    			passtip.innerHTML='正确'
	    			passtip.style.color='lime';
    		    }  


    		   if(pass.value!=repass.value) {
    		     	passtip.innerHTML="密码与确认密码不一致"
    			    passtip.style.color='red'
	    			flag=false;
    		   }




 return flag;
}


       // 获取焦点部分
       // 手机
	    	phone.onfocus=function(){
	    		phonetip.innerHTML="请正确填写你的手机号"
    			phonetip.style.color='#ccc';
	    	}
	    	note.onfocus=function(){
	    	    notetip.innerHTML="请填写你收到的验证码"
    			notetip.style.color='#ccc';
	    	}

          // 密码
          pass.onfocus=function(){
	    	    passtip.innerHTML="6-30个字符或数字组成"
    			passtip.style.color='#ccc';
	    	}

      // 失去焦点部分
	    	phone.onblur=function(){
    		if(phone.value==''){
    			phonetip.innerHTML="手机号不能为空"
    			phonetip.style.color='red';
    
    		}else if(!num.test(phone.value)){
	    			phonetip.innerHTML="手机号格式不正确"
    			    phonetip.style.color='red'
	    			flag=false;
	    			console.log(9999)

	    		}else{
    			phonetip.innerHTML="正确"
    			phonetip.style.color='lime';
    		}
    	}
//验证码
    code.onblur=function(){
    		if(code.value!='1234'){

	    			codetip.innerHTML="验证码不正确"
    			   codetip.style.color='red'
	    			flag=false;
	    			
	    		}else {
	    			codetip.innerHTML='正确'
	    			codetip.style.color='lime';
    		    }
    	}

    	//短信验证码
    note.onblur=function(){
    		if(note.value!='1234'){

	    			notetip.innerHTML="短信验证码不正确"
    			   notetip.style.color='red'
	    			flag=false;
	    			
	    		}else {
	    			notetip.innerHTML='正确'
	    			notetip.style.color='lime';
    		    }
    	}



    	// 邮箱部分
    	email.onblur=function(){
    		if(email.value==''){
    			emailtip.innerHTML="邮箱不能为空"
    			emailtip.style.color='red';
    
    		}else if(!em.test(email.value)){
	    			emailtip.innerHTML="邮箱格式不正确"
    			    emailtip.style.color='red'
	    			flag=false;
	    			console.log(9999)

	    		}else{
    			emailtip.innerHTML="正确"
    			emailtip.style.color='lime';
    		}
    	}

    	// 密码
    	pass.onblur=function(){
    		 if(pass.value==''){

	    			passtip.innerHTML="密码不能为空"
    			    passtip.style.color='red'
	    			flag=false;
	    			
	    		}else if(!ps.test(pass.value)){

	    			passtip.innerHTML="密码太简单"
    			    passtip.style.color='red'
	    			flag=false;
	    			console.log(9999)

	    		}else {
	    			passtip.innerHTML='正确'
	    			passtip.style.color='lime';
    		    }   

    	}
