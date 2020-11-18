import React from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4 } from '../../../styles/typography';
import { Column } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function Legacy8({ index }) {
  const animation = (el, props) => {
    const tl = gsap.timeline({
      scrollTrigger:{
        ...props,
        trigger: el,
        pin: el,
        pinSpacing: false,
        scrub: true,
      }
    })
    .to(el, {
      opacity: 1,
      duration: 1,
      ease: 'none',
    })
    .to(el, {
      opacity: 0,
      duration: 1,
      delay: .5,
      ease: 'none',
    })

    return tl;
  }
  
  return (
    <>
      <BrowserView style={{height: "100vh"}}>
        <Slide index={index} animate={animation}>
          <Column w="100%" h="100%" align="center" justify="center">
            <H4 align="center" css={css`position: absolute; transform: translateY(50%); max-width: 904px; padding: 50px 0; margin: 0 32px;`}>
            They’ve been reimagined for modern times complete with Swiss movements, destined to become coveted timepieces due to their limited nature…
            </H4>
          </Column>
        </Slide>
      </BrowserView>

      <MobileView style={{height: "100vh"}}>
        <Slide index={index} animate={animation}>
          <Column w="100%" h="100%" align="center" justify="center" css={css`padding: 0 60px;`}>
            <H4 mobile align="center">
            They’ve been reimagined for modern times complete with Swiss movements, destined to become coveted timepieces due to their limited nature…
            </H4>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
