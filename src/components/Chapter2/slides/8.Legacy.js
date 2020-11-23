import React from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import { Column } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';
import data from '../../../data/story';

const d = data.chapters[1].slides[7]

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
      <BrowserView renderWithFragment>
        <Slide index={index} animate={animation}>
          <Column w="100%" h="100%" align="center" justify="center">
            <P align="center" css={css`position: absolute; transform: translateY(50%); max-width: 904px; padding: 20px 0; margin: 0 32px;`}>
              {d.copy[0].text}
            </P>
          </Column>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} animate={animation}>
          <Column w="100%" h="100%" align="center" justify="center" css={css`padding: 0 60px;`}>
            <P mobile align="center">
              {d.copy[0].text}
            </P>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
