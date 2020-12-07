import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { Watches, WatchesSafeArea } from '../Watches';
import { animateFadeInOut, fadeIn, fadeOut } from '../../../helpers/animation';

export default function Legacy9(props) {
  const { data: d } = props
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);

  const animation = (slide, props) => animateFadeInOut(slide, props, tl => {
    const isMobile = !!img1Ref.current

    isMobile && fadeOut(tl, img1Ref.current)
    fadeIn(tl, img2Ref.current)
    isMobile && fadeOut(tl, img2Ref.current)
    fadeIn(tl, img3Ref.current)
    isMobile && fadeOut(tl, img3Ref.current)
    fadeIn(tl, img4Ref.current)
  })
  
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide {...props} subslides={2.5} animate={animation}>
          <WatchesSafeArea justify="center">
            <Column h="100%" css={css`margin: 0 60px; transform: scale(1.4);`}>
              <Watches {...d.images[0]} />
            </Column>
            <Column h="100%" ref={img2Ref} css={css`opacity: 0; margin: 0 60px; transform: scale(1.4);`}>
              <Watches {...d.images[1]} />
            </Column>
            <Column h="100%" ref={img3Ref} css={css`opacity: 0; margin: 0 60px; transform: scale(1.4);`}>
              <Watches {...d.images[2]} />
            </Column>
            <Column h="100%" ref={img4Ref} css={css`opacity: 0; margin: 0 60px; transform: scale(1.4);`}>
              <Watches {...d.images[3]} />
            </Column>
          </WatchesSafeArea>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide {...props} subslides={4} animate={animation}>
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
            <Layer ref={img4Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="center" justify="center">
                <Watches {...d.images[3]} />
              </Column>
            </Layer>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
