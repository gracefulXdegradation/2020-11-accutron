import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H2, P } from '../../../styles/typography';
import { Column, Layer, RightHalf, Row, SlideImage } from '../../UIKit';
import Slide from '../Slide';
import data from '../../../data/story';
import { animateFadeIn, fadeOut, fadeIn, fadeInOut } from '../../../helpers/animation';

const d = data.chapters[0].slides[5]

export default function Legacy5({ index }) {
  const copy1Ref = useRef(null)
  const copy2Ref = useRef(null)

  const mobLayer1 = useRef(null)
  const mobLayer2 = useRef(null)

  const desktopAnimation = (el, props) => animateFadeIn(el, {
    ...props,
    start: 'top top',
    end: 'bottom bottom',
  }, tl => {
    fadeOut(tl, copy1Ref.current);
    fadeIn(tl, copy2Ref.current);
  })

  const mobileAnimation = (el, props) => animateFadeIn(el, {
    ...props,
    start: 'top top',
    end: 'bottom bottom',
  }, tl => {
    fadeOut(tl, copy1Ref.current);
    fadeInOut(tl, copy2Ref.current);
    fadeIn(tl, mobLayer2.current);
  })

  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} subslides={2} animate={desktopAnimation}>
          <Column h="100%" w="50%" justify="center" css={css`margin: 0 100px;`}>
            <Column css={css`transform: translateY(50%);`}>
              <Layer ref={copy1Ref}>
                <Column css={css`max-width: 580px;`}>
                  <P>
                  {d.copy[0].text}
                  </P>
                  <P alternative css={css`margin: 20px 0 50px;`}>
                  {d.copy[1].text}
                  </P>
                </Column>
                <H2 alternative>
                {d.copy[2].text}
                </H2>
              </Layer>
              <Layer ref={copy2Ref} css={css`opacity: 0;`}>
                <Column css={css`max-width: 580px;`}>
                  <P>
                  {d.copy[3].text}
                  </P>
                  <P css={css`margin: 20px 0;`}>
                  {d.copy[4].text}
                  </P>
                  <P>
                  {d.copy[5].text}
                  </P>
                </Column>
              </Layer>
            </Column>
          </Column>
          <RightHalf>
            <Column css={css`max-width: 540px;`} h="100%" justify="center">
              <Row css={css`max-height: 600px;`} h="100%" justify="flex-end">
                <SlideImage {...d.images[0]} />
              </Row>
            </Column>
          </RightHalf>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} subslides={3} animate={mobileAnimation}>
          <Column h="100%">
            <Layer ref={mobLayer1} css={css`height: 50%;`}>
              <SlideImage {...d.images[0]} css={css`object-fit: contain; height: 100%;`} />
              <Column>
                <Layer ref={copy1Ref}>
                  <Column>
                    <P mobile css={css`margin-top: 16px;`}>
                    {d.copy[0].text}
                    </P>
                    <P mobile css={css`margin-top: 20px;`}>
                    {d.copy[1].text}
                    </P>
                  </Column>
                </Layer>
                <Layer ref={copy2Ref} css={css`opacity: 0;`}>
                  <H2 alternative mobile css={css`margin-top: 16px; text-align: center;`}>
                  {d.copy[2].text}
                  </H2>
                </Layer>
                <Layer ref={mobLayer2} css={css`opacity: 0;`}>
                  <Column>
                    <P mobile>
                    {d.copy[3].text}
                    </P>
                    <P mobile css={css`margin: 20px 0;`}>
                    {d.copy[4].text}
                    </P>
                    <P mobile>
                    {d.copy[5].text}
                    </P>
                  </Column>
                </Layer>
              </Column>
            </Layer>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
