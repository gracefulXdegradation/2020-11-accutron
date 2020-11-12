import React from 'react';
import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { css } from '@emotion/core';
import { H3, H4 } from '../../styles/typography';
import { useSlideHeading } from '../../providers/SlideHeadingProvider';
import { Circle, Layer, Divider } from '../UIKit';

gsap.registerPlugin(ScrollTrigger);

const NavRoot = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`;

export default function NavBar({ sliderRef }) {
  const { slideHeading } = useSlideHeading();
  const pinRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: sliderRef.current,
        pin: pinRef.current,
        scrub: true,
        start: 'top top',
        end:'bottom top',
      }
    })
    .to(logoRef.current, {
      rotation: 90,
      duration: 1,
      ease: 'none',
    })

    return () => tl.kill()
  }, [sliderRef])

  return (
    <NavRoot ref={pinRef}>
      <Layer>
        <div css={css`
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
        `}>
          <Divider vertical />
        </div>
      </Layer>
      <Layer>
        <div css={css`
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        `}>
          <div css={css`
            padding: 19px 0 13px;
            background: black;
          `}>
            <H3>{slideHeading}</H3>
          </div>
        </div>
      </Layer>
      <Layer>
        <div css={css`
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
        `}>
          <div css={css`
            display: flex;
            align-items: center;
            flex-direction: column;

            margin: 40px 0;
            padding: 20px 0;
            background: black;
          `}>
            <Circle ref={logoRef} size="m" />
            <div css={css`margin-top: 20px;`}>
              <H4>Chapter 1</H4>
            </div>
          </div>
          <div css={css`
            display: flex;
            align-items: center;
            flex-direction: column;

            margin: 40px 0;
            padding: 20px 0;
            background: black;
          `}>
            <Circle width="m" />
            <div css={css`margin-top: 20px;`}>
              <H4>Chapter 2</H4>
            </div>
          </div>
        </div>
      </Layer>
    </NavRoot>
  );
};