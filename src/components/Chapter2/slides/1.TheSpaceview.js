import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { P } from '../../../styles/typography';
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';
import { HalfWatches } from '../../Watches';
import data from '../../../data/story';

const d = data.chapters[1].slides[0]

gsap.registerPlugin(ScrollTrigger);

export default function TheSpaceview({ index }) {
  const slide1Ref = useRef(null)
  const slide2Ref = useRef(null)
  const slide3Ref = useRef(null)
  const slide4Ref = useRef(null)
  const slide5Ref = useRef(null)
  const slide6Ref = useRef(null)

  const desktopAnimation = (el, props) => {
    return gsap.timeline({
      scrollTrigger:{
        ...props,
        trigger: el,
        pin: el,
        pinSpacing: false,
        scrub: true,
      }
    })
    .to(slide1Ref.current, {
      duration: 1,
      delay: .5,
      opacity: 0,
      ease: 'none'
    })
    .to(slide2Ref.current, {
      duration: 1,
      opacity: 1,
      ease: 'none'
    })
    .to(slide2Ref.current, {
      duration: 1,
      delay: .5,
      opacity: 0,
      ease: 'none'
    })
    .to(slide3Ref.current, {
      duration: 1,
      opacity: 1,
      ease: 'none'
    })
    .to(slide3Ref.current, {
      duration: 1,
      delay: .5,
      opacity: 0,
      ease: 'none'
    })
    .to(slide4Ref.current, {
      duration: 1,
      opacity: 1,
      ease: 'none'
    })
    .to(slide4Ref.current, {
      duration: 1,
      delay: .5,
      opacity: 0,
      ease: 'none'
    })
    .to(slide5Ref.current, {
      duration: 1,
      opacity: 1,
      ease: 'none'
    })
    .to(slide5Ref.current, {
      duration: 1,
      delay: .5,
      opacity: 0,
      ease: 'none'
    })
    .to(slide6Ref.current, {
      duration: 1,
      opacity: 1,
      ease: 'none'
    })
    .to(el, {
      opacity: 0,
      duration: 1,
      delay: .5,
      ease: 'none',
    })
  }
  
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} startVisible subslides={4} animate={desktopAnimation}>
          <Row w="50%" h="100%" justify="flex-end" align="center">
            <HalfWatches large src={d.images[1].src} />
          </Row>
          
          <Row w="50%" h="100%">
            <Layer ref={slide1Ref}>
              <Row h="100%" justify="flex-start" align="center">
                <HalfWatches large src={d.images[0].src} right />
              </Row>
            </Layer>
            
            <Layer ref={slide2Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="flex-start" justify="center">
                <P css={css`position: absolute; transform: translateY(-50%); max-width: 520px; padding: 20px 0; margin: 0 32px;`}>
                  {d.copy[0].text}
                </P>
                <P css={css`position: absolute; transform: translateY(50%); max-width: 520px; padding: 20px 0; margin: 0 32px;`}>
                {d.copy[1].text}
                </P>
              </Column>
            </Layer>

            <Layer ref={slide3Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="flex-start" justify="center">
                <P css={css`margin-left: 32px; max-width: 520px;`}>
                {d.copy[2].text}
                </P>
              </Column>
            </Layer>

            <Layer ref={slide4Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="flex-start" justify="center">
                <P css={css`position: absolute; transform: translateY(-50%); max-width: 520px; padding: 20px 0; margin: 0 32px;`}>
                {d.copy[3].text}
                </P>
                <P css={css`position: absolute; transform: translateY(50%); max-width: 520px; padding: 20px 0; margin: 0 32px;`}>
                {d.copy[4].text}
                </P>
              </Column>
            </Layer>

            <Layer ref={slide5Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="flex-start" justify="center">
                <HalfWatches large src={d.images[1].src} right />
              </Column>
            </Layer>
          </Row>
          
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} startVisible subslides={5} animate={desktopAnimation}>
          <Row h="100%" align="center">
            <Row w="50%" h="100%" justify="flex-end" align="center">
              <HalfWatches src={d.images[1].src} />
            </Row>

            <Row w="50%" h="100%">
              <Layer ref={slide1Ref}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <HalfWatches src={d.images[0].src} right />
                </Column>
              </Layer>

              <Layer ref={slide2Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <P mobile css={css`margin-left: 8px; max-width: 165px;`}>
                    {d.copy[0].text}
                    <br /><br />
                    {d.copy[1].text}
                  </P>
                </Column>
              </Layer>

              <Layer ref={slide3Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <P mobile css={css`margin-left: 8px; max-width: 165px;`}>
                    {d.copy[2].text}
                  </P>
                </Column>
              </Layer>

              <Layer ref={slide4Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <P mobile css={css`margin-left: 8px; max-width: 165px;`}>
                    {d.copy[3].text}
                  </P>
                </Column>
              </Layer>

              <Layer ref={slide5Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <P mobile css={css`margin-left: 8px; max-width: 165px;`}>
                    {d.copy[4].text}
                  </P>
                </Column>
              </Layer>

              <Layer ref={slide6Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <HalfWatches src={d.images[1].src} right />
                </Column>
              </Layer>
            </Row>
          </Row>
        </Slide>
      </MobileView>
    </>
  );
};
