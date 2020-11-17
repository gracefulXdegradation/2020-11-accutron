import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4 } from '../../../styles/typography';
import { Column, Layer } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function IconicDesign2({ index }) {
  const hRef = useRef(null);
  const hRef0 = useRef(null);

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

    if (hRef0.current) {
      tl.to(hRef0.current, {
        opacity: 0,
        delay: .5,
        duration: 1,
        ease: 'none',
      })
    }

    tl.to(hRef.current, {
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
      <BrowserView style={{height: "200vh"}}>
        <Slide index={index} subslides={2} animate={animation}>
          <Column w="100%" h="100%" align="center" justify="center">
            <H4 align="center" css={css`position: absolute; transform: translateY(-50%); max-width: 1272px; padding: 50px 0; margin: 0 32px;`}>
              unwittingly setting the stage for the Spaceview to become an official Accutron model and Bulova’s most sought after watch at the time.
            </H4>
            <H4 ref={hRef} align="center" css={css`position: absolute; transform: translateY(50%); max-width: 904px; padding: 50px 0; margin: 0 32px; opacity: 0;`}>
              Now, 60 years later, the Spaceview is reborn and powered by a whole new method of timekeeping that again places it at the forefront of innovation.
            </H4>
          </Column>
        </Slide>
      </BrowserView>

      <MobileView style={{height: "300vh"}}>
        <Slide index={index} subslides={3} animate={animation}>
          <Column w="100%" h="100%">
            <Layer ref={hRef0}>
              <Column w="100%" h="100%" align="center" justify="center" css={css`padding: 0 60px;`}>
                <H4 mobile align="center">
                  unwittingly setting the stage for the Spaceview to become an official Accutron model and Bulova’s most sought after watch at the time.
                </H4>
              </Column>
            </Layer>
            <Layer ref={hRef} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="center" justify="center" css={css`padding: 0 60px;`}>
                <H4 mobile align="center">
                  Now, 60 years later, the Spaceview is reborn and powered by a whole new method of timekeeping that again places it at the forefront of innovation.
                </H4>
              </Column>
            </Layer>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
