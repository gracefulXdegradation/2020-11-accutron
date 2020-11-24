import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { isBrowser, isMobile, withOrientationChange } from "react-device-detect";
import { H2, H4, P } from '../../../styles/typography';
import { Column, Layer, LeftHalf, SlideImage } from '../../UIKit';
import Slide from '../Slide';
import data from '../../../data/story';
import { animateFadeInOut, fadeIn, fadeOut } from '../../../helpers/animation';

const d = data.chapters[0].slides[2]

function Technology3({ index, isPortrait, isLandscape }) {
  const copy1Ref = useRef(null)
  const copy2Ref = useRef(null)

  const animation = (el, props) => animateFadeInOut(el, props, tl => {
    fadeOut(tl, copy1Ref.current);
    fadeIn(tl, copy2Ref.current);
  })

  return (
    <>
      {isBrowser && (
        <Slide index={index} animate={animation} subslides={2}>
          <LeftHalf>
            <Column css={css`max-width: 540px;`} h="100%" justify="center">
              <Column h="50%" w="100%" justify="flex-end" css={css`margin-bottom: 20px;`}>
                <H2 alternative>
                  {d.copy[0].text}
                </H2>
              </Column>
              <Column h="50%" w="100%" justify="flex-start" css={css`margin-top: 20px;`}>
                <Layer ref={copy1Ref}>
                  <P>
                  {d.copy[1].text}
                  </P>
                  <P css={css`margin-top: 20px;`}>
                  {d.copy[2].text}
                  </P>
                </Layer>
                <P ref={copy2Ref} css={css`opacity: 0;`}>
                {d.copy[3].text}
                </P>
              </Column>
            </Column>
          </LeftHalf>
          <Layer css={css`right: -10%; z-index: -1; width: 72%;`}>
            <SlideImage {...d.images[0]} css={css`position: absolute; top: 35%;`} />
          </Layer>
        </Slide>
      )}

      {isMobile && isPortrait && (
        <Slide index={index} subslides={2} animate={animation}>
          <Layer css={css`height: 100%; right: -20%; z-index: -1; width: 140%; top: 0;`}>
            <SlideImage {...d.images[0]} css={css`position: absolute; bottom: 80px;`} />
          </Layer>
          <div css={css`position: relative;`}>
            <Column ref={copy1Ref} css={css`position: absolute;`}>
              <H2 mobile alternative>
                {d.copy[0].text}
              </H2>
              <P mobile css={css`margin-top: 16px;`}>
              {d.copy[1].text}
              </P>
            </Column>
            <Column ref={copy2Ref} css={css`position: absolute; opacity: 0;`}>
              <P mobile css={css`margin-bottom: 20px;`}>
              {d.copy[2].text}
              </P>
              <P mobile>
              {d.copy[3].text}
              </P>
            </Column>
          </div>
        </Slide>
      )}

      {isMobile && isLandscape && (
        <Slide index={index} animate={animation} subslides={2}>
          <LeftHalf mobile>
            <Column h="100%" justify="center">
              <Column h="50%" w="100%" justify="center">
                <H4 mobile alternative css={css`margin-bottom: 20px;`}>
                  {d.copy[0].text}
                </H4>
                <Column>
                <Layer ref={copy1Ref}>
                  <P mobile>
                  {d.copy[1].text}
                  </P>
                  <P mobile css={css`margin-top: 20px;`}>
                  {d.copy[2].text}
                  </P>
                </Layer>
                <P mobile ref={copy2Ref} css={css`opacity: 0;`}>
                {d.copy[3].text}
                </P>
                </Column>
              </Column>
            </Column>
          </LeftHalf>
          <Layer css={css`right: -10%; z-index: -1; width: 72%;`}>
            <SlideImage {...d.images[0]} css={css`position: absolute; top: 35%;`} />
          </Layer>
        </Slide>
      )}
    </>
  );
};

export default withOrientationChange(Technology3);
