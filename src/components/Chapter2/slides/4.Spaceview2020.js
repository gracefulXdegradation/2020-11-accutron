import React from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import SoldierImg from '../../../assets/2ES6A001_Soldier.png'
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';
import { Watches } from '../../Watches';

gsap.registerPlugin(ScrollTrigger);

export default function Spaceview2020({ index }) {
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
            <Watches src={SoldierImg} large alt="Spaceview 2020" />
          </Row>
          
          <Layer>
            <Row w="100%" h="100%" justify="flex-end">
              <Column h="50%" w="50%" justify="flex-end" css={css`padding: 0 0 20px 200px;`}>
                <H4 tertiary>
                  the Spaceview 2020
                </H4>
                <P>
                  Is a modern reinterpretation of the original. 
                </P>
              </Column>
            </Row>
          </Layer>
        </Slide>
      </BrowserView>

      <MobileView style={{height: "100vh"}}>
        <Slide index={index} animate={animation}>
          <Column h="100%" w="100%" justify="space-around" align="center">
            <Watches src={SoldierImg} alt="Spaceview 2020" />
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
