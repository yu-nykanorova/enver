export default header;

$(document).ready(function() {
	$(".header__burger").click(function(event){
		$(".header__burger, .header__nav").toggleClass("active");
		$("body").toggleClass("lock");
	});
}); 