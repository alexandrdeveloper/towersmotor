$(function() {

	let appealSlider = $('.appeal-slider');
	let dillersSlider = $('.dillers-slider');
	let videoFeedbacks = $('.video-feedbacks__slider');
	let screenshotFeedback = $('.screenshot-feedback__slider');
	let imageSlider = $('.image-slider__slider');

	appealSlider.slick({
		slidesToShow: 1,
		prevArrow: $('.appeal-row .slider-arrow_prev'),
		nextArrow: $('.appeal-row .slider-arrow_next'),
		dots: true 
	});	

	dillersSlider.slick({
		slidesToShow: 3,
		centerMode: true,
		centerPadding: '10px',
		prevArrow: $('.dillers .slider-arrow_prev'),
		nextArrow: $('.dillers .slider-arrow_next'),
		dots: true,
	});

	videoFeedbacks.slick({
		slidesToShow: 2,
		prevArrow: $('.video-feedbacks .slider-arrow_prev'),
		nextArrow: $('.video-feedbacks .slider-arrow_next'),
		dots: true,
	});

	screenshotFeedback.slick({
		slidesToShow: 4,
		prevArrow: $('.screenshot-feedback .slider-arrow_prev'),
		nextArrow: $('.screenshot-feedback .slider-arrow_next'),
		dots: true,
	});

	imageSlider.slick({
		slidesToShow: 1,
		prevArrow: $('.image-slider .slider-arrow_prev'),
		nextArrow: $('.image-slider .slider-arrow_next'),
		dots: true,

	});



});
