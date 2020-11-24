import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { P } from '../../../styles/typography';
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { HalfWatches } from '../Watches';
import data from '../../../data/story';
import { animateFadeInOut, fadeIn, fadeInOut, fadeOut } from '../../../helpers/animation';

const d = data.chapters[1].slides[2]

export default function IconicDesign2({ index }) {
  const p1Ref = useRef(null);
  const h1Ref = useRef(null);
  const h15Ref = useRef(null);
  const watchRef = useRef(null);
  const watch2Ref = useRef(null);
  const p2Ref = useRef(null);
  const h2Ref = useRef(null);

  const animation = (slide, props) => animateFadeInOut(slide, props, tl => {
    const isMobile = !!h15Ref.current

    fadeOut(tl, p1Ref.current)
    fadeInOut(tl, h1Ref.current)
    isMobile && fadeInOut(tl, h15Ref.current)
    fadeIn(tl, watchRef.current)
    isMobile && tl.to([watchRef.current, watch2Ref.current], {
      top: 50,
      duration: .5,
      ease: 'none',
    })
    fadeInOut(tl, p2Ref.current)
    isMobile && fadeOut(tl, [watchRef.current, watch2Ref.current])
    fadeIn(tl, h2Ref.current)
  })
  
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} subslides={5} animate={animation}>
          <Row w="50%" h="100%">
            <Layer ref={p1Ref}>
              <Column w="100%" h="100%" align="flex-end" justify="center">
                <P css={css`position: absolute; transform: translateY(-50%); max-width: 610px; padding: 20px;`}>
                  {d.copy[0].text}
                </P>
                <P css={css`position: absolute; transform: translateY(50%); max-width: 610px; padding: 20px;`}>
                {d.copy[1].text}
                </P>
              </Column>
            </Layer>

            <Layer ref={h1Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="flex-end" justify="center">
                <P css={css`position: absolute; transform: translateY(-50%); max-width: 590px; padding: 20px 0; margin: 0 32px;`}>
                {d.copy[2].text}
                </P>
                <P css={css`position: absolute; transform: translateY(50%); max-width: 590px; padding: 20px 0; margin: 0 32px;`}>
                {d.copy[3].text}
                </P>
              </Column>
            </Layer>

            <Layer ref={watchRef} css={css`opacity: 0;`}>
              <Row w="100%" h="100%" justify="flex-end" align="center">
                <HalfWatches src={d.images[0].src} />
              </Row>
            </Layer>
          </Row>

          <Row w="50%" h="100%" justify="flex-start" align="center">
            <HalfWatches right src={d.images[0].src} />
          </Row>

          <Layer left="0" ref={p2Ref} css={css`opacity: 0;`}>
            <Column h="100%" w="100%" justify="flex-end" align="center">
              <P align="center" css={css`max-width: 380px; margin-bottom: 50px;`}>
              {d.copy[4].text}
              </P>
            </Column>
          </Layer>

          <Layer left="0" ref={h2Ref} css={css`opacity: 0;`}>
            <Column w="100%" h="100%" justify="flex-end" align="center">
              <P align="center" css={css`max-width: 900px; margin-bottom: 50px;`}>
              {d.copy[5].text}
              </P>
            </Column>
          </Layer>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} subslides={8} animate={animation}>
          <Row h="100%" align="center">
            <Row w="50%" h="100%">
              <Layer ref={p1Ref}>
                <Column w="100%" h="100%" align="flex-end" justify="center">
                  <P mobile css={css`margin-right: 8px; max-width: 146px;`}>
                  {d.copy[0].text}
                    <br /><br />
                    {d.copy[1].text}
                  </P>
                </Column>
              </Layer>

              <Layer ref={h1Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-end" justify="center">
                  <P mobile align="right" css={css`margin-right: 8px; max-width: 165px;`}>
                  {d.copy[2].text}
                  </P>
                </Column>
              </Layer>

              <Layer ref={h15Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-end" justify="center">
                  <P mobile align="right" css={css`margin-right: 8px; max-width: 165px;`}>
                  {d.copy[3].text}
                  </P>
                </Column>
              </Layer>

              <Layer ref={watchRef} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-end" justify="center">
                  <HalfWatches src={d.images[0].src} />
                </Column>
              </Layer>
            </Row>

            <Row w="50%" h="100%" justify="flex-start" align="center">
              <Layer ref={watch2Ref}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <HalfWatches right src={d.images[0].src} />
                </Column>
              </Layer>
            </Row>

            <Layer ref={p2Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" justify="flex-start" align="center">
                <P mobile align="center" css={css`text-align: center; margin: 32px;`}>
                {d.copy[4].text}
                </P>
              </Column>
            </Layer>

            <Layer ref={h2Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" justify="center" align="center">
                <P mobile align="center" css={css`text-align: center; margin: 60px;`}>
                {d.copy[5].text}
                </P>
              </Column>
            </Layer>
          </Row>
        </Slide>
      </MobileView>
    </>
  );
};
