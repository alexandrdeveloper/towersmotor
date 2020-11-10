$(function() {

    let winW = $(window).innerWidth();

    if (winW > 767) {
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

        gsap.from('.theme-table__row', {
            duration: .6,
            y: 100,
            opacity: 0,
            stagger: .3,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.theme-table',
                start: "top 90%",
                end: "top 10%",
            },
        });

        gsap.from('.block-404 img', {
            duration: 2,
            y: 100,
            opacity: 0,
            ease: "power3.out",
        });



        gsap.from('.about-article__seo', {
            duration: .6,
            x: -80,
            opacity: 0,
            stagger: .3,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.about-article__content',
                start: "top 85%",
                end: "top 10%",
            },
        });

        gsap.from('.tab-controls__item', {
            duration: .6,
            x: 80,
            opacity: 0,
            stagger: .1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.tab-controls',
                start: "top 85%",
                end: "top 10%",
            },
        });

        

        gsap.from('.news-item', {
            duration: .6,
            x: 80,
            opacity: 0,
            stagger: .1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.news',
                start: "top 85%",
                end: "top 10%",
            },
        });

        gsap.from('.article-date, .case-logo', {
            duration: .6,
            y: 80,
            opacity: 0,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.article-content',
                start: "top 85%",
                end: "top 10%",
            },
        });

        gsap.from('.quote-image', {
            duration: .6,
            x: 150,
            opacity: 0,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.article-quote',
                start: "top 85%",
                end: "top 10%",
            },
        });
        gsap.from('.quote-text', {
            duration: .6,
            x: 150,
            opacity: 0,
            ease: "power3.out",
            delay: .1,
            scrollTrigger: {
                trigger: '.article-quote',
                start: "top 85%",
                end: "top 10%",
            },
        });

        gsap.from('.contacts-gallery__item', {
            duration: .6,
            x: 150,
            opacity: 0,
            ease: "power3.out",
            stagger: .1,
            scale: .9,
            scrollTrigger: {
                trigger: '.contacts-gallery',
                start: "top 85%",
                end: "top 10%",
            },
        });

        gsap.from('.quiz-car_left', {
            duration: 2,
            opacity: 0,
            ease: "power3.out",
            scale: .9,
            
        });
        gsap.from('.coins', {
            duration: 2,
            opacity: 0,
            ease: "power3.out",
            delay: .2
            
        });

        gsap.from('.theme-list-dotted li', {
            duration: .6,
            x: 50,
            opacity: 0,
            ease: "power3.out",
            stagger: .1,
            scrollTrigger: {
                trigger: '.theme-list-dotted',
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


    }

    
 });