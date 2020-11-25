import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { P } from '../../../styles/typography';
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { HalfWatches, WatchesSafeArea } from '../Watches';
import data from '../../../data/story';
import { animateFadeInOut, fadeIn, fadeInOut, fadeOut } from '../../../helpers/animation';

const d = data.chapters[1].slides[2]

export default function IconicDesign2({ index }) {
  const p1Ref = useRef(null);
  const h1Ref = useRef(null);
  const h15Ref = useRef(null);
  const watchRef = useRef(null);
  const leftHalfRef = useRef(null);
  const watch2Ref = useRef(null);
  const p2Ref = useRef(null);
  const h2Ref = useRef(null);

  const animation = (slide, props) => animateFadeInOut(slide, props, tl => {
    fadeOut(tl, p1Ref.current)
    fadeInOut(tl, h1Ref.current)
    fadeIn(tl, watchRef.current)
    fadeInOut(tl, p2Ref.current)
    fadeIn(tl, h2Ref.current)
  })

  const mobileAnimation = (slide, props) => animateFadeInOut(slide, props, tl => {

    fadeOut(tl, p1Ref.current)
    fadeInOut(tl, h1Ref.current)
    fadeInOut(tl, h15Ref.current)
    fadeIn(tl, watchRef.current)
    tl.to([leftHalfRef.current, watch2Ref.current], {
      top: 0,
      duration: .5,
      ease: 'none',
    })
    fadeInOut(tl, p2Ref.current)
    fadeIn(tl, h2Ref.current)
  })
  
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} subslides={5} animate={animation}>
          <Row w="50%" h="100%">
            <Layer ref={p1Ref}>
              <Column w="100%" h="100%" align="flex-end" justify="center">
                <Column w="100%" h="50%" justify="flex-end" align="flex-end">
                  <P css={css`max-width: 610px; padding: 20px;`}>
                    {d.copy[0].text}
                  </P>
                </Column>
                <Column w="100%" h="50%" justify="flex-start" align="flex-end">
                  <P css={css`max-width: 610px; padding: 20px;`}>
                  {d.copy[1].text}
                  </P>
                </Column>
              </Column>
            </Layer>

            <Layer ref={h1Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="flex-end" justify="center">
                <Column w="100%" h="50%" justify="flex-end" align="flex-start" css={css`max-width: 590px; padding: 0 32px;`}>
                  <P css={css`padding: 20px 0;`}>
                  {d.copy[2].text}
                  </P>
                </Column>
                <Column w="100%" h="50%" justify="flex-start" align="flex-end" css={css`max-width: 590px; padding: 0 32px;`}>
                  <P css={css`padding: 20px 0;`}>
                  {d.copy[3].text}
                  </P>
                </Column>
              </Column>
            </Layer>

            <Layer ref={watchRef} css={css`opacity: 0;`}>
              <Row w="100%" h="100%" justify="flex-end" align="center">
                <WatchesSafeArea justify="flex-end">
                  <HalfWatches src={d.images[0].src} />
                </WatchesSafeArea>
              </Row>
            </Layer>
          </Row>

          <Row w="50%" h="100%" justify="flex-start" align="center">
            <WatchesSafeArea justify="flex-start">
              <HalfWatches right src={d.images[0].src} />
            </WatchesSafeArea>
          </Row>

          <Layer left="0" ref={p2Ref} css={css`opacity: 0;`}>
            <Column h="100%" w="100%" justify="flex-end" align="center">
              <P align="center" css={css`max-width: 380px; margin-bottom: 50px;`}>
              {d.copy[4].text}
              </P>
            </Column>
          </Layer>

          <Layer left="0" ref={h2Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" justify="flex-end">
                <Column h="200px" align="center" justify="center" css={css`margin: 50px 0;`}>
                  <P align="center"  css={css`max-width: 900px;`}>
                  {d.copy[5].text}
                  </P>
                </Column>
              </Column>
            </Layer>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} subslides={8} animate={mobileAnimation}>
          <Row h="100%" align="center">
            <Column w="100%" h="100%">
              <Column>
                <P mobile ref={p2Ref} align="center" css={css`text-align: center; padding: 10px 32px; opacity: 0;`}>
                  {d.copy[4].text}
                </P>
                <Layer left="0" ref={h2Ref} css={css`opacity: 0;`}>
                  <Column w="100%" h="100%" align="center" justify="center">
                    <P mobile align="center" css={css`text-align: center; padding: 10px 32px;`}>
                    {d.copy[5].text}
                    </P>
                  </Column>
                </Layer>
              </Column>

              <Row css={css`flex: 1;`}>
                <Row ref={leftHalfRef} w="50%" h="100%" css={css`top: -40px;`}>
                  <Layer ref={p1Ref}>
                    <Column w="100%" h="100%" align="flex-end" justify="center">
                      <P mobile css={css`margin-right: 8px; max-width: 146px;`}>
                        {d.copy[0].text}
                      </P>
                    </Column>
                  </Layer>

                  <Layer ref={h1Ref} css={css`opacity: 0;`}>
                    <Column w="100%" h="100%" align="flex-end" justify="center">
                      <P mobile css={css`margin-right: 8px; max-width: 165px;`}>
                        {d.copy[1].text}
                      </P>
                    </Column>
                  </Layer>

                  <Layer ref={h15Ref} css={css`opacity: 0;`}>
                    <Column w="100%" h="100%" align="flex-end" justify="center">
                      <P mobile css={css`margin-right: 8px; max-width: 165px;`}>
                      {d.copy[2].text}
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
                  <Layer ref={watch2Ref} css={css`top: -40px;`}>
                    <Column w="100%" h="100%" align="flex-start" justify="center">
                      <HalfWatches right src={d.images[0].src} />
                    </Column>
                  </Layer>
                </Row>
              </Row>

            </Column>
          </Row>
        </Slide>
      </MobileView>
    </>
  );
};
