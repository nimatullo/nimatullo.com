$(window).scroll(function () {
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});


var preloader;

function preload(opacity) {
	if (opacity <= 0) {
		showContent();
	}
	else {
		preloader.style.opacity = opacity;
		window.setTimeout(function () { preload(opacity - 0.05) }, 100);
	}
}

function showContent() {
	preloader.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
	preloader = document.querySelector(".preloader");
	preload(1);
});
