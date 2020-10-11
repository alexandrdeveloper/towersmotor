$(function() {

	let appealSlider = $('.appeal-slider');

	appealSlider.slick({
		slidesToShow: 1,
		prevArrow: $('.appeal-row .slider-arrow_prev'),
		nextArrow: $('.appeal-row .slider-arrow_next'),
		dots: true 
	});

});
