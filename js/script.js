$(document).ready(function(){
	$(".headermobile__burger").click(function(event) {
		$(".headermobile__burger,.headermobile__nav").toggleClass("active");
		$("body").toggleClass("lock");
	});
});