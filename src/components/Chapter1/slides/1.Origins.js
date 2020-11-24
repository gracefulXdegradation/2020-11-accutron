import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { P } from '../../../styles/typography';
import { Column, Layer, RightHalf, Row, SlideImage } from '../../UIKit';
import Slide from '../Slide';
import data from '../../../data/story';
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

const d = data.chapters[0].slides[0]

const Watches = React.forwardRef((props, ref) => (
  <div ref={ref} css={css`position: relative;`}>
    <img src={d.images[1].src} alt={d.images[1].alt} css={css`width: 63%;`} />
    <img src={d.images[2].src} alt={d.images[2].alt} css={css`width: 63%; position: absolute; right: 0; z-index: -1;`} />
  </div>
))

export default function Origins1({ index }) {
  const mobMechanismRef = useRef(null)
  const mobWatchesRef = useRef(null)

  const mobileSlideAnimation = (el, props) => animateFadeOut(el, props, tl => {
    fadeOut(tl, mobMechanismRef.current)
    fadeIn(tl, mobWatchesRef.current)
  })
  
  return (
    <>
      <BrowserView renderWithFragment>
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
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} startVisible animate={mobileSlideAnimation} subslides={2}>
          <Column h="100%">
            <div css={css`position: relative; padding-bottom: 100%; height: 0; width: 100%;`}>
              <ImageHolder ref={mobMechanismRef}>
                <SlideImage {...d.images[0]} css={css`width: auto; height: 100%;`} />
              </ImageHolder>
              <ImageHolder ref={mobWatchesRef} css={css`opacity: 0;`}>
                <Watches />
              </ImageHolder>
            </div>
            <Column>
              <P mobile css={css`padding-bottom: 20px;`}>
                {d.copy[0].text}
              </P>
            </Column>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
