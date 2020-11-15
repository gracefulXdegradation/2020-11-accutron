import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useSlideHeading } from '../../providers/SlideHeadingProvider';

gsap.registerPlugin(ScrollTrigger);

const SlideRoot = styled.div`
  width: 100%;
  height: ${({ height }) => height * 100}vh;
  opacity: ${({ visible }) => visible ? 1 : 0};
`;

const animateDefault = (el, { first, last }) => {
  if (first) {
    return gsap.timeline({
      scrollTrigger:{
        trigger: el,
        pin: el,
        pinSpacing: false,
        scrub: true,
      },
      onComplete: () => {
        gsap.set(el, { y: 0 })
      }
    })
    .set(el, {
      height: '50%',
      opacity: 1
    })
    .to(el, {
      opacity: 0,
      duration: 1,
      ease: 'none',
    })
  } else if (last) {
    return gsap.timeline({
      scrollTrigger:{
        trigger: el,
        pin: el,
        scrub: true,
      },
      onComplete: () => {
        gsap.set(el, { y: 0 })
      }
    })
    .set(el, {
      height: '50%'
    })
    .to(el, {
      opacity: 1,
      duration: 1,
      ease: 'none',
    })
  } else {
    return gsap.timeline({
      scrollTrigger:{
        trigger: el,
        pin: el,
        pinSpacing: false,
        scrub: true,
        markers: true
      },
      onComplete: () => {
        gsap.set(el, { y: 0 })
      }
    })
    .to(el, {
      opacity: 1,
      duration: .5,
      ease: 'none',
    })
    .to(el, {
      opacity: 0,
      duration: .5,
      ease: 'none',
    })
  }
}

const Slide = ({ index, children, first, last, height = 1, animate = animateDefault }) =>  {
  const { setSlideHeading } = useSlideHeading();
  const slideRef = useRef(null)

  useEffect(() => {
    const tl = animate(slideRef.current, {
      first,
      last
    });

    return () => tl.kill();
  }, [first, last, animate])

  useEffect(() => {
    const sc = ScrollTrigger.create({
      trigger: slideRef.current,
      start: 'center center',
      onToggle: (self) => {
        if (self.isActive) {
          setSlideHeading(index);
        }
      },
    });

    return () => sc.kill()
	}, [index, setSlideHeading, slideRef]);

  return (
    <SlideRoot ref={slideRef} visible={first} height={height}>
      {children}
    </SlideRoot>
  );
};

export default Slide;
