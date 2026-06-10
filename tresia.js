function removeTrailingChevronFromButtons() {
	const buttons = document.querySelectorAll('button.next-step, .btn.next-step');

	buttons.forEach((button) => {
		button.textContent = button.textContent.replace(/\s*>\s*$/, '');
	});
}

function initSwiper() {
	if (typeof Swiper === 'undefined') {
		return;
	}

	if (!document.querySelector('.swiper')) {
		return;
	}

	new Swiper('.swiper', {
		slidesPerView: 1.3,
		loop: true,
		autoplay: {
			delay: 2000,
		},
		spaceBetween: 25,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: false,
		breakpoints: {
			768: {
				spaceBetween: 50,
			},
			1200: {
				spaceBetween: 70,
				slidesPerView: 1.5,
			},
		},
	});
}

function initPageScripts() {
	removeTrailingChevronFromButtons();
	initSwiper();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initPageScripts);
} else {
	initPageScripts();
}
