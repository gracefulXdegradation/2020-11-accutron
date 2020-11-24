import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { P } from '../../../styles/typography';
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { HalfWatches } from '../Watches';
import data from '../../../data/story';
import { animateFadeOut, fadeIn, fadeInOut, fadeOut } from '../../../helpers/animation';

const d = data.chapters[1].slides[0]

export default function TheSpaceview({ index }) {
  const slide1Ref = useRef(null)
  const slide2Ref = useRef(null)
  const slide3Ref = useRef(null)
  const slide4Ref = useRef(null)
  const slide5Ref = useRef(null)
  const slide6Ref = useRef(null)

  const animation = (el, props) => animateFadeOut(el, props, tl => {
    fadeOut(tl, slide1Ref.current);
    fadeInOut(tl, slide2Ref.current);
    fadeInOut(tl, slide3Ref.current);
    fadeInOut(tl, slide4Ref.current);
    slide5Ref.current && fadeInOut(tl, slide5Ref.current);
    fadeIn(tl, slide6Ref.current);
  })
  
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} startVisible subslides={4} animate={animation}>
            <Row w="50%" h="100%">
              <HalfWatches src={d.images[1].src} />
            </Row>
            
            <Row w="50%" h="100%">
              <Layer ref={slide1Ref}>
                <Row h="100%">
                  <HalfWatches src={d.images[0].src} right />
                </Row>
              </Layer>
              
              <Layer ref={slide2Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <P css={css`position: absolute; transform: translateY(-50%); max-width: 520px; padding: 20px 0; margin: 0 32px;`}>
                    {d.copy[0].text}
                  </P>
                  <P css={css`position: absolute; transform: translateY(50%); max-width: 520px; padding: 20px 0; margin: 0 32px;`}>
                  {d.copy[1].text}
                  </P>
                </Column>
              </Layer>

              <Layer ref={slide3Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <P css={css`position: absolute; transform: translateY(-50%); max-width: 520px; padding: 20px 0; margin-left:  32px;`}>
                  {d.copy[2].text}
                  </P>
                </Column>
              </Layer>

              <Layer ref={slide4Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <P css={css`position: absolute; transform: translateY(-50%); max-width: 520px; padding: 20px 0; margin: 0 32px;`}>
                  {d.copy[3].text}
                  </P>
                  <P css={css`position: absolute; transform: translateY(50%); max-width: 520px; padding: 20px 0; margin: 0 32px;`}>
                  {d.copy[4].text}
                  </P>
                </Column>
              </Layer>

              <Layer ref={slide6Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%">
                  <HalfWatches large src={d.images[1].src} right />
                </Column>
              </Layer>
            </Row>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} startVisible subslides={5} animate={animation}>
          <Row h="100%" align="center">
            <Row w="50%" h="100%" justify="flex-end" align="center">
              <HalfWatches src={d.images[1].src} />
            </Row>

            <Row w="50%" h="100%">
              <Layer ref={slide1Ref}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <HalfWatches src={d.images[0].src} right />
                </Column>
              </Layer>

              <Layer ref={slide2Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <P mobile css={css`margin-left: 8px; max-width: 165px;`}>
                    {d.copy[0].text}
                    <br /><br />
                    {d.copy[1].text}
                  </P>
                </Column>
              </Layer>

              <Layer ref={slide3Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <P mobile css={css`margin-left: 8px; max-width: 165px;`}>
                    {d.copy[2].text}
                  </P>
                </Column>
              </Layer>

              <Layer ref={slide4Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <P mobile css={css`margin-left: 8px; max-width: 165px;`}>
                    {d.copy[3].text}
                  </P>
                </Column>
              </Layer>

              <Layer ref={slide5Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <P mobile css={css`margin-left: 8px; max-width: 165px;`}>
                    {d.copy[4].text}
                  </P>
                </Column>
              </Layer>

              <Layer ref={slide6Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <HalfWatches src={d.images[1].src} right />
                </Column>
              </Layer>
            </Row>
          </Row>
        </Slide>
      </MobileView>
    </>
  );
};
