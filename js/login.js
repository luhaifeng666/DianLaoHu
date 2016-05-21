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
					var value,tail,
						time = 2000 / value,
						total = 0,
						sel = $(this),
						index = sel.parents('.pure-u-1-3').index(),
						numTest = /^(-?\d+)(\.\d+)?$/;
						if(index == 1){
							value = $(this).text().split('.')[0];
							tail = $(this).text().split('.')[1];
						}else {
							value = parseInt($(this).text());
						}
						var t = setInterval(function(){
							if(total < value) {
								total += 1;
								if(tail){
									sel.text(total + '.' + tail);
								}else {
									sel.text(total);
								}
							}else {
								clearInterval(t);
							}
						},time);
				});
				var persons = parseInt($(this).find('.text_red').text());
				if(persons) {
					var pTime = 2000 / persons,
						pc = 0,
						el = $(this);
					 	pt = setInterval(function(){
						if(pc<persons){
							el.find('.text_red').text(pc);
							pc++;
						}else {
							clearInterval(pt);
						}
					}, pTime);
				}
			}
		});
	});
});
