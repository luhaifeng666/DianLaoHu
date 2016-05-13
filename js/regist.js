/**
 * regist.js
 * @authors Your Name (you@example.org)
 * @date    2016-05-13 02:02:20
 * @version $Id$
 */

$(function(){
	/*倒计时*/
	$('#getCheck').on('click', function(){
		if($(this).hasClass('disabled')) {
			return false;
		}else {
			var time = 59;
			$(this).addClass('disabled').html('<b>60</b>S后重新获取')
			var t = setInterval(function(){
				if(time > 0) {
					$('#getCheck').find('b').text(time);
					time --;
				}else {
					$('#getCheck').html('重新获取').removeClass('disabled');
					clearInterval(t);
				}
			},1000);
		}
	});

	/*验证*/
	var check = function(option, msg) {
		option.siblings('.help-block').removeClass('hide').text(msg);
	}

	$('#username').blur(function(){
		var option = $(this);
		if(option.val() == '') {
			check(option, '请输入用户名');
		}else {
			option.siblings('.help-block').addClass('hide');
		}
	});

	$('#phonenum').blur(function(){
		var option = $(this),
			checknum = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		if(option.val() == '') {
			check(option, '请输入手机号');
		}else if(checknum.test(option.val())) {
			option.siblings('.help-block').addClass('hide');
		}else {
			check(option, '请输入正确的手机号');
		}
	});

	$('#pwd').blur(function(){
		var option = $(this);
		if(option.val() == '') {
			check(option, '请输入密码');
		}else {
			option.siblings('.help-block').addClass('hide');
		}
	});

	$('#repwd').blur(function(){
		var option = $(this);
		if(option.val() == '') {
			check(option, '请再次输入密码');
		}else {
			option.siblings('.help-block').addClass('hide');
		}
	});

	$('#checknum').blur(function(){
		var option = $(this);
		if(option.val() == '') {
			check(option, '请输入验证码');
		}else {
			option.siblings('.help-block').addClass('hide');
		}
	});


	
});