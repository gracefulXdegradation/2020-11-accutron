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
    gsap.timeline({
      scrollTrigger:{
        trigger: slide1ref.current,
        pin: slide1ref.current,
        pinSpacing: false,
        scrub: true,
        markers: true,
        start: 'top top',
      }
    })
    .to(slide1ref.current, {
      opacity: 1,
      duration: .5,
      ease: 'none',
    })
    .to(slide1ref.current, {
      opacity: 0,
      duration: .5,
      ease: 'none',
    })

    gsap.timeline({
      scrollTrigger:{
        trigger: slide2ref.current,
        pin: slide2ref.current,
        pinSpacing: false,
        scrub: true,
        // markers: true,
        start: 'top top',
      }
    })
    .to(slide2ref.current, {
      opacity: 1,
      duration: .5,
      ease: 'none',
    })
    .to(slide2ref.current, {
      opacity: 0,
      duration: .5,
      ease: 'none',
    })


    gsap.timeline({
      scrollTrigger:{
        trigger: slide3ref.current,
        pin: slide3ref.current,
        scrub: true,
        // markers: true,
        start: 'top top',
      }
    })
    .to(slide3ref.current, {
      opacity: 1,
      duration: 1,
      ease: 'none',
    })
    .to(slide3ref.current, {
      opacity: 0,
      duration: 1,
      ease: 'none',
    })
  }, [])

  return (
    <SliderRoot ref={pinSectionRef}>
      <SlideHeadingProvider headings={headings}>
        <SliderRoot ref={pinRef}>
          <SlideRoot ref={slide1ref}>
            <Slide1 />
          </SlideRoot>
          <SlideRoot ref={slide2ref}>
            <Slide1 />
          </SlideRoot>
          <SlideRoot ref={slide3ref}>
            <Slide1 />
          </SlideRoot>
        </SliderRoot>
        <NavBar sliderRef={pinSectionRef} />
      </SlideHeadingProvider>
    </SliderRoot>
  );
};
