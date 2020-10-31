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
		responsive: [{
			breakpoint: 767,
			settings: "unslick",
		}]
	});

	videoFeedbacks.slick({
		slidesToShow: 2,
		prevArrow: $('.video-feedbacks .slider-arrow_prev'),
		nextArrow: $('.video-feedbacks .slider-arrow_next'),
		dots: true,
		responsive: [{
			breakpoint: 767,
			settings: "unslick",
		}]
	});

	screenshotFeedback.slick({
		slidesToShow: 4,
		prevArrow: $('.screenshot-feedback .slider-arrow_prev'),
		nextArrow: $('.screenshot-feedback .slider-arrow_next'),
		dots: true,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},{
			breakpoint: 767,
			settings: "unslick",
		}]
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

	$('.theme-tab__controls').on('click', '.theme-toggle:not(.theme-toggle_active)', function() {
		$(this)
		  .addClass('theme-toggle_active').siblings().removeClass('theme-toggle_active')
		  .closest('.theme-tab__controls').next('.theme-tab__content').find('.theme-tab__item').removeClass('theme-tab__item_active').eq($(this).index()).addClass('theme-tab__item_active');
	});


	$('.menu-toggle').on('click', function(e){
		e.preventDefault();
		$('.navbar, .menu-close').fadeIn(300);
		$(this).fadeOut(300);
	});

	$('.menu-close').on('click', function(e){
		e.preventDefault();
		$(this).fadeOut(300);
		$('.navbar').fadeOut(300);
		$('.menu-toggle').fadeIn(300);
	});

	$('.submenu>a').on('click', function(e) {
		e.preventDefault();
		$('.submenu-list').slideToggle();
	});

	$('.gallery-popup').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
    
	
	gsap.timeline().from('.menu__box', {duration: 1, opacity: 0, y: -200})				   
				   .from('.logo__link', {opacity: 0, duration: 1})
				   .from('.header-address', {duration: .3, y: 20, opacity: 0}, "-=.5")
				   .from('.header-contacts', {duration: .3, y: 20, opacity: 0}, "-=.3" )
				   .from('.header-top__breadcrumbs', {duration: 1, opacity: 0});

	gsap.registerPlugin(ScrollTrigger);

	
	gsap.from(".section-title", {
		scrollTrigger: ".section-title",
		x: 100,
		opacity: 0,
		duration: .3,
	});
	



});
