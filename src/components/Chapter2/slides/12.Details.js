import React from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography'
import { Column } from '../../UIKit';
import Slide from '../Slide';
import { WatchesSafeArea } from '../Watches';
import { animateFadeInOut } from '../../../helpers/animation';
import styled from '@emotion/styled';

const CircledImage = styled.img`
  width: auto !important;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 50%;
`;

export default function Details({ index, data: d }) {
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} animate={animateFadeInOut} subslides={4}>
          <WatchesSafeArea justify="center">
            <CircledImage {...d.images[0]} css={css`
              height: 100%;
              transform: translate(0px, 10%);
            `} />
          </WatchesSafeArea>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} animate={animateFadeInOut}>
          <Column h="100%" w="100%" justify="center" css={css`padding: 0 35px;`}>
          <CircledImage {...d.images[0]} />
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
