import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography'
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { Watches } from '../../Watches';
import data from '../../../data/story';
import { animateFadeInOut, fadeIn, fadeInOut, fadeOut } from '../../../helpers/animation';

const d = data.chapters[1].slides[4]

export default function DNA5({ index }) {
  const watch1Ref = useRef(null)
  const watch2Ref = useRef(null)
  const watch3Ref = useRef(null)

  const animation = (slide, props) => animateFadeInOut(slide, props, tl => {
    fadeIn(tl, [watch2Ref.current, watch3Ref.current])
  })

  const mobileAnimation = (slide, props) => animateFadeInOut(slide, props, tl => {
    fadeOut(tl, watch1Ref.current)
    fadeInOut(tl, watch2Ref.current)
    fadeIn(tl, watch3Ref.current)
  })
  
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} animate={animation}>
          <Row w="100%" h="100%" justify="center" align="center">
            <Watches {...d.images[0]} large />
          </Row>
          <Layer ref={watch2Ref} css={css`opacity: 0; transition: opacity .4s linear;`} >
            <Row w="100%" h="100%" justify="center" align="center">
              <Watches {...d.images[1]} large css={css`transform: translateX(-50%);`} />
            </Row>
          </Layer>
          <Layer ref={watch3Ref} css={css`opacity: 0; transition: opacity .4s linear; transition-delay: .2s;`} >
            <Row w="100%" h="100%" justify="center" align="center">
              <Watches {...d.images[2]} large css={css`transform: translateX(-100%);`} />
            </Row>
          </Layer>
          
          <Layer>
            <Row w="100%" h="100%" justify="flex-end" align="flex-end">
              <Column h="50%" w="50%" justify="flex-start" css={css`padding: 20px 0 0 200px;`}>
                <H4 alternative>
                  {d.copy[0].text}
                </H4>
                <P css={css`max-width: 500px;`}>
                  {d.copy[1].text}
                </P>
              </Column>
            </Row>
          </Layer>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} subslides={3} animate={mobileAnimation}>
          <Column h="100%" w="100%" justify="space-around" align="center">
            <Column>
              <Row ref={watch1Ref}>
                <Watches {...d.images[0]} />
              </Row>
              <Layer ref={watch2Ref} css={css`opacity: 0;`}>
                <Watches {...d.images[1]} />
              </Layer>
              <Layer ref={watch3Ref} css={css`opacity: 0;`}>
                <Watches {...d.images[2]} />
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
