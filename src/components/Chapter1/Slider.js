import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { gsap, ScrollTrigger } from 'gsap/all';
import NavBar from './NavBar';
import Slide from './Slide';
import SlideHeadingProvider from '../../providers/SlideHeadingProvider';
import Slide1 from './slides/Slide1';

gsap.registerPlugin(ScrollTrigger);

const SliderRoot = styled.div`
  position: relative;
`;

const headings = ['origins', 'technology', 'legacy']

const SlideRoot = styled.div`
  width: 100%;
  height: 100vh;
  opacity: 0;
`;

export default function Slider() {
  const pinSectionRef = useRef(null);
  const pinRef = useRef(null)
  const slide1ref = useRef(null)
  const slide2ref = useRef(null)
  const slide3ref = useRef(null)

  useEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger:{
        trigger: slide1ref.current,
        pin: slide1ref.current,
        pinSpacing: false,
        scrub: true,
        snap: 'labels',
        markers: true,
        start: 'top top',
      }
    })
    .to(slide1ref.current, {
      opacity: 1,
      duration: .5,
      ease: 'none',
    })
    .addLabel("visible")
    .to(slide1ref.current, {
      opacity: 0,
      duration: .5,
      ease: 'none',
    })

    const tl2 = gsap.timeline({
      scrollTrigger:{
        trigger: slide2ref.current,
        pin: slide2ref.current,
        pinSpacing: false,
        scrub: true,
        snap: 'labels',
        // markers: true,
        start: 'top top',
      }
    })
    .to(slide2ref.current, {
      opacity: 1,
      duration: .5,
      ease: 'none',
    })
    .addLabel("visible")
    .to(slide2ref.current, {
      opacity: 0,
      duration: .5,
      ease: 'none',
    })


    const tl3 = gsap.timeline({
      scrollTrigger:{
        trigger: slide3ref.current,
        pin: slide3ref.current,
        scrub: true,
        snap: 'labels',
        // markers: true,
        start: 'top top',
      }
    })
    .to(slide3ref.current, {
      opacity: 1,
      duration: 1,
      ease: 'none',
    })
    .addLabel("visible")
    .to(slide3ref.current, {
      opacity: 0,
      duration: 1,
      ease: 'none',
    })

    return () => {
      tl1.kill()
      tl2.kill()
      tl3.kill()
    }
  }, [])

  return (
    <SliderRoot ref={pinSectionRef}>
      <SlideHeadingProvider headings={headings}>
        <SliderRoot ref={pinRef}>
          <Slide ref={slide1ref} index={0}>
            <Slide1 />
          </Slide>
          <Slide ref={slide2ref} index={1}>
            <Slide1 />
          </Slide>
          <Slide ref={slide3ref} index={2}>
            <Slide1 />
          </Slide>
        </SliderRoot>
        <NavBar sliderRef={pinSectionRef} />
      </SlideHeadingProvider>
    </SliderRoot>
  );
};
