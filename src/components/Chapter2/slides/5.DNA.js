import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import SoldierImg from '../../../assets/2ES8A004_Soldier.png'
import SoldierBlackImg from '../../../assets/2ES8A004_Soldier_black.png'
import SoldierGreenImg from '../../../assets/2ES8A004_Soldier_green.png'
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';
import { Watches } from '../../Watches';

gsap.registerPlugin(ScrollTrigger);

export default function DNA5({ index }) {
  const watch1Ref = useRef(null)
  const watch2Ref = useRef(null)
  const watch3Ref = useRef(null)

  const animation = (slide, props) => {
    return gsap.timeline({
      scrollTrigger:{
        ...props,
        trigger: slide,
        pin: slide,
        pinSpacing: false,
        scrub: true,
      }
    })
    .to(slide, {
      duration: 1,
      opacity: 1,
      ease: 'none'
    })
    .to([watch2Ref.current, watch3Ref.current], {
      duration: 0,
      opacity: 1,
      ease: 'none'
    })
    .to(slide, {
      opacity: 0,
      duration: 1,
      delay: .5,
      ease: 'none',
    })
  }

  const mobileAnimation = (slide, props) => {
    return gsap.timeline({
      scrollTrigger:{
        ...props,
        trigger: slide,
        pin: slide,
        pinSpacing: false,
        scrub: true,
      }
    })
    .to(slide, {
      duration: 1,
      opacity: 1,
      ease: 'none'
    })

    .to(watch1Ref.current, {
      opacity: 0,
      duration: 1,
      delay: .5,
      ease: 'none',
    })

    .to(watch2Ref.current, {
      duration: 1,
      opacity: 1,
      ease: 'none'
    })
    .to(watch2Ref.current, {
      opacity: 0,
      duration: 1,
      delay: .5,
      ease: 'none',
    })

    .to(watch3Ref.current, {
      duration: 1,
      opacity: 1,
      ease: 'none'
    })

    .to(slide, {
      opacity: 0,
      duration: 1,
      delay: .5,
      ease: 'none',
    })
  }
  
  return (
    <>
      <BrowserView style={{height: "100vh"}}>
        <Slide index={index} animate={animation}>
          <Row w="100%" h="100%" justify="center" align="center">
            <Watches src={SoldierImg} large alt="2ES8A004 Soldier blue" />
          </Row>
          <Layer ref={watch2Ref} css={css`opacity: 0; transition: opacity .4s linear;`} >
            <Row w="100%" h="100%" justify="center" align="center">
              <Watches src={SoldierBlackImg} large alt="2ES8A004 Soldier black" css={css`transform: translateX(-50%);`} />
            </Row>
          </Layer>
          <Layer ref={watch3Ref} css={css`opacity: 0; transition: opacity .4s linear; transition-delay: .2s;`} >
            <Row w="100%" h="100%" justify="center" align="center">
              <Watches src={SoldierGreenImg} large alt="2ES8A004 Soldier green" css={css`transform: translateX(-100%);`} />
            </Row>
          </Layer>
          
          <Layer>
            <Row w="100%" h="100%" justify="flex-end" align="flex-end">
              <Column h="50%" w="50%" justify="flex-start" css={css`padding: 20px 0 0 200px;`}>
                <H4 tertiary>
                the Accutron DNA
                </H4>
                <P css={css`max-width: 500px;`}>
                a sportier update of the Spaceview featuring sleeker lines and more modern design accents.
                </P>
              </Column>
            </Row>
          </Layer>
        </Slide>
      </BrowserView>

      <MobileView style={{height: "300vh"}}>
        <Slide index={index} subslides={3} animate={mobileAnimation}>
          <Column h="100%" w="100%" justify="space-around" align="center">
            <Column>
              <Row ref={watch1Ref}>
                <Watches src={SoldierImg} alt="2ES8A004 Soldier blue" />
              </Row>
              <Layer ref={watch2Ref} css={css`opacity: 0;`}>
                <Watches src={SoldierBlackImg} alt="2ES8A004 Soldier black" />
              </Layer>
              <Layer ref={watch3Ref} css={css`opacity: 0;`}>
                <Watches src={SoldierGreenImg} alt="2ES8A004 Soldier green" />
              </Layer>
            </Column>
            <Column align="center">
              <H4 tertiary mobile>
                the Spaceview 2020
              </H4>
              <P mobile>
                Is a modern reinterpretation of the original. 
              </P>
            </Column>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
