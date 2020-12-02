import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography'
import { Column, Layer } from '../../UIKit';
import Slide from '../Slide';
import { Watches, WatchesSafeArea } from '../Watches';
import { animateFadeInOut, fadeIn, fadeInOut, fadeOut } from '../../../helpers/animation';

export default function DNA5({ index, data: d }) {
  const watch1Ref = useRef(null)
  const watch2Ref = useRef(null)
  const watch3Ref = useRef(null)
  const watch4Ref = useRef(null)

  const watch5Ref = useRef(null)
  const watch6Ref = useRef(null)
  const watch7Ref = useRef(null)
  const watch8Ref = useRef(null)

  const animation = (slide, props) => animateFadeInOut(slide, props, tl => {
    fadeIn(tl, watch2Ref.current)
    fadeIn(tl, watch3Ref.current)
    fadeIn(tl, watch4Ref.current)
    fadeOut(tl, [watch1Ref.current, watch2Ref.current, watch3Ref.current, watch4Ref.current])
    fadeIn(tl, watch5Ref.current)
    fadeIn(tl, watch6Ref.current)
    fadeIn(tl, watch7Ref.current)
    fadeIn(tl, watch8Ref.current)
  })

  const mobileAnimation = (slide, props) => animateFadeInOut(slide, props, tl => {
    fadeOut(tl, watch1Ref.current)
    fadeInOut(tl, watch2Ref.current)
    fadeInOut(tl, watch3Ref.current)
    fadeInOut(tl, watch4Ref.current)
    fadeInOut(tl, watch5Ref.current)
    fadeInOut(tl, watch6Ref.current)
    fadeInOut(tl, watch7Ref.current)
    fadeIn(tl, watch8Ref.current)
  })
  
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} animate={animation} subslides={5}>
          <WatchesSafeArea ref={watch1Ref} justify="center">
            <Watches {...d.images[0]} css={css`transform: translateX(90%);`} />
          </WatchesSafeArea>
          <Layer left="0" ref={watch2Ref} css={css`opacity: 0;`} >
            <WatchesSafeArea justify="center">
              <Watches {...d.images[1]} css={css`transform: translateX(30%);`} />
            </WatchesSafeArea>
          </Layer>
          <Layer left="0" ref={watch3Ref} css={css`opacity: 0;`} >
            <WatchesSafeArea justify="center">
              <Watches {...d.images[2]} css={css`transform: translateX(-30%);`} />
            </WatchesSafeArea>
          </Layer>
          <Layer left="0" ref={watch4Ref} css={css`opacity: 0;`} >
            <WatchesSafeArea justify="center">
              <Watches {...d.images[3]} css={css`transform: translateX(-90%);`} />
            </WatchesSafeArea>
          </Layer>

          <Layer left="0" ref={watch5Ref} css={css`opacity: 0;`} >
            <WatchesSafeArea justify="center">
              <Watches {...d.images[4]} css={css`transform: translateX(70%) translateY(10%);`} />
            </WatchesSafeArea>
          </Layer>
          <Layer left="0" ref={watch6Ref} css={css`opacity: 0;`} >
            <WatchesSafeArea justify="center">
              <Watches {...d.images[5]} css={css`transform: translateX(10%) translateY(10%);`} />
            </WatchesSafeArea>
          </Layer>
          <Layer left="0" ref={watch7Ref} css={css`opacity: 0;`} >
            <WatchesSafeArea justify="center">
              <Watches {...d.images[6]} css={css`transform: translateX(-50%) translateY(10%);`} />
            </WatchesSafeArea>
          </Layer>
          <Layer left="0" ref={watch8Ref} css={css`opacity: 0;`} >
            <WatchesSafeArea justify="center">
              <Watches {...d.images[7]} css={css`transform: translateX(-110%) translateY(10%);`} />
            </WatchesSafeArea>
          </Layer>

          <Layer left="0">
            <Column h="100%" w="100%" justify="flex-end" align="center">
              <H4 align="center" alternative>
                {d.copy[0].text}
              </H4>
              <P align="center" css={css`max-width: 380px; margin-bottom: 80px;`}>
                {d.copy[1].text}
              </P>
            </Column>
          </Layer>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} subslides={7} animate={mobileAnimation}>
          <Column h="100%" w="100%" justify="space-around">
            <Column h="100%" css={css`flex: 1; margin-bottom: 20px;`}>
              <Layer ref={watch1Ref}>
                <Column h="100%">
                  <Watches {...d.images[0]} />
                </Column>
              </Layer>
              <Layer ref={watch2Ref} css={css`opacity: 0;`}>
                <Column h="100%">
                  <Watches {...d.images[1]} />
                </Column>
              </Layer>
              <Layer ref={watch3Ref} css={css`opacity: 0;`}>
                <Column h="100%">
                  <Watches {...d.images[2]} />
                </Column>
              </Layer>
              <Layer ref={watch4Ref} css={css`opacity: 0;`}>
                <Column h="100%">
                  <Watches {...d.images[3]} />
                </Column>
              </Layer>
              <Layer ref={watch5Ref} css={css`opacity: 0;`}>
                <Column h="100%">
                  <Watches {...d.images[4]} css={css`transform: translateY(3%) scale(1.1);`} />
                </Column>
              </Layer>
              <Layer ref={watch6Ref} css={css`opacity: 0;`}>
                <Column h="100%">
                  <Watches {...d.images[5]} css={css`transform: translateY(3%) scale(1.1);`} />
                </Column>
              </Layer>
              <Layer ref={watch7Ref} css={css`opacity: 0;`}>
                <Column h="100%">
                  <Watches {...d.images[6]} css={css`transform: translateY(3%) scale(1.1);`} />
                </Column>
              </Layer>
              <Layer ref={watch8Ref} css={css`opacity: 0;`}>
                <Column h="100%">
                  <Watches {...d.images[7]} css={css`transform: translateY(3%) scale(1.1);`} />
                </Column>
              </Layer>
            </Column>
            <Column align="center">
              <H4 alternative mobile>
                {d.copy[0].text}
              </H4>
              <P mobile align="center" css={css`margin: 0 20px;`}>
                {d.copy[1].text}
              </P>
            </Column>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
