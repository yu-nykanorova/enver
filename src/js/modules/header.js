export default function header() {
	const section = $("section[id]");
	const navLinks = $(".header__a");

	$(window).on("scroll", function() {
		const scrollPosition = $(document).scrollTop();

		section.each(function () {
			const top = $(this).offset().top;
			const bottom = top + $(this).outerHeight();
			const id = $(this).attr("id");

			if (scrollPosition >= top && scrollPosition < bottom) {
				navLinks.removeClass("active-link");
				$('.header__a[href="#' + id + '"]').addClass("active-link");
			}
		});
	});

	$(".header__burger").click(function(event){
		$(".header__burger, .header__nav").toggleClass("active-burger");
		$("body").toggleClass("lock");
	});
} 