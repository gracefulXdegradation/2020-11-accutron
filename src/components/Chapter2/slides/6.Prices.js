import React from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import { BackgroundImage, Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { animateFadeInOut } from '../../../helpers/animation';

export default function Prices6(props) {
  const { data: d } = props

  return (
    <>
      <BrowserView renderWithFragment>
        <Slide isBackground {...props} subslides={1.5} animate={animateFadeInOut}>
          <Layer left="0">
            <BackgroundImage position="center" {...d.images[0]} />
          </Layer>

          <Layer left="0">
            <Column w="50%" h="100%" justify="flex-end">
              <Column w="100%" h="50%" justify="center">
                <Column w="100%" h="33%" justify="flex-end" align="center">
                  <P>{d.copy[0].text}{' '}{d.copy[1].text}</P>
                </Column>
              </Column>
            </Column>
          </Layer>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide isBackground {...props} subslides={1.5} animate={animateFadeInOut}>
          <Layer top="0" left="0" css={css`opacity: 0.5;`}>
            <BackgroundImage position="center" {...d.images[0]} />
          </Layer>

          <Column h="100%" w="100%" justify="center" align="flex-start">
            <Column h="100%" w="100%">
              <Layer>
                <Row w="100%" h="100%" justify="flex-start" align="flex-start">
                  <Column css={css`margin: 30px 0 0 30px;`}>
                    <H4 alternative mobile>{d.copy[0].text}</H4>
                    <P mobile>{d.copy[1].text}</P>
                  </Column>
                </Row>
              </Layer>
            </Column>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
