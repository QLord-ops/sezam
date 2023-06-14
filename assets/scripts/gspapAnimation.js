const headerOneAnimation = document.querySelector('.gsap-animation-text');
const gsapAnimationP = document.querySelectorAll('.animation-gsap-p')
// Add gsap init and animation

const tl = gsap.timeline({
    default: {
        duration: 1.5
    }
})

document.addEventListener('DOMContentLoaded', () => {
    tl.from(gsapAnimationP, {x: 400, opacity: 0, duration: 1})
        .from(headerOneAnimation, {x: -400, opacity: 0, duration: 1})
        .from('#rpoub', {x: -400, opacity: 0, scale: 2})
        .from('#menuHorizontal', {x: 400, opacity: 0, scale: 2})
        .from('#555', {y: 400, opacity: 0, scale: 2})
        .from('#fwidth', {scale: 2, opacity: 0})
})




