import React from 'react';
import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import circle from '../assets/circle.svg';
import { css } from '@emotion/core';

gsap.registerPlugin(ScrollTrigger);

const NavRoot = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const NavContent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Divisor = styled.div`
  width: 1px;
  height: 100%;
  background: red;
`;

export default function NavBar({ sliderRef }) {
  const pinRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger:{
        trigger: sliderRef.current,
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
  }, [sliderRef])

  return (
    <NavRoot ref={pinRef}>
      <NavContent>
        <Divisor />
      </NavContent>
      <NavContent>
        <img ref={logoRef} src={circle} css={css`width: 69px;`} alt="logo" />
      </NavContent>
    </NavRoot>
  );
};