/**
 * login
 * @authors Your Name (you@example.org)
 * @date    2016-05-14 00:57:40
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

	$('#login').on('click', function(){
		$('.regist_box').addClass('hide');
		$('.login_box').removeClass('hide');
	});
});
