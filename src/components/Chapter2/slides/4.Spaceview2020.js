import React from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { Watches } from '../../Watches';
import data from '../../../data/story';
import { animateFadeInOut } from '../../../helpers/animation';

const d = data.chapters[1].slides[3]

export default function Spaceview2020({ index }) {
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} animate={animateFadeInOut}>
          <Row w="100%" h="100%" justify="center" align="center">
            <Watches {...d.images[0]} />
          </Row>
          
          <Layer>
            <Row w="100%" h="100%" justify="flex-end">
              <Column h="50%" w="50%" justify="flex-end" css={css`padding: 0 0 20px 200px;`}>
                <H4 alternative>
                  {d.copy[0].text}
                </H4>
                <P>
                {d.copy[1].text}
                </P>
              </Column>
            </Row>
          </Layer>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} animate={animateFadeInOut}>
          <Column h="100%" w="100%" justify="space-around" align="center">
            <Watches {...d.images[0]} />
            <Column align="center">
              <H4 alternative mobile>
              {d.copy[0].text}
              </H4>
              <P mobile>
              {d.copy[1].text}
              </P>
            </Column>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
