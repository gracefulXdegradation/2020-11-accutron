import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { isBrowser, isMobile, withOrientationChange } from "react-device-detect";
import { P } from '../../../styles/typography';
import { Column, RightHalf, Row, SlideImage } from '../../UIKit';
import Slide from '../Slide';
import { animateFadeInOut, animateFadeOut, fadeIn, fadeOut } from '../../../helpers/animation';
import styled from '@emotion/styled';

const ImageHolder = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Watches = React.forwardRef(({ img1, img2 }, ref) => (
  <div ref={ref} css={css`position: relative;`}>
    <img {...img1} css={css`width: 63%; display: inline-block !important;`} />
    <img {...img2} css={css`width: 63%; display: inline-block !important; position: absolute; right: 0; z-index: -1;`} />
  </div>
))

function Origins1({ index, isPortrait, isLandscape, data: d }) {
  const mobMechanismRef = useRef(null)
  const mobWatchesRef = useRef(null)

  const mobileSlideAnimation = (el, props) => animateFadeOut(el, props, tl => {
    fadeOut(tl, mobMechanismRef.current)
    fadeIn(tl, mobWatchesRef.current)
  })
  
  return (
    <>
      {isBrowser && (
        <Slide index={index} animate={animateFadeInOut}>
          <Row w="50%" h="100%">
            <SlideImage greedy src={d.images[0].src} alt={d.images[0].alt} />
          </Row>
          <RightHalf>
            <Column css={css`max-width: 540px;`} h="100%" justify="center">
              <Column css={css`max-height: 672px;`} h="100%" justify="space-around">
                <Column>
                  <P>
                    {d.copy[0].text}
                  </P>
                </Column>
                <Watches />
              </Column>
            </Column>
          </RightHalf>
        </Slide>
      )}

      {isMobile && isPortrait && (
        <Slide index={index} startVisible animate={mobileSlideAnimation} subslides={2}>
          <Column h="100%">
            <div css={css`position: relative; padding-bottom: 100%; height: 0; width: 100%;`}>
              <ImageHolder ref={mobMechanismRef}>
                <SlideImage {...d.images[0]} css={css`width: auto; height: 100% !important;`} />
              </ImageHolder>
              <ImageHolder ref={mobWatchesRef} css={css`opacity: 0;`}>
                <Watches img1={d.images[1]} img2={d.images[2]} />
              </ImageHolder>
            </div>
            <Column>
              <P mobile css={css`padding-bottom: 20px;`}>
                {d.copy[0].text}
              </P>
            </Column>
          </Column>
        </Slide>
      )}

      {isMobile && isLandscape && (
        <Slide index={index} animate={animateFadeInOut}>
          <Row w="50%" h="100%">
            <SlideImage greedy src={d.images[0].src} alt={d.images[0].alt} />
          </Row>
          <RightHalf mobile>
            <Column h="100%" justify="center">
              <Column h="100%" justify="space-around">
                <Column>
                  <P mobile>
                    {d.copy[0].text}
                  </P>
                </Column>
                <Watches img1={d.images[1]} img2={d.images[2]} />
              </Column>
            </Column>
          </RightHalf>
        </Slide>
      )}
    </>
  );
};

export default withOrientationChange(Origins1)
