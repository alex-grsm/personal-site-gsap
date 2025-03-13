import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const video = document.querySelector('.hero__video-content');
video.currentTime = 5;

/******************************************************* */
const timeline = gsap.timeline({
    defaults: {
        duration: 0.7,
        ease: "power2.out",
        opacity: 0
    },
    delay: 0.2,
});

timeline
    .from('.hero__title span', {
        y: 150,
        skewY: 7,
        duration: 2,
    })
    .from('.hero__subtitle', {
        letterSpacing: -10,
        ease: "bounce.out"
    }, '<50%')


/******************************************************* */
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: 'play none none reverse',
});

gsap.to('.hero__overlay', {
    scale: 52,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
    },
})

gsap.to('.hero__title--right', {
    autoAlpha: 0,
    x: 500,
    duration: .5,
    scrollTrigger: {
        start: 1,
    }
})
gsap.to('.hero__title--left', {
    autoAlpha: 0,
    x: -500,
    duration: .5,
    scrollTrigger: {
        start: 1,
    }
})

gsap.to('.hero__subtitle', {
    autoAlpha: 0,
    letterSpacing: -10,
    duration: .5,
    scrollTrigger: {
        start: 2,
    }
})

/******************************************************* */
const tl = gsap.timeline();

tl
    .from('.hero__info div', {
        y: 150,
        opacity: 0,
        stagger: {
            amount: 0.4,
        },
        delay: .5,
    })
    .from('.hero__action', {
        opacity: 0,
        duration: 2,
    }, .5)
    .to('.main', {
        x: -window.innerWidth
    })

ScrollTrigger.create({
    animation: tl,
    trigger: '.main',
    start: 'top top',
    end: "+=600",
    scrub: 1,
    pin: true,
})

gsap.utils.toArray('.project--carolina .project__gallery').forEach((item) => {
    gsap.fromTo(item,
        {
            opacity: 0,
            x: -100,
        },
        {
            opacity: 1,
            x: -50,
            scrollTrigger: {
                trigger: item,
                start: '15%',
                stagger: {
                    amount: 0.4,
                },
            },
        }
    );
});

gsap.utils.toArray('.project--soul-dance .project__gallery').forEach((item) => {
    gsap.fromTo(item,
        {
            opacity: 0.2,
            x: 0,
        },
        {
            opacity: 1,
            x: -50,
            scrollTrigger: {
                trigger: item,
                start: '10%',
                stagger: {
                    amount: 0.4,
                },
            },
        }
    );
});

gsap.utils.toArray('.project--retro .project__gallery').forEach((item) => {
    gsap.fromTo(item,
        {
            opacity: 0.2,
            x: 0,
        },
        {
            opacity: 1,
            x: -50,
            scrollTrigger: {
                trigger: item,
                start: '10%',
                stagger: {
                    amount: 0.4,
                },
            }
        }
    );
});
