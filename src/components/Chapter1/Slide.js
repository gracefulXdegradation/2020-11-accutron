import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useNavBar } from '../../providers/NavBarProvider';
import { css } from '@emotion/core';
import { Column } from '../UIKit';
import { BrowserView, MobileView } from 'react-device-detect';

gsap.registerPlugin(ScrollTrigger);

const SlideRoot = styled.div`
  width: 100%;
  height: ${({ subslides }) => subslides * 100}vh;
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

const Slide = ({ index, children, first, last, subslides = 1, animate = animateDefault }) =>  {
  const { setSlideHeading } = useNavBar();
  const slideRef = useRef(null)
  const slideInnerRef = useRef(null)

  useEffect(() => {
    const tl = animate(slideRef.current, {
      first,
      last
    });

    return () => tl.kill();
  }, [first, last, animate])

  useEffect(() => {
    const sc = ScrollTrigger.create({
      trigger: slideInnerRef.current || slideRef.current,
      start: 'center center',
      onToggle: (self) => {
        if (self.isActive) {
          setSlideHeading(index);
        }
      },
    });

    return () => sc.kill()
	}, [index, setSlideHeading, slideRef, slideInnerRef]);

  return (
    <>
      <BrowserView>
        <SlideRoot ref={slideRef} visible={first} subslides={subslides}>
          {children}
        </SlideRoot>
      </BrowserView>
      <MobileView>
        <SlideRoot ref={slideRef} visible={first} subslides={subslides}>
          <Column ref={slideInnerRef} h="100vh" css={css`padding: 211px 60px 82px;`}>
            {children}
          </Column>
        </SlideRoot>
      </MobileView>
    </>
  );
};

export default Slide;
