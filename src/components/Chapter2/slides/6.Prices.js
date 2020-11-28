import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import { BackgroundImage, Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { animateFadeInOut, fadeIn, fadeOut } from '../../../helpers/animation';

export default function DNA6({ index, data: d }) {
  const spaceviewImg = d.images[0]
  const dnaImg = d.images[1]

  const dnaImgRef = useRef(null)
  const dnaPriceRef = useRef(null)
  const svImgRef = useRef(null)
  const svPriceRef = useRef(null)

  const animation = (slide, props) => animateFadeInOut(slide, props, tl => {
    fadeOut(tl, [svImgRef.current, svPriceRef.current])
    fadeIn(tl, [dnaImgRef.current, dnaPriceRef.current])
  })
  
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide isBackground index={index} subslides={2} animate={animation}>
          <Layer left="0">
            <BackgroundImage ref={svImgRef} position="center" {...spaceviewImg} />
            <Layer top="0">
              <BackgroundImage ref={dnaImgRef} position="center" {...dnaImg} css={css`opacity: 0;`} />
            </Layer>
          </Layer>

          <Layer left="0">
            <Column w="50%" h="100%" justify="flex-end">
              <Column w="100%" h="50%" justify="center">
                <Column w="100%" h="33%" justify="flex-end" align="center">
                  <P ref={svPriceRef}>{d.copy[0].text}{' '}{d.copy[1].text}</P>

                  <Layer ref={dnaPriceRef} css={css`opacity: 0;`}>
                    <Column w="100%" h="100%" justify="flex-end" align="center">
                      <P>{d.copy[2].text}{' '}{d.copy[3].text}</P>
                    </Column>
                  </Layer>
                </Column>
              </Column>
            </Column>
          </Layer>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide isBackground index={index} subslides={2} animate={animation}>
          <Layer top="0" left="0" css={css`opacity: 0.7;`}>
            <BackgroundImage ref={svImgRef} position="center" {...spaceviewImg} />
            <Layer top="0">
              <BackgroundImage ref={dnaImgRef} position="center" {...dnaImg} css={css`opacity: 0;`} />
            </Layer>
          </Layer>

          <Column h="100%" w="100%" justify="center" align="flex-start">
            <Column h="100%" w="100%">
              <Layer ref={svPriceRef}>
                <Row w="100%" h="100%" justify="flex-end" align="flex-end">
                  <Column css={css`margin-right: 30px;`}>
                    <H4 alternative mobile>{d.copy[2].text}</H4>
                    <P mobile>{d.copy[3].text}</P>
                  </Column>
                </Row>
              </Layer>
            </Column>

            <Layer ref={dnaPriceRef} css={css`opacity: 0;`}>
              <Column h="100%" w="100%" justify="center" align="flex-start">
                <Column h="100%" w="100%">
                  <Layer>
                    <Row w="100%" h="100%" justify="flex-end" align="flex-end">
                      <Column css={css`margin-right: 30px;`}>
                        <H4 alternative mobile>{d.copy[0].text}</H4>
                        <P mobile>{d.copy[1].text}</P>
                      </Column>
                    </Row>
                  </Layer>
                </Column>
              </Column>
            </Layer>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
