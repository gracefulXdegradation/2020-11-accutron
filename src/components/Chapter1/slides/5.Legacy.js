import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import BulovaImage from '../../../assets/ch1-legacy-2.png'
import NasaImage from '../../../assets/ch1-legacy-3.png'
import { Block, Column, Layer, RightHalf, Row, SlideImage } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function Legacy5({ index }) {
  const bulovaRef = useRef(null)
  const nasaRef = useRef(null)
  const pRef = useRef(null)
  const hRef = useRef(null)

  const desktopAnimation = (el, props) => {
    const transitions = 3;

    return gsap.timeline({
      scrollTrigger: {
        ...props,
        trigger: el,
        pin: el,
        pinSpacing: false,
        scrub: true,
      }
    })
    .to(el, {
      opacity: 1,
      duration: 1/transitions,
      ease: 'none',
    })
    .to(bulovaRef.current, {
      duration: 1/transitions,
      opacity: 0,
      ease: 'none'
    })
    .to([nasaRef.current, pRef.current], {
      duration: 1/transitions,
      delay: -1/transitions,
      opacity: 1,
      ease: 'none'
    })
    .to(el, {
      opacity: 0,
      duration: 1/transitions,
      ease: 'none',
    })
  }

  const mobileAnimation = (el, props) => {
    const transitions = 6;

    return gsap.timeline({
      scrollTrigger: {
        ...props,
        trigger: el,
        pin: el,
        pinSpacing: false,
        scrub: true,
      }
    })
    .to(el, {
      opacity: 1,
      duration: 1/transitions,
      ease: 'none',
    })
    .to([bulovaRef.current, pRef.current], {
      duration: 1/transitions,
      opacity: 0,
      ease: 'none'
    })
    .to(nasaRef.current, {
      duration: 1.2/transitions,
      delay: -.2/transitions,
      opacity: 1,
      ease: 'none'
    })
    .to(nasaRef.current, {
      duration: 1/transitions,
      opacity: 0,
      ease: 'none'
    })
    .to(hRef.current, {
      duration: 1/transitions,
      opacity: 1,
      ease: 'none'
    })
    .to(el, {
      opacity: 0,
      duration: 1/transitions,
      ease: 'none',
    })
  }

  return (
    <>
      <BrowserView style={{height: "150vh"}}>
        <Slide index={index} subslides={1.5} animate={desktopAnimation}>
          <Row w="50%" h="100%">
            <Layer ref={bulovaRef} top="0" left="0" bottom="0" right="0">
              <SlideImage greedy src={BulovaImage} alt="Bulova" />
            </Layer>
            <Layer ref={nasaRef} top="0" left="0" bottom="0" right="0" css={css`opacity: 0;`}>
              <SlideImage greedy src={NasaImage} alt="NASA control panel" css={css`object-position: left;`} />
            </Layer>
          </Row>
          <RightHalf>
            <Column css={css`max-width: 540px;`} h="100%" justify="center">
              <Column css={css`transform: translateY(50%);`}>
                <P>
                  When lives and billions of dollars worth of technology are at stake, that says a lot about who you can trust.
                </P>
                <H4 ref={pRef} alternative css={css`margin-top: 32px; opacity: 0;`}>
                  While Accutron’s tech saw its fair share of real-world applications, its legacy wasn’t just limited to governmental uses. 
                </H4>
              </Column>
            </Column>
          </RightHalf>
        </Slide>
      </BrowserView>

      <MobileView style={{height: "300vh"}}>
        <Slide index={index} subslides={3} animate={mobileAnimation}>
          <Block>
            <Layer>
              <P ref={pRef} mobile css={css`margin-bottom: 20px;`}>
                When lives and billions of dollars worth of technology are at stake, that says a lot about who you can trust.
              </P>
              <Block>
                <Layer ref={bulovaRef}>
                  <SlideImage src={BulovaImage} alt="Bulova" />
                </Layer>
                <Layer ref={nasaRef} css={css`opacity: 0;`}>
                  <SlideImage src={NasaImage} alt="NASA control panel" />
                </Layer>
              </Block>
            </Layer>
            <Layer ref={hRef} css={css`opacity: 0;`}>
              <H4 alternative>
                While Accutron’s tech saw its fair share of real-world applications, its legacy wasn’t just limited to governmental uses. 
              </H4>
            </Layer>
          </Block>
        </Slide>
      </MobileView>
    </>
  );
};
