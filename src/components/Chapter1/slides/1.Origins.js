import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import { Column, RightHalf, Row, SlideImage } from '../../UIKit';
import Slide, { animateFadeInOut } from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';
import data from '../../../data/story';

const d = data.chapters[0].slides[0]

gsap.registerPlugin(ScrollTrigger);

const Watches = React.forwardRef((props, ref) => (
  <div ref={ref} css={css`position: relative;`}>
    <img src={d.images[1].src} alt={d.images[1].alt} css={css`width: 63%;`} />
    <img src={d.images[2].src} alt={d.images[2].alt} css={css`width: 63%; position: absolute; right: 0; z-index: -1;`} />
  </div>
))

export default function Origins1({ index }) {
  const mobMechanismRef = useRef(null)
  const mobWatchesRef = useRef(null)

  const mobileSlideAnimation = (el, props) => {
    return gsap.timeline({
      scrollTrigger:{
        ...props,
        trigger: el,
        pin: el,
        pinSpacing: false,
        scrub: true,
      },
    })
    .to(mobMechanismRef.current, {
      duration: 0.25,
      opacity: 0,
      ease: 'none'
    })
    .to(mobMechanismRef.current, {
      duration: 0.25,
      height: 0,
      ease: 'none'
    })
    .to(mobWatchesRef.current, {
      duration: 0.25,
      opacity: 1,
      ease: 'none'
    })
    .to(el, {
      opacity: 0,
      duration: .25,
      ease: 'none',
    })
  }
  
  return (
    <>
      <BrowserView>
        <Slide index={index} animate={animateFadeInOut}>
          <Row w="50%" h="100%">
            <SlideImage greedy src={d.images[0].src} alt={d.images[0].alt} />
          </Row>
          <RightHalf>
            <Column css={css`max-width: 540px;`} h="100%" justify="center">
              <Column css={css`max-height: 672px;`} h="100%" justify="space-between">
                <Column>
                  <P>
                    {d.copy[0].text}
                  </P>
                  <H4 alternative css={css`margin-top: 32px;`}>
                    {d.copy[1].text}
                  </H4>
                </Column>

                <Watches />
              </Column>
            </Column>
          </RightHalf>
        </Slide>
      </BrowserView>

      <MobileView style={{height: "200vh"}}>
        <Slide index={index} startVisible animate={mobileSlideAnimation} subslides={2}>
          <Column h="100%">
            <Row h="100%" ref={mobMechanismRef}>
              <SlideImage src={d.images[0].src} alt={d.images[0].alt} css={css`padding-bottom: 30px;`} />
            </Row>
            <Column>
              <P mobile css={css`padding-bottom: 20px;`}>
                {d.copy[0].text}
              </P>
              <H4 alternative mobile>
                {d.copy[1].text}
              </H4>
            </Column>
            <Row ref={mobWatchesRef} css={css`opacity: 0; padding-top: 30px;`}>
              <Watches />
            </Row>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
