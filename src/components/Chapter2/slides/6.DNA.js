import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { HalfWatches } from '../Watches';
import data from '../../../data/story';
import { animateFadeInOut, fadeIn, fadeOut } from '../../../helpers/animation';

const d = data.chapters[1].slides[5]

export default function DNA6({ index }) {
  const dnaRef = useRef(null)
  const svRef = useRef(null)

  const mobileAnimation = (slide, props) => animateFadeInOut(slide, props, tl => {
    fadeOut(tl, dnaRef.current)
    fadeIn(tl, svRef.current)
  })
  
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} animate={animateFadeInOut}>
          <Row w="50%" h="100%" justify="flex-start" align="center" css={css`flex-direction: row-reverse; padding-left: 50px;`}>
            <HalfWatches {...d.images[0]} />
            <Column css={css`transform: translateY(100%);`}>
              <P>
              {d.copy[0].text}{' '}{d.copy[1].text}
              </P>
            </Column>
          </Row>
          <Row w="50%" h="100%" justify="flex-start" align="center" css={css`padding-right: 50px;`}>
            <HalfWatches right {...d.images[1]} />
            <Column css={css`transform: translateY(100%);`}>
              <P>
              {d.copy[2].text}{' '}{d.copy[3].text}
              </P>
            </Column>
          </Row>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} subslides={2} animate={mobileAnimation}>
          <Column h="100%" w="100%" justify="center" align="flex-start">
            <Column ref={dnaRef} w="100%">
              <HalfWatches right {...d.images[1]} />
              <Layer>
                <Row w="100%" h="100%" justify="flex-end" align="flex-end">
                  <Column css={css`margin-right: 30px;`}>
                    <H4 tertiary mobile>{d.copy[2].text}</H4>
                    <P mobile>{d.copy[3].text}</P>
                  </Column>
                </Row>
              </Layer>
            </Column>

            <Layer ref={svRef} css={css`opacity: 0;`}>
              <Column h="100%" w="100%" justify="center" align="flex-start">
                <Column w="100%">
                  <HalfWatches right {...d.images[0]} />
                  <Layer>
                    <Row w="100%" h="100%" justify="flex-end" align="flex-end">
                      <Column css={css`margin-right: 30px;`}>
                        <H4 tertiary mobile>{d.copy[0].text}</H4>
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
