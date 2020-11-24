import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { P } from '../../../styles/typography';
import { Column, LeftHalf, RightHalf, SlideImage } from '../../UIKit';
import Slide from '../Slide';
import data from '../../../data/story';
import { animateFadeInOut, fadeIn } from '../../../helpers/animation';

const d = data.chapters[0].slides[3]

export default function Legacy4({ index }) {
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
      <BrowserView renderWithFragment>
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
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} subslides={2} animate={mobileAnimation}>
          <SlideImage ref={imageRef} {...d.images[0]} css={css`top: 20%; position: relative;`} />
          <Column ref={copyRef} css={css`opacity: 0; margin-top: 40px;`}>
            <P mobile>
            {d.copy[0].text}
            </P>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
