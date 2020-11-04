import { css} from '@emotion/core';
import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import logo from '../assets/logo.svg';

gsap.registerPlugin(ScrollTrigger);

const SlideWrapper = styled('div')`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4em;
`

const Slide = ({ index }) => {
  return (
    <SlideWrapper>
      {index}
    </SlideWrapper>
  )
}

export default function Slider() {
  const pinRef = useRef(null);
  const pinSectionRef = useRef(null);
  const logoRef = useRef(null);
  
  useEffect(() => {
    gsap.timeline({
      scrollTrigger:{
        trigger: pinSectionRef.current,
        pin: pinRef.current,
        scrub: true,
        markers: true,
        start: 'top top',
        end:'bottom bottom',
      }
    })
    .to(logoRef.current, {
      rotation: 90,
      duration: 1,
      ease: 'none',
    })
  }, [])

  return (
    <div
      css={css`
        position: relative;
      `}
      ref={pinSectionRef}>
        <div css={css`
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background: aquamarine;
      `} ref={pinRef}>
        <img ref={logoRef} src={logo} width="200" alt="logo" />
      </div>


      {[1,2,3,4,5,6,7,8,9].map(i => <Slide key={i} index={i} />)}
    </div>
  );
};
