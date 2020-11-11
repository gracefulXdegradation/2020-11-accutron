import React from 'react';
import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { css } from '@emotion/core';
import { H3, H4 } from '../../styles/typography';
import { useSlideHeading } from '../../providers/SlideHeadingProvider';

gsap.registerPlugin(ScrollTrigger);

const Layer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const NavRoot = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const Divisor = styled.div`
  width: 1px;
  height: 100%;
  background: ${props => props.theme.borderColor};
`;

const Circle = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  border: 1px solid ${props => props.theme.fontParagraph};
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.bgColor};

  &:after {
    content: '';
    height: 100%;
    width: 1px;
    background-color: ${props => props.theme.fontParagraph};
  }
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
        end:'bottom bottom',
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
          `}>
            <Circle ref={logoRef} width={69} />
            <div css={css`margin-top: 20px;`}>
              <H4>Chapter 2</H4>
            </div>
            <H3 alternative>{slideHeading}</H3>
          </div>
          <div css={css`
            display: flex;
            align-items: center;
            flex-direction: column;

            margin: 40px 0;
            padding: 20px 0;
          `}>
            <Circle width={69} />
            <div css={css`margin-top: 20px;`}>
              <H4>Chapter 1</H4>
            </div>
          </div>
        </div>
      </Layer>
    </NavRoot>
  );
};