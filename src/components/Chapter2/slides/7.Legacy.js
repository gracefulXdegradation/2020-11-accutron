import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { P } from '../../../styles/typography';
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { animateFadeInOut, fadeIn } from '../../../helpers/animation';

export default function Legacy7({ index, data: d }) {
  const hRef = useRef(null);

  const animation = (slide, props) => animateFadeInOut(slide, props, tl => {
    fadeIn(tl, hRef.current)
  })
  
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} subslides={2} animate={animation}>
          <Column w="100%" h="100%" align="center" justify="center">
            <P align="center" css={css`position: absolute; transform: translateY(-50%); max-width: 1272px; padding: 20px 0; margin: 0 32px;`}>
              {d.copy[0].text}
            </P>
            <P ref={hRef} align="center" css={css`position: absolute; transform: translateY(50%); max-width: 904px; padding: 20px 0; margin: 0 32px; opacity: 0;`}>
              {d.copy[1].text}
            </P>
          </Column>

          <Layer left="0">
            <Row h="100%" justify="flex-end" align="flex-end">
              <img {...d.images[0]} css={css`
                width: 50%;
                height: 50%;
                object-fit: contain;
                transform: scale(1.5) translate(10%,10%);
              `} />
            </Row>
          </Layer>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} subslides={2} animate={animation}>
          <Layer left="0" bottom="0">
            <Row h="100%" justify="flex-end" align="flex-end">
              <img {...d.images[0]} css={css`
                width: 100%;
                height: 50%;
                object-fit: contain;
                transform: scale(2) translate(22%,3%);
              `} />
            </Row>
          </Layer>

          <Column w="100%" h="100%">
            <Layer>
              <Column w="100%" h="50%" align="center" justify="center" css={css`padding: 0 60px;`}>
                <P mobile align="center">
                  {d.copy[0].text}
                </P>
                <P ref={hRef} css={css`opacity: 0; margin-top: 20px;`} mobile align="center">
                  {d.copy[1].text}
                </P>
              </Column>
            </Layer>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
