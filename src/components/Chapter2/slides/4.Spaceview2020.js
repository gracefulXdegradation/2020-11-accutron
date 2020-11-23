import React from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';
import { Watches } from '../../Watches';
import data from '../../../data/story';

const d = data.chapters[1].slides[3]

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
      <BrowserView renderWithFragment>
        <Slide index={index} animate={animation}>
          <Row w="100%" h="100%" justify="center" align="center">
            <Watches {...d.images[0]} />
          </Row>
          
          <Layer>
            <Row w="100%" h="100%" justify="flex-end">
              <Column h="50%" w="50%" justify="flex-end" css={css`padding: 0 0 20px 200px;`}>
                <H4 alternative>
                  {d.copy[0].text}
                </H4>
                <P>
                {d.copy[1].text}
                </P>
              </Column>
            </Row>
          </Layer>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} animate={animation}>
          <Column h="100%" w="100%" justify="space-around" align="center">
            <Watches {...d.images[0]} />
            <Column align="center">
              <H4 alternative mobile>
              {d.copy[0].text}
              </H4>
              <P mobile>
              {d.copy[1].text}
              </P>
            </Column>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
