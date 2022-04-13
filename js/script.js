$(document).ready(function(){
	$(".headermobile__burger").click(function(event) {
		$(".headermobile__burger,.headermobile__nav").toggleClass("active");
		$("body").toggleClass("lock");
	});

	$('.review__wrap').each(function () {
		if ($(this).hover(function () {
			$(this).find('.review__footer').toggleClass('brd'); //найти элемент внутри выбранного this
		}));
	});	
})