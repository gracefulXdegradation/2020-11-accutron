import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { isBrowser, isMobile, withOrientationChange } from "react-device-detect";
import { H2, H3, H4, P } from '../../../styles/typography';
import { Column, Layer, LeftHalf, RightHalf, Row, SlideImage } from '../../UIKit';
import Slide from '../Slide';
import data from '../../../data/story';
import { animateFadeIn, fadeOut, fadeIn, fadeInOut } from '../../../helpers/animation';

const d = data.chapters[0].slides[5]

function Legacy5({ index, isPortrait, isLandscape }) {
  const copy1Ref = useRef(null)
  const copy2Ref = useRef(null)
  const copy3Ref = useRef(null)

  const mobLayer1 = useRef(null)
  const mobLayer2 = useRef(null)

  const desktopAnimation = (el, props) => animateFadeIn(el, {
    ...props,
    start: 'top top',
    end: 'bottom bottom',
  }, tl => {
    fadeOut(tl, copy1Ref.current);
    fadeInOut(tl, copy2Ref.current);
    fadeIn(tl, copy3Ref.current);
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
      {isBrowser && (
        <Slide index={index} subslides={3} animate={desktopAnimation}>
          <LeftHalf>
            <Column w="100%" h="100%" justify="flex-end">
              <Column w="100%" h="50%" css={css`padding-top: 20px;`}>
                <Layer ref={copy1Ref}>
                  <Column css={css`max-width: 580px;`}>
                    <P>
                    {d.copy[0].text}
                    </P>
                    <P alternative css={css`margin: 20px 0;`}>
                    {d.copy[1].text}
                    </P>
                  </Column>
                </Layer>
                <Layer ref={copy2Ref} css={css`opacity: 0;`}>
                  <H3 alternative>
                  {d.copy[2].text}
                  </H3>
                </Layer>
                <Layer ref={copy3Ref} css={css`opacity: 0;`}>
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
          </LeftHalf>
          <RightHalf>
            <Column css={css`max-width: 540px;`} h="100%" justify="center">
              <Row css={css`max-height: 600px;`} h="100%" justify="flex-end">
                <SlideImage {...d.images[0]} css={css`object-fit: contain;`} />
              </Row>
            </Column>
          </RightHalf>
        </Slide>
      )}

      {isMobile && isPortrait && (
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
                    <P mobile css={css`margin-top: 16px;`}>
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
      )}

      {isMobile && isLandscape && (
        <Slide index={index} subslides={3} animate={desktopAnimation}>
          <LeftHalf mobile>
            <Column w="100%" h="100%" justify="center">
              <Layer ref={copy1Ref}>
                <Column h="100%" justify="center" css={css`max-width: 580px;`}>
                  <P mobile>
                  {d.copy[0].text}
                  </P>
                  <P mobile alternative css={css`margin: 20px 0;`}>
                  {d.copy[1].text}
                  </P>
                </Column>
              </Layer>
              <Layer ref={copy2Ref} css={css`opacity: 0;`}>
                <Column h="100%" justify="center" css={css`max-width: 580px;`}>
                  <H4 mobile alternative>
                  {d.copy[2].text}
                  </H4>
                </Column>
              </Layer>
              <Layer ref={copy3Ref} css={css`opacity: 0;`}>
                <Column h="100%" justify="center" css={css`max-width: 580px;`}>
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
          </LeftHalf>
          <RightHalf mobile>
            <Column h="100%" justify="center">
              <Row h="100%" justify="flex-end" css={css`padding: 50px 0;`}>
                <SlideImage {...d.images[0]} css={css`object-fit: contain;`} />
              </Row>
            </Column>
          </RightHalf>
        </Slide>
      )}
    </>
  );
};

export default withOrientationChange(Legacy5)
