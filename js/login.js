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

	$('.tbui_slideshow_list li').each(function(){
		var index = $(this).index();
		if($(this).find('img').length < 1) {
			$(this).remove();
			if($('#controller li:eq('+index+')')) {
				$('#controller li:eq('+index+')').remove();
			}
		}
	});

	$(window).scroll(function(){
		var winH = $(window).height(),
			scorllDis = $(window).scrollTop(),
			offDis;
		$('.left_box').each(function(){
			offDis = $(this).offset().top;
			if(offDis - scorllDis < winH && !$(this).hasClass('show')){
				$(this).addClass('show');
				$(this).find('.text_red1').each(function(){
					var value,
						time = value / 200,
						total = 0,
						sel = $(this),
						numTest = /^-?([1-9]d*.d*|0.d*[1-9]d*|0?.0+|0)$/;
						if(numTest.test($(this).text())){
							value = $(this).text().split('.')[0];
						}else {
							value = parseInt($(this).text());
						}
						t = setInterval(function(){
							if(total < value) {
								total += 1;
								if(!numTest.test(sel.text())){
									sel.text(total + '.' + $(this).text().split('.')[1]);
								}else {
									sel.text(total);
								}
							}else {
								clearInterval(t);
							}
						},time);
				});
			}
		});
	});
});
