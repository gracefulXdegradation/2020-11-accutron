import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { P } from '../../../styles/typography';
import { Block, Column, Layer, RightHalf, Row, SlideImage } from '../../UIKit';
import Slide from '../Slide';
import data from '../../../data/story';
import { animateFadeInOut, fadeIn, fadeOut } from '../../../helpers/animation';

const d = data.chapters[0].slides[4]

export default function Legacy5({ index }) {
  const bulovaRef = useRef(null)
  const nasaRef = useRef(null)
  const pRef = useRef(null)
  const hRef = useRef(null)

  const desktopAnimation = (el, props) => animateFadeInOut(el, props, tl => {
    fadeOut(tl, bulovaRef.current);
    fadeIn(tl, [nasaRef.current, pRef.current]);
  })

  const mobileAnimation = (el, props) => animateFadeInOut(el, props, tl => {
    fadeOut(tl, [bulovaRef.current, pRef.current]);
    fadeIn(tl, [nasaRef.current, hRef.current]);
  })

  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} subslides={2} animate={desktopAnimation}>
          <Row w="50%" h="100%">
            <Layer ref={bulovaRef} top="0" left="0" bottom="0" right="0">
              <SlideImage greedy {...d.images[0]} />
            </Layer>
            <Layer ref={nasaRef} top="0" left="0" bottom="0" right="0" css={css`opacity: 0;`}>
              <SlideImage greedy {...d.images[1]} css={css`object-position: left;`} />
            </Layer>
          </Row>
          <RightHalf>
            <Column css={css`max-width: 540px;`} h="100%" justify="center">
              <Column css={css`transform: translateY(50%);`}>
                <P>
                {d.copy[0].text}
                </P>
                <P ref={pRef} css={css`margin-top: 32px; opacity: 0;`}>
                {d.copy[1].text}
                </P>
              </Column>
            </Column>
          </RightHalf>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} subslides={2} animate={mobileAnimation}>
          <Block>
            <Layer>
              <Block>
                <SlideImage ref={bulovaRef} {...d.images[0]} />
                <Layer ref={nasaRef} css={css`opacity: 0;`}>
                  <SlideImage {...d.images[1]} />
                </Layer>
              </Block>
              <Block css={css`margin-top: 20px;`}>
                <P mobile ref={pRef}>
                {d.copy[0].text}
                </P>
                <Layer ref={hRef} css={css`opacity: 0;`}>
                  <P mobile>
                  {d.copy[1].text}
                  </P>
                </Layer>
              </Block>
            </Layer>
          </Block>
        </Slide>
      </MobileView>
    </>
  );
};
