import React from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { P } from '../../../styles/typography';
import { Column } from '../../UIKit';
import Slide from '../Slide';
import data from '../../../data/story';
import { animateFadeInOut } from '../../../helpers/animation';

const d = data.chapters[1].slides[7]

export default function Legacy8({ index }) {
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} animate={animateFadeInOut}>
          <Column w="100%" h="100%" align="center" justify="center">
            <P align="center" css={css`position: absolute; transform: translateY(50%); max-width: 904px; padding: 20px 0; margin: 0 32px;`}>
              {d.copy[0].text}
            </P>
          </Column>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} animate={animateFadeInOut}>
          <Column w="100%" h="100%" align="center" justify="center" css={css`padding: 0 60px;`}>
            <P mobile align="center">
              {d.copy[0].text}
            </P>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
