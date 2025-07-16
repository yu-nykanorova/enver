export default function header() {
	const section = $("section[id]");
	const navLinks = $(".header__a");
	const burgerMenu = $(".header__burger");

	function setActiveLink(id) {
		navLinks.removeClass("active-link");
		$('.header__a[href="#' + id + '"]').addClass("active-link");
	}

	$(window).on("scroll", function() {
		
		const scrollPosition = $(window).scrollTop();
		const headerHeight = 130;

		let currentSectionId = null;
		let minDistance = Infinity;

		section.each(function () {
			const sectionTop = $(this).offset().top - headerHeight;
			const distance = Math.abs(scrollPosition - sectionTop);

			if (distance < minDistance) {
				minDistance = distance;
				currentSectionId = $(this).attr("id");
			}
		});

		if (currentSectionId) {
			setActiveLink(currentSectionId);
		}
	});

	navLinks.on("click", function() {
		const targetId = $(this).attr("href").replace("#", "");
		setActiveLink(targetId);
	});

	burgerMenu.click(function() {
		$(".header__burger, .header__nav").toggleClass("active-burger");
		$("body").toggleClass("lock");
	});
} 