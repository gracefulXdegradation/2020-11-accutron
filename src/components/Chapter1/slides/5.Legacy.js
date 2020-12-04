import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { isBrowser, isMobile, withOrientationChange } from "react-device-detect";
import styled from '@emotion/styled';
import { P } from '../../../styles/typography';
import { Block, Column, Layer, RightHalf, Row, SlideImage } from '../../UIKit';
import Slide from '../Slide';
import { animateFadeInOut, fadeIn, fadeOut } from '../../../helpers/animation';

const ImageHolder = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;

  ${SlideImage} {
    width: auto;
    height: 100% !important;
  }
`;

function Legacy5({ index, isPortrait, isLandscape, data: d }) {
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
      {isBrowser && (
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
            <Column css={css`max-width: 540px;`} h="100%" justify="flex-end">
              <Column w="100%" h="50%" justify="flex-start" css={css`padding-top: 20px;`}>
                <P>
                {d.copy[0].text}
                </P>
                <P ref={pRef} css={css`opacity: 0;`}>
                {d.copy[1].text}
                </P>
              </Column>
            </Column>
          </RightHalf>
        </Slide>
      )}

      {isMobile && isPortrait && (
        <Slide index={index} subslides={2} animate={mobileAnimation}>
          <Block>
            <Layer>
              <div css={css`position: relative; padding-bottom: 112.5%; height: 0; width: 100%;`}>
                <ImageHolder ref={bulovaRef}>
                  <SlideImage {...d.images[0]} />
                </ImageHolder>
                <ImageHolder ref={nasaRef} css={css`opacity: 0;`}>
                  <SlideImage {...d.images[1]} />
                </ImageHolder>
              </div>

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
      )}

      {isMobile && isLandscape && (
        <Slide index={index} subslides={2} animate={desktopAnimation}>
          <Row w="50%" h="100%">
            <Layer ref={bulovaRef} top="0" left="0" bottom="0" right="0">
              <SlideImage greedy {...d.images[0]} />
            </Layer>
            <Layer ref={nasaRef} top="0" left="0" bottom="0" right="0" css={css`opacity: 0;`}>
              <SlideImage greedy {...d.images[1]} css={css`object-position: left;`} />
            </Layer>
          </Row>
          <RightHalf mobile>
            <Column css={css`max-width: 540px;`} h="100%" justify="center">
              <P mobile>
              {d.copy[0].text}
              </P>
              <P mobile ref={pRef} css={css`margin-top: 32px; opacity: 0;`}>
              {d.copy[1].text}
              </P>
            </Column>
          </RightHalf>
        </Slide>
      )}
    </>
  );
};

export default withOrientationChange(Legacy5)
