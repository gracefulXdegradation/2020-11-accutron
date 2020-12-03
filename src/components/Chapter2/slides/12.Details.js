import React from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography'
import { Column, Layer } from '../../UIKit';
import Slide from '../Slide';
import { WatchesSafeArea } from '../Watches';
import { animateFadeInOut } from '../../../helpers/animation';
import styled from '@emotion/styled';

const CircledImage = styled.img`
  width: auto !important;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 50%;
  height: auto !important;
  max-height: 100% !important;
`;

export default function Details(props) {
  const { data: d } = props
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide {...props} animate={animateFadeInOut} subslides={4}>
          <WatchesSafeArea justify="center">
            <CircledImage {...d.images[0]} css={css`
              height: 100%;
              transform: translate(0px, 10%);
            `} />
          </WatchesSafeArea>

          <Layer left="0">  
            <WatchesSafeArea justify="flex-end">
              <Column w="50%" h="100%" align="center">
                <P css={css`max-width: 50%;`}>
                  {d.copy[0] ? d.copy[0].text : ''}
                </P>
              </Column>
            </WatchesSafeArea>
          </Layer>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide {...props} animate={animateFadeInOut}>
          <Column h="100%" w="100%" justify="flex-start" css={css`padding: 0 35px; `}>
            <Column css={css`flex: 1; margin: 20px 0;`}>
              <Layer css={css`text-align: center;`}>
                <CircledImage {...d.images[0]} />
              </Layer>
            </Column>

            <P mobile align="center">
              {d.copy[0] ? d.copy[0].text : ''}
            </P>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
