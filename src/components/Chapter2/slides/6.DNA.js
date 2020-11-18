import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import SoldierSportImg from '../../../assets/2ES8A004_Soldier.png'
import SoldierImg from '../../../assets/2ES6A002_Soldier.png'
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';
import { HalfWatches } from '../../Watches';

gsap.registerPlugin(ScrollTrigger);

export default function DNA6({ index }) {
  const dnaRef = useRef(null)
  const svRef = useRef(null)

  const animation = (slide, props) => {
    const isMobile = dnaRef.current

    const tl = gsap.timeline({
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

    if (isMobile) {
      tl.to(dnaRef.current, {
        opacity: 0,
        duration: 1,
        delay: .5,
        ease: 'none',
      })
      .to(svRef.current, {
        duration: 1,
        opacity: 1,
        ease: 'none'
      })
    }

    tl.to(slide, {
      opacity: 0,
      duration: 1,
      delay: .5,
      ease: 'none',
    })

    return tl
  }
  
  return (
    <>
      <BrowserView style={{height: "100vh"}}>
        <Slide index={index} animate={animation}>
          <Row w="50%" h="100%" justify="flex-start" align="center" css={css`flex-direction: row-reverse;`}>
            <HalfWatches img={SoldierImg} large alt="Spaceview 2020" />
            <Column css={css`transform: translateY(100%);`}>
              <P>
              The Spaceview 2020 retails at $3,450
              </P>
            </Column>
          </Row>
          <Row w="50%" h="100%" justify="flex-start" align="center">
            <HalfWatches img={SoldierSportImg} right large alt="Accutron DNA" />
            <Column css={css`transform: translateY(100%);`}>
              <P>
              The Accutron DNA costs $3,300
              </P>
            </Column>
          </Row>
        </Slide>
      </BrowserView>

      <MobileView style={{height: "150vh"}}>
        <Slide index={index} subslides={1.5} animate={animation}>
          <Column h="100%" w="100%" justify="center" align="flex-start">
            <Column ref={dnaRef} w="100%">
              <HalfWatches right img={SoldierSportImg} alt="Accutron DNA" />
              <Layer>
                <Row w="100%" h="100%" justify="flex-end" align="flex-end">
                  <Column css={css`margin-right: 30px;`}>
                    <H4 mobile>The Accutron DNA</H4>
                    <P mobile>Costs $3,300</P>
                  </Column>
                </Row>
              </Layer>
            </Column>

            <Layer ref={svRef} css={css`opacity: 0;`}>
              <Column h="100%" w="100%" justify="center" align="flex-start">
                <Column w="100%">
                  <HalfWatches right img={SoldierImg} alt="Spaceview 2020" />
                  <Layer>
                    <Row w="100%" h="100%" justify="flex-end" align="flex-end">
                      <Column css={css`margin-right: 30px;`}>
                        <H4 mobile>The Spaceview 2020</H4>
                        <P mobile>Costs $3,450</P>
                      </Column>
                    </Row>
                  </Layer>
                </Column>
              </Column>
            </Layer>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
