import { gsap, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export const fadeIn = (tl, el) =>
  tl.to(el, {
    duration: 1,
    opacity: 1,
    ease: 'none'
  })

export const fadeOut = (tl, el) => 
  tl.to(el, {
    duration: .5,
    opacity: 0,
    delay: .5,
    ease: 'none'
  })

export const revealWatch = (tl, el) => 
  tl.fromTo(el, 2,
    { width: 0 },
    { width: '100%', ease: 'easeIn' },
  )

export const hideWatch = (tl, el) => 
  tl.fromTo(el, 2,
    { width: '100%' },
    { width: 0, ease: 'easeIn' },
  )

export const fadeInOut = (tl, el) => {
  fadeIn(tl, el)
  fadeOut(tl, el)
}

const createTimeline = (el, props) =>
  gsap.timeline({
    scrollTrigger:{
      ...props,
      trigger: el,
      pin: el,
      pinSpacing: false,
      scrub: true,
    },
  })

export const animateFadeInOut = (el, props, customAnimations) => {
  const tl = createTimeline(el, props);
  fadeIn(tl, el);
  customAnimations && customAnimations(tl);
  fadeOut(tl, el);
  return tl;
}

export const animateFadeOut = (el, props, customAnimations) => {
  const tl = createTimeline(el, props);
  customAnimations && customAnimations(tl);
  fadeOut(tl, el);
  return tl;
}

export const animateFadeIn = (el, props, customAnimations) => {
  const tl = createTimeline(el, props);
  fadeIn(tl, el);
  customAnimations && customAnimations(tl);
  return tl;
}
