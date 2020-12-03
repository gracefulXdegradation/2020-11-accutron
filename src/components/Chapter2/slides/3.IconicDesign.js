import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { P } from '../../../styles/typography';
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { HalfWatches, WatchesSafeArea } from '../Watches';
import { animateFadeInOut, fadeInOut, fadeOut, revealWatch } from '../../../helpers/animation';

export default function IconicDesign2(props) {
  const { data: d  } = props
  const leftImg = d.images[0]
  const rightImg = d.images[1]
  
  const p1Ref = useRef(null);
  const h1Ref = useRef(null);
  const h15Ref = useRef(null);
  const watchRef = useRef(null);

  const animation = (slide, props) => animateFadeInOut(slide, props, tl => {
    fadeOut(tl, p1Ref.current)
    fadeInOut(tl, h1Ref.current)
    
    revealWatch(tl, watchRef.current)
  })

  const mobileAnimation = (slide, props) => animateFadeInOut(slide, props, tl => {

    fadeOut(tl, p1Ref.current)
    fadeInOut(tl, h1Ref.current)
    fadeInOut(tl, h15Ref.current)
    
    revealWatch(tl, watchRef.current)
  })
  
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide {...props} subslides={5} animate={animation}>
          <Row w="50%" h="100%">
            <Layer ref={p1Ref}>
              <Column w="100%" h="100%" align="flex-end" justify="flex-end">
                <Column w="100%" h="50%" justify="flex-start" align="flex-end">
                  <P css={css`max-width: 610px; padding: 20px;`}>
                  {d.copy[0].text}
                  </P>
                </Column>
              </Column>
            </Layer>

            <Layer ref={h1Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="flex-end" justify="center">
                <Column w="100%" h="50%" justify="flex-end" align="flex-start" css={css`max-width: 590px; padding: 0 32px;`}>
                  <P css={css`padding: 20px 0;`}>
                  {d.copy[1].text}
                  </P>
                </Column>
                <Column w="100%" h="50%" justify="flex-start" align="flex-end" css={css`max-width: 590px; padding: 0 32px;`}>
                  <P css={css`padding: 20px 0;`}>
                  {d.copy[2].text}{' '}{d.copy[3].text}
                  </P>
                </Column>
              </Column>
            </Layer>

            <Layer>
              <Row w="100%" h="100%" justify="flex-end" align="center">
                <WatchesSafeArea justify="flex-end">
                  <HalfWatches {...leftImg} ref={watchRef} isHidden />
                </WatchesSafeArea>
              </Row>
            </Layer>
          </Row>

          <Row w="50%" h="100%" justify="flex-start" align="center">
            <WatchesSafeArea justify="flex-start">
              <HalfWatches right {...rightImg} />
            </WatchesSafeArea>
          </Row>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide {...props} subslides={8} animate={mobileAnimation}>
          <Row h="100%" align="center">
            <Column w="100%" h="100%">

              <Row css={css`flex: 1;`}>
                <Row w="50%" h="100%">
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
                        {d.copy[2].text}{' '}{d.copy[3].text}
                      </P>
                    </Column>
                  </Layer>

                  <Layer>
                    <Column w="100%" h="100%" align="flex-end" justify="center">
                      <HalfWatches ref={watchRef} {...leftImg} isHidden maxHeight="420px" />
                    </Column>
                  </Layer>
                </Row>

                <Row w="50%" h="100%" justify="flex-start" align="center">
                  <Layer>
                    <Column w="100%" h="100%" align="flex-start" justify="center">
                      <HalfWatches right {...rightImg} maxHeight="420px" />
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
