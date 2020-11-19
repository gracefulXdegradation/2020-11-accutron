import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import SoldierImg from '../../../assets/2ES6A001_Soldier_short.png'
import AccutronSpaceviewAlphaImg from '../../../assets/1961_Accutron-SpaceviewAlpha_short.png'
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';
import { HalfWatches } from '../../Watches';

gsap.registerPlugin(ScrollTrigger);

export default function TheSpaceview({ index }) {
  const slide1Ref = useRef(null)
  const slide2Ref = useRef(null)
  const slide3Ref = useRef(null)
  const slide4Ref = useRef(null)
  const slide5Ref = useRef(null)

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
    .to(el, {
      opacity: 0,
      duration: 1,
      delay: .5,
      ease: 'none',
    })
  }
  
  return (
    <>
      <BrowserView style={{height: "400vh"}}>
        <Slide index={index} startVisible subslides={4} animate={desktopAnimation}>
          <Row w="50%" h="100%" justify="flex-end" align="center">
            <HalfWatches large img={AccutronSpaceviewAlphaImg} />
          </Row>
          
          <Row w="50%" h="100%">
            <Layer ref={slide1Ref}>
              <Row h="100%" justify="flex-start" align="center">
                <HalfWatches large img={SoldierImg} right />
              </Row>
            </Layer>
            
            <Layer ref={slide2Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="flex-start" justify="center">
                <P css={css`position: absolute; transform: translateY(-50%); max-width: 520px; padding: 20px 0; margin: 0 32px;`}>
                  The original Accutron Spaceview – arguably its most popular and visually peculiar watch – was never meant for mass production.
                </P>
                <P css={css`position: absolute; transform: translateY(50%); max-width: 520px; padding: 20px 0; margin: 0 32px;`}>
                  The Spaceview of yesteryear featured a deconstructed outer case design that exposed the inner workings of the watch and was only provided to retailers as display units to help explain how the innovative technology worked. 
                </P>
              </Column>
            </Layer>

            <Layer ref={slide3Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="flex-start" justify="center">
                <H4 tertiary css={css`margin-left: 32px; max-width: 520px;`}>
                  But potential customers had other ideas. 
                </H4>
              </Column>
            </Layer>

            <Layer ref={slide4Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="flex-start" justify="center">
                <P css={css`position: absolute; transform: translateY(-50%); max-width: 520px; padding: 20px 0; margin: 0 32px;`}>
                  Perhaps it was the Spaceview’s radical design, but eagle-eyed passersby started asking about the funky new watch in jewelry shop windows assuming it was a standard model. 
                </P>
                <P css={css`position: absolute; transform: translateY(50%); max-width: 520px; padding: 20px 0; margin: 0 32px;`}>
                  Not wanting to pass up a sale, dealers were happy to offer up their display units,
                </P>
              </Column>
            </Layer>

            <Layer ref={slide5Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="flex-start" justify="center">
                <HalfWatches large img={AccutronSpaceviewAlphaImg} right />
              </Column>
            </Layer>
          </Row>
          
        </Slide>
      </BrowserView>

      <MobileView style={{height: "400vh"}}>
        <Slide index={index} startVisible subslides={4} animate={desktopAnimation}>
          <Row h="100%" align="center">
            <Row w="50%" h="100%" justify="flex-end" align="center">
              <HalfWatches img={AccutronSpaceviewAlphaImg} />
            </Row>

            <Row w="50%" h="100%">
              <Layer ref={slide1Ref}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <HalfWatches img={SoldierImg} right />
                </Column>
              </Layer>

              <Layer ref={slide2Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <P mobile css={css`margin-left: 8px; max-width: 165px;`}>
                    The original Accutron Spaceview – arguably its most popular and visually peculiar watch – was never meant for mass production.
                    <br /><br />
                    The Spaceview of yesteryear featured a deconstructed outer case design that exposed the inner workings of the watch and was only provided to retailers as display units to help explain how the innovative technology worked. 
                  </P>
                </Column>
              </Layer>

              <Layer ref={slide3Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <H4 tertiary mobile css={css`margin-left: 8px; max-width: 165px;`}>
                    But potential customers had other ideas. 
                  </H4>
                </Column>
              </Layer>

              <Layer ref={slide4Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <P mobile css={css`margin-left: 8px; max-width: 165px;`}>
                    Perhaps it was the Spaceview’s radical design, but eagle-eyed passersby started asking about the funky new watch in jewelry shop windows assuming it was a standard model. 
                    <br /><br />
                    Not wanting to pass up a sale, dealers were happy to offer up their display units,
                  </P>
                </Column>
              </Layer>

              <Layer ref={slide5Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <HalfWatches img={AccutronSpaceviewAlphaImg} right />
                </Column>
              </Layer>
            </Row>
          </Row>
        </Slide>
      </MobileView>
    </>
  );
};
