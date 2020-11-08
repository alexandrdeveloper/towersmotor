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

	/*Animation*/
    
	let heroContentAnim = gsap.timeline();
	heroContentAnim.from('.men32u__box', {duration: 1, opacity: 0, y: -200})				   
				   .from('.logo__link', {opacity: 0, duration: 1})
				   .from('.header-address', {duration: .3, y: 20, opacity: 0}, "-=.5")
				   .from('.header-contacts', {duration: .3, y: 20, opacity: 0}, "-=.3" )
				   .from('.header-top__breadcrumbs', {duration: 1, opacity: 0})
				   .from('.hero-title', {duration: .3, y: 100, opacity: 0})
				   .from('.hero-description', {duration: .3, y: 100, opacity: 0})
				   .from('.hero-form', {duration: .8, y: 100, opacity: 0}, "-=.1");

	

	gsap.registerPlugin(ScrollTrigger);
	
	
	const titleAnim = gsap.utils.toArray('.section-title');
	titleAnim.forEach((text, i) => {	

		gsap.from(text, {
			x: 300,
			opacity: 0,
			duration: 1,
			ease: "power3.out",
			scrollTrigger: {
				trigger: text,
				start: "top 90%",
				end: "top 20%",
			}
		});
	});


	gsap.from(".numbered-item", {
		scrollTrigger: {
			trigger: '.numbered-list',
			start: "top 90%",
			end: "top 20%",
		},
		duration: .5, 
		x: 50, 
		opacity: 0, 
		stagger: .2,
		ease: "power3.out",
	});

	gsap.from(".team-text p", {
		scrollTrigger: {
			trigger: 'section.team',
			start: "top 90%",
			end: "top 20%",
		},
		duration: 1, 
		y: 50, 
		opacity: 0, 
		stagger: .2,
		ease: "power3.out",
	});

	gsap.from(".team-list__item", {
		scrollTrigger: {
			trigger: '.team-list',
			start: "top 90%",
			end: "top 20%",
		},
		duration: .5,
		x: 50, 
		opacity: 0, 
		stagger: .2
	});

	gsap.from(".team-gallery__item", {
		scrollTrigger: {
			trigger: '.team-gallery',
			start: "top 90%",
			end: "top 20%",
		},
		duration: .5,
		x: 50, 
		opacity: 0, 
		stagger: .2,
		ease: "power3.out",
	});
	gsap.from(".gallery-large__img", {
		scrollTrigger: {
			trigger: '.team-gallery',
			start: "top 90%",
			end: "top 20%",
		},
		duration: .5,
		x: -100, 
		opacity: 0,
		ease: "power3.out",
	});

	gsap.from(".tour-box", {
		scrollTrigger: {
			trigger: '.tour-box',
			start: "top 90%",
			end: "top 20%",
		},
		duration: .5,
		y: 100, 
		opacity: 0,
		ease: "power3.out",
	});


	gsap.from('.carlist__row', {
		duration: .6,
		y: 100,
		opacity: 0,
		stagger: .3,
		ease: "power3.out",
		scrollTrigger: {
			trigger: '.carlist-container',
			start: "top 90%",
			end: "top 10%",
		},
	});

	gsap.from('.homeform input', {
		duration: .6,
		y: 100,
		opacity: 0,
		stagger: .3,
		ease: "power3.out",
		scrollTrigger: {
			trigger: '.homeform',
			start: "top 90%",
			end: "top 10%",
		},
	});

	gsap.from('.homeform textarea', {
		duration: .6,
		y: 100,
		opacity: 0,
		delay: 1.6,
		scrollTrigger: {
			trigger: '.homeform',
			start: "top 90%",
			end: "top 10%",
		},
	});

	gsap.from('.homeform-car', {
		duration: 2,		
		opacity: 0,
		ease: "power3.out",
		scrollTrigger: {
			trigger: '.homeform',
			start: "top 90%",
			end: "top 10%",
		},
	});

	gsap.from('.home-contacts__item', {
		duration: .6,
		x: -100,
		opacity: 0,
		stagger: .3,
		ease: "power3.out",
		scrollTrigger: {
			trigger: '.home-contacts',
			start: "top 90%",
			end: "top 10%",
		},
	});

	gsap.from('.guide-social__item', {
		duration: .6,
		x: 30,
		opacity: 0,
		stagger: .3,
		ease: "power3.out",
		scrollTrigger: {
			trigger: '.guide-info',
			start: "top 85%",
			end: "top 10%",
		},
	});


	let preloaderAnim = gsap.timeline({delay: .5});

	preloaderAnim.to('.preloader-logo', {opacity: 1, duration: .4})
	.to('.preloader-logo', {
		y: -200,
		duration: 1,
		delay: 2,
		ease: "power3.out",
	})
	.to('.preloader', {
		y: "-120%",
		duration: 1,
		ease: "power3.out",
	}, "-=.5");

	let heroCar = gsap.timeline({delay: 4.5});
	let carWay = $(window).innerWidth();
	let carWheel = $('.car').find('.car-wheel');
	let carWheelD = carWheel.innerWidth();
	let carWheelP = carWheelD * 3.14;
	let carWheelRotate = carWay / carWheelP;
	let carWheelRotateV = -360 * carWheelRotate;
	console.log('Длина пути автомобиля ' + carWay);
	console.log("Диаметр колеса " + carWheelD);
	console.log("Длина окружности колеса " + carWheelP);
	console.log("Количество оборотов колеса " + carWheelRotate);



	heroCar.from('.car', {duration: 2, x: carWay, ease: "power1.inOut",})
		   .to('.car-wheel, .car-brake', {duration: 2, rotate: carWheelRotateV, ease: "power1.inOut",}, "-=2")
		   .to('.car-body', {duration: .5, rotate: -0.4}, "-=0.4")
		   .to('.car-body', {duration: .3, rotate: 0});




	
		
	



});
