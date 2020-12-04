import React from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { Watches, WatchesSafeArea } from '../Watches';
import { animateFadeInOut } from '../../../helpers/animation';
import { css } from '@emotion/core';

export default function Spaceview2020(props) {
  const { data: d } = props
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide {...props} animate={animateFadeInOut}>
          <WatchesSafeArea justify="center">
            <Watches {...d.images[0]} css={css`transform: scale(1.2);`}/>
          </WatchesSafeArea>

          <Layer left="0">
              <Row w="100%" h="100%" justify="flex-end">
                <Column h="50%" w="50%" justify="flex-end" align="center">
                  <Column css={css`padding-bottom: 20px;`}>
                    <H4 alternative>
                      {d.copy[0].text}
                    </H4>
                    <P>
                    {d.copy[1].text}
                    </P>
                  </Column>
                </Column>
              </Row>
            </Layer>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide {...props} animate={animateFadeInOut}>
          <Column h="100%" w="100%" justify="space-around" align="center">
            <Column h="100%" css={css`flex: 1; margin-bottom: 20px;`}>
              <Watches {...d.images[0]} />
            </Column>
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
