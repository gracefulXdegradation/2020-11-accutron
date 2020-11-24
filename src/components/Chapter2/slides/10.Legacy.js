import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';
import { Watches } from '../../Watches';
import data from '../../../data/story';
import { animateFadeInOut, fadeIn, fadeOut } from '../../../helpers/animation';

const d = data.chapters[1].slides[9]

gsap.registerPlugin(ScrollTrigger);

export default function Legacy10({ index }) {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);

  const animation = (slide, props) => animateFadeInOut(slide, props, tl => {
    const isMobile = !!img1Ref.current

    isMobile && fadeOut(tl, img1Ref.current)
    fadeIn(tl, img2Ref.current)
    isMobile && fadeOut(tl, img2Ref.current)
    fadeIn(tl, img3Ref.current)
  })

  const shift = 16
  
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} subslides={2} animate={animation}>
          <Row w="100%" h="100%" align="center" justify="space-around">
            <Column css={css`transform: translateX(${shift * 2 }%);`}>
              <Watches {...d.images[0]} large />
            </Column>
            <Column ref={img2Ref} css={css`opacity: 0;`}>
              <Watches {...d.images[1]} large />
            </Column>
            <Column ref={img3Ref} css={css`transform: translateX(${-shift * 2}%); opacity: 0;`}>
              <Watches {...d.images[2]} large />
            </Column>
          </Row>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} subslides={3} animate={animation}>
          <Column w="100%" h="100%">
            <Layer ref={img1Ref}>
              <Column w="100%" h="100%" align="center" justify="center">
                <Watches {...d.images[0]} />
              </Column>
            </Layer>
            <Layer ref={img2Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="center" justify="center">
                <Watches {...d.images[1]} />
              </Column>
            </Layer>
            <Layer ref={img3Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="center" justify="center">
                <Watches {...d.images[2]} />
              </Column>
            </Layer>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
