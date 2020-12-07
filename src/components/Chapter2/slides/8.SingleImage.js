import React from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { Column, Layer, Row, ShopLink } from '../../UIKit';
import Slide from '../Slide';
import { WatchesSafeArea } from '../Watches';
import { animateFadeInOut } from '../../../helpers/animation';
import { P } from '../../../styles/typography';

const defaultStyle = css`
  max-height: 100%;
  width: auto !important;
  display: inline-block !important;
`;

const positions = {
  right: 'flex-end',
  left: 'flex-start',
  center: 'center'
}

export default function Details(props) {
  const { data: d } = props
  const { css: style, ...image } = d.images[0]

  return (
    <>
      <BrowserView renderWithFragment>
        <div css={css`position: relative;`}>
          <Slide isBackground {...props} animate={animateFadeInOut}>
            <WatchesSafeArea justify="center">
              <img {...image} css={[defaultStyle, style]} />
            </WatchesSafeArea>
          </Slide>
          <Layer top="0">
            <Slide {...props} animate={animateFadeInOut}>
              <Layer left="0">
                <Row h="100%" align="flex-end" justify={positions[d.shopLink.position]}>
                  <Column w="50%" h="50%" align="center" justify="center">
                    <P>{d.shopLink.title}</P>
                    <ShopLink url={d.shopLink.url} />
                  </Column>
                </Row>
              </Layer>
            </Slide>
          </Layer>
        </div>
      </BrowserView>

      <MobileView renderWithFragment>
        <div css={css`position: relative;`}>
          <Slide {...props} isBackground animate={animateFadeInOut}>
            <Row h="100%">
              <Layer css={css`text-align: center;`}>
                <img {...image} css={[defaultStyle, style]} />
              </Layer>
            </Row>
          </Slide>
          <Layer top="0">
            <Slide {...props} animate={animateFadeInOut}>
              <Column h="100%" w="100%" justify="flex-end" align="center">
                <P>{d.shopLink.title}</P>
                <ShopLink url={d.shopLink.url} />
              </Column>
            </Slide>
          </Layer>
        </div>
      </MobileView>
    </>
  );
};
