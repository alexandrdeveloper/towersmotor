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

	let vacanciesSlider = $('.vacancies-list');

	vacanciesSlider.slick({
		slidesToShow: 1,
		prevArrow: $('.vacancies-content .slider-arrow_prev'),
		nextArrow: $('.vacancies-content .slider-arrow_next'),
		dots: true,
	});

	$('div.tab-controls__list').on('click', '.tab-controls__toggle:not(.tab-controls__toggle_active)', function() {
		$(this)
		  .addClass('tab-controls__toggle_active').siblings().removeClass('tab-controls__toggle_active')
		  .closest('.tab-controls').closest('.workers-tab').find('.tab-content').find('.workers-tab__item').removeClass('workers-tab__item_active').eq($(this).index()).addClass('workers-tab__item_active');
	  });

	$('.contacts-tab__controls').on('click', '.theme-toggle:not(.theme-toggle_active)', function() {
		$(this)
		  .addClass('theme-toggle_active').siblings().removeClass('theme-toggle_active')
		  .closest('.contacts-tab__controls').next('.contacts-tab__content').find('.contacts-tab__item').removeClass('contacts-tab__item_active').eq($(this).index()).addClass('contacts-tab__item_active');
	  });

	

	



});
