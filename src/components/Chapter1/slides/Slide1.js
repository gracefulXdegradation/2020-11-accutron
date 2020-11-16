import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import LeftBgImage from '../../../assets/ch1-s1-l.png'
import WatchesFrontImg from '../../../assets/ch1-s1-r1.png'
import WatchesBackImg from '../../../assets/ch1-s1-r2.png'
import { Column, RightHalf, Row, SlideImage } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Watches = React.forwardRef((props, ref) => (
  <div ref={ref} css={css`position: relative;`}>
    <img src={WatchesFrontImg} alt="Accutron watches front" css={css`width: 63%;`} />
    <img src={WatchesBackImg} alt="Accutron watches back" css={css`width: 63%; position: absolute; right: 0; z-index: -1;`} />
  </div>
))

export default function Slide1({ index, last }) {
  const mobMechanismRef = useRef(null)
  const mobWatchesRef = useRef(null)

  const mobileSlideAnimation = (el) => {
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
      opacity: 1,
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
        <Slide index={index} startVisible>
          <Row h="100%">
            <Row w="50%" h="100%">
              <SlideImage greedy src={LeftBgImage} alt="Accutron mechanism" />
            </Row>
            <RightHalf>
              <Column css={css`max-width: 540px;`} h="100%" justify="center">
                <Column css={css`max-height: 672px;`} h="100%" justify="space-between">
                  <Column>
                    <P>
                      Long before American watchmaker Bulova introduced its legendary Accutron watch in October 1960,
                    </P>
                    <H4 css={css`margin-top: 32px;`}>
                      the company was founded in 1875 by Joseph Bulova in New York City.
                    </H4>
                  </Column>

                  <Watches />
                </Column>
              </Column>
            </RightHalf>
          </Row>
        </Slide>
      </BrowserView>

      <MobileView style={{height: "200vh"}}>
        <Slide index={index} animate={mobileSlideAnimation} subslides={2}>
          <Column h="100%">
            <Row h="100%" ref={mobMechanismRef}>
              <SlideImage src={LeftBgImage} alt="Accutron mechanism" css={css`padding-bottom: 30px;`} />
            </Row>
            <Column>
              <P mobile css={css`padding-bottom: 20px;`}>
                Long before American watchmaker Bulova introduced its legendary Accutron watch in October 1960,
              </P>
              <H4 mobile>
                the company was founded in 1875 by Joseph Bulova in New York City.
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
