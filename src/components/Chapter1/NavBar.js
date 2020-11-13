import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { css } from '@emotion/core';
import { H3, H4 } from '../../styles/typography';
import { useSlideHeading } from '../../providers/SlideHeadingProvider';
import { Circle, Layer, Divider, Row, Column, Block, Camouflage } from '../UIKit';

gsap.registerPlugin(ScrollTrigger);

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
    <Layer ref={pinRef} fullScreen css={css`pointer-events: none;`}>
      <Layer>
        <Row h="100%" justify="center">
          <Divider vertical />
        </Row>
      </Layer>

      <Layer>
        <Column w="100%" h="100%" justify="center" align="center">
          <Block css={css`padding: 19px 0 13px;`}>
            <Camouflage />
            <H3>{slideHeading}</H3>
          </Block>
        </Column>
      </Layer>
      <Layer>
        <Column h="100%" w="100%" justify="space-between" align="center">
          <Column align="center" css={css`padding: 50px 0 20px;`}>
            <Camouflage />
            <Circle ref={logoRef} size="m" />
            <H4 css={css`margin-top: 20px;`}>Chapter 1</H4>
          </Column>
          <Column align="center" css={css`padding: 30px 0 50px;`}>
            <Camouflage />
            <Circle size="m" />
            <H4 css={css`margin-top: 20px;`}>Chapter 2</H4>
          </Column>
        </Column>
      </Layer>

    </Layer>
  );
};