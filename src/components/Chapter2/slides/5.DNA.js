import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography'
import { Column, Layer } from '../../UIKit';
import Slide from '../Slide';
import { Watches, WatchesSafeArea, WatchSlider } from '../Watches';
import { animateFadeInOut, fadeIn, fadeOut } from '../../../helpers/animation';

export default function DNA5(props) {
  const { data: d } = props
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
    const watchSlideProps = {
      width: 'auto',
      duration: 1,
      ease: 'easeIn',
    }

    tl.to(watch2Ref.current, watchSlideProps)
    tl.to(watch3Ref.current, watchSlideProps)
    tl.to(watch4Ref.current, watchSlideProps)

    fadeOut(tl, watch1Ref.current)
    fadeIn(tl, watch5Ref.current)

    tl.to(watch6Ref.current, watchSlideProps)
    tl.to(watch7Ref.current, watchSlideProps)
    tl.to(watch8Ref.current, watchSlideProps)
  })
  
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide {...props} animate={animation} subslides={5}>
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
        <Slide {...props} subslides={7} animate={mobileAnimation}>
          <Column h="100%" w="100%" justify="space-around">
            <Column css={css`flex: 1; margin-bottom: 20px;`}>
              <Layer ref={watch1Ref}>
                <WatchSlider style={css`transform: scale(1.1);`}>
                  <img {...d.images[0]} />
                  <img ref={watch2Ref} {...d.images[1]} />
                  <img ref={watch3Ref} {...d.images[2]} />
                  <img ref={watch4Ref} {...d.images[3]} />
                </WatchSlider>
              </Layer>
              <Layer css={css`opacity: 0;`} ref={watch5Ref}>
                <WatchSlider style={css`transform: translateY(3%) scale(1.1);`}>
                  <img {...d.images[4]} />
                  <img ref={watch6Ref} {...d.images[5]}  />
                  <img ref={watch7Ref} {...d.images[6]} />
                  <img ref={watch8Ref} {...d.images[7]} />
                </WatchSlider>
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
