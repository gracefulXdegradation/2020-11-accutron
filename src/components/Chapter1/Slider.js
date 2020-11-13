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
      },
      onComplete: () => {
        gsap.set(slide1ref.current, { y: 0 })
      }
    })
    .set(slide1ref.current, {
      height: '50%',
      opacity: 1
    })
    .to(slide1ref.current, {
      opacity: 0,
      duration: 1,
      ease: 'none',
    })

    const tl2 = gsap.timeline({
      scrollTrigger:{
        trigger: slide2ref.current,
        pin: slide2ref.current,
        pinSpacing: false,
        scrub: true,
      },
      onComplete: () => {
        gsap.set(slide2ref.current, { y: 0 })
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


    const tl3 = gsap.timeline({
      scrollTrigger:{
        trigger: slide3ref.current,
        pin: slide3ref.current,
        scrub: true,
      },
      onComplete: () => {
        gsap.set(slide3ref.current, { y: 0 })
      }
    })
    .set(slide3ref.current, {
      height: '50%'
    })
    .to(slide3ref.current, {
      opacity: 1,
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
