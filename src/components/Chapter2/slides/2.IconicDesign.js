import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { P } from '../../../styles/typography';
import { Column, Layer } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';
import { animateFadeInOut, fadeIn, fadeOut } from '../../../helpers/animation';

gsap.registerPlugin(ScrollTrigger);

export default function IconicDesign2(props) {
  const { data: d } = props;
  const hRef = useRef(null);
  const hRef0 = useRef(null);

  const animation = (el, props) => animateFadeInOut(el, props, tl => {
    hRef0.current && fadeOut(tl, hRef0.current)
    fadeIn(tl, hRef.current)
  })
  
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide {...props} subslides={2} animate={animation}>
          <Column w="100%" h="100%" align="center" justify="center">
            <P align="center" css={css`position: absolute; transform: translateY(-50%); max-width: 1272px; padding: 20px 0; margin: 0 32px;`}>
              {d.copy[0].text}
            </P>
            <P ref={hRef} align="center" css={css`position: absolute; transform: translateY(50%); max-width: 904px; padding: 20px 0; margin: 0 32px; opacity: 0;`}>
              {d.copy[1].text}
            </P>
          </Column>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide {...props} subslides={2} animate={animation}>
          <Column w="100%" h="100%">
            <Layer ref={hRef0}>
              <Column w="100%" h="100%" align="center" justify="center" css={css`padding: 0 60px;`}>
                <P mobile align="center">
                  {d.copy[0].text}
                </P>
              </Column>
            </Layer>
            <Layer ref={hRef} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="center" justify="center" css={css`padding: 0 60px;`}>
                <P mobile align="center">
                  {d.copy[1].text}
                </P>
              </Column>
            </Layer>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
