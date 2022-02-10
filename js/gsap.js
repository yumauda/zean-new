'use strict';

gsap.fromTo('.js-page-title',{
    y:'100%'
},{
    y:0,
    duration: 1.5,
    ease: "power3.out",
});

gsap.fromTo('.js-gray',{
    x:'-105%',
},{
    x:0,
    duration: 2,
    ease:"circ.out",
});
gsap.fromTo('.js-your',{
    y: '170%',
    opacity: 0,
},{
    y:0,
    duration: 2.5,
    ease:"power4.out",
    opacity:1,
});

