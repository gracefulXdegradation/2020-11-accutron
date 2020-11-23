import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import { Block, Column, Layer, RightHalf, Row, SlideImage } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';
import data from '../../../data/story';

const d = data.chapters[0].slides[4]

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
              <SlideImage greedy {...d.images[0]} />
            </Layer>
            <Layer ref={nasaRef} top="0" left="0" bottom="0" right="0" css={css`opacity: 0;`}>
              <SlideImage greedy {...d.images[1]} css={css`object-position: left;`} />
            </Layer>
          </Row>
          <RightHalf>
            <Column css={css`max-width: 540px;`} h="100%" justify="center">
              <Column css={css`transform: translateY(50%);`}>
                <P>
                {d.copy[0].text}
                </P>
                <H4 ref={pRef} alternative css={css`margin-top: 32px; opacity: 0;`}>
                {d.copy[1].text}
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
              {d.copy[0].text}
              </P>
              <Block>
                <Layer ref={bulovaRef}>
                  <SlideImage {...d.images[0]} />
                </Layer>
                <Layer ref={nasaRef} css={css`opacity: 0;`}>
                  <SlideImage {...d.images[1]} />
                </Layer>
              </Block>
            </Layer>
            <Layer ref={hRef} css={css`opacity: 0;`}>
              <H4 alternative>
              {d.copy[1].text}
              </H4>
            </Layer>
          </Block>
        </Slide>
      </MobileView>
    </>
  );
};
