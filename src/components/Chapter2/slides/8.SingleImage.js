import React from 'react';
import { css } from '@emotion/core';
import { BrowserView, isMobile, MobileView } from "react-device-detect";
import { Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { WatchesSafeArea } from '../Watches';
import { animateFadeInOut } from '../../../helpers/animation';

const defaultStyle = isMobile ? css`
  max-height: 100%;
  width: auto !important;
  display: inline-block !important;
` : css`
  max-height: 100%;
  width: auto !important;
  display: inline-block !important;
`;

export default function Details({ index, data: d }) {
  const { css: style, ...image } = d.images[0]

  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} animate={animateFadeInOut} subslides={4}>
          <WatchesSafeArea justify="center">
            <img {...image} css={[defaultStyle, style]} />
          </WatchesSafeArea>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} animate={animateFadeInOut}>
          <Row h="100%">
            <Layer css={css`text-align: center;`}>
              <img {...image} css={[defaultStyle, style]} />
            </Layer>
          </Row>
        </Slide>
      </MobileView>
    </>
  );
};
