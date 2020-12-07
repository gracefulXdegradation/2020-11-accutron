import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';
import { Watches, WatchesSafeArea } from '../Watches';
import data from '../../../data/story';
import { animateFadeInOut, fadeIn, fadeOut } from '../../../helpers/animation';

gsap.registerPlugin(ScrollTrigger);

export default function Legacy10(props) {
  const { data: d } = props
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
  
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide {...props} subslides={2} animate={animation}>
          <WatchesSafeArea justify="center">
            <Column h="100%" css={css`margin: 0 60px; transform: scale(1.5);`}>
              <Watches {...d.images[0]} />
            </Column>
            <Column h="100%" ref={img2Ref} css={css`opacity: 0; margin: 0 60px; transform: scale(1.5);`}>
              <Watches {...d.images[1]} />
            </Column>
            <Column h="100%" ref={img3Ref} css={css`opacity: 0; margin: 0 60px; transform: scale(1.5);`}>
              <Watches {...d.images[2]} />
            </Column>
          </WatchesSafeArea>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide {...props} subslides={3} animate={animation}>
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
