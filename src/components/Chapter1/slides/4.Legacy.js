import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { isBrowser, isMobile, withOrientationChange } from "react-device-detect";
import { P } from '../../../styles/typography';
import { Column, LeftHalf, RightHalf, SlideImage } from '../../UIKit';
import Slide from '../Slide';
import { animateFadeInOut, fadeIn } from '../../../helpers/animation';

function Legacy4({ index, isPortrait, isLandscape, data: d }) {
  const copyRef = useRef(null)
  const imageRef = useRef(null)

  const mobileAnimation = (el, props) => animateFadeInOut(el, props, tl => {
    tl.to(imageRef.current, {
      duration: 1,
      top: 0,
      ease: 'none'
    });
    fadeIn(tl, copyRef.current);
  })

  return (
    <>
      {isBrowser && (
        <Slide index={index} animate={animateFadeInOut}>
          <LeftHalf>
            <Column h="100%" justify="center">
              <SlideImage {...d.images[0]} />
            </Column>
          </LeftHalf>
          <RightHalf>
            <Column css={css`max-width: 540px;`} h="100%" justify="flex-end">
              <Column w="100%" h="50%" justify="flex-start" css={css`padding-top: 20px;`}>
                <P>
                {d.copy[0].text}
                </P>
              </Column>
            </Column>
          </RightHalf>
        </Slide>
      )}

      {isMobile && isPortrait && (
        <Slide index={index} subslides={2} animate={mobileAnimation}>
          <SlideImage ref={imageRef} {...d.images[0]} css={css`top: 20%; position: relative;`} />
          <Column ref={copyRef} css={css`opacity: 0; margin-top: 20px;`}>
            <P mobile>
            {d.copy[0].text}
            </P>
          </Column>
        </Slide>
      )}

      {isMobile && isLandscape && (
        <Slide index={index} animate={animateFadeInOut}>
          <LeftHalf mobile>
            <Column h="100%" justify="center">
              <SlideImage {...d.images[0]} />
            </Column>
          </LeftHalf>
          <RightHalf mobile>
            <Column h="100%" justify="center">
              <P mobile>
              {d.copy[0].text}
              </P>
            </Column>
          </RightHalf>
        </Slide>
      )}
    </>
  );
};

export default withOrientationChange(Legacy4)
