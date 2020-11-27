import React, { useRef } from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import { css } from '@emotion/core';
import { P } from '../../../styles/typography';
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { Watches, WatchesSafeArea } from '../Watches';
import { animateFadeInOut, fadeIn, fadeOut } from '../../../helpers/animation';

export default function Spaceview2020({ index, data: d }) {
  const watches1Ref = useRef(null)
  const watches2Ref = useRef(null)
  const p1Ref = useRef(null)
  const p2Ref = useRef(null)

  const animation = (slide, props) => animateFadeInOut(slide, props, tl => {
    fadeOut(tl, [watches1Ref.current, p1Ref.current])
    fadeIn(tl, [watches2Ref.current, p2Ref.current])
  })

  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} subslides={2} animate={animation}>
          <WatchesSafeArea ref={watches1Ref} justify="center">
            <Watches {...d.images[0]} css={css`transform: translateY(15%) scale(1.4);`} />
          </WatchesSafeArea>
          <Layer ref={watches2Ref} left="0" css={css`opacity: 0;`}>
            <WatchesSafeArea justify="center">
              <Watches {...d.images[1]} css={css`transform: translateY(15%) scale(1.4);`} />
            </WatchesSafeArea>
          </Layer>

          <Layer left="0">
            <Row w="100%" h="100%" justify="flex-start" align="flex-end">
              <Column h="50%" w="50%" justify="flex-start" align="center">
                <Column css={css`padding-top: 100px; max-width: 350px;`}>
                  <P ref={p1Ref}>
                    {d.copy[0].text}
                  </P>
                  <Layer ref={p2Ref} css={css`opacity: 0;`}>
                    <P>
                      {d.copy[1].text}
                    </P>
                  </Layer>
                </Column>
              </Column>
            </Row>
          </Layer>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} subslides={2} animate={animation}>
          <Column h="100%" w="100%" justify="space-around" align="center">
            <Column align="center">
              <P ref={p1Ref} mobile align="center" css={css`padding: 15px 30px;`}>
              {d.copy[0].text}
              </P>
              <Layer ref={p2Ref} css={css`opacity: 0;`}>
                <P mobile align="center" css={css`padding: 15px 30px;`}>
                {d.copy[1].text}
                </P>
              </Layer>
            </Column>
            <Column h="100%" css={css`flex: 1; margin-bottom: 20px;`}>
              <Watches ref={watches1Ref} {...d.images[0]} css={css`transform: translateY(5%) scale(1.2);`} />
              <Layer ref={watches2Ref} css={css`opacity: 0;`}>
                <Column h="100%" align="center">
                  <Watches {...d.images[1]} css={css`transform: translateY(5%) scale(1.2);`} />
                </Column>
              </Layer>
            </Column>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
