import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H2, H4, P } from '../../../styles/typography';
import TunerImage from '../../../assets/ch1-s3-tuner.png'
import { Column, Layer, LeftHalf, SlideImage } from '../../UIKit';
import Slide, { animateFadeInOut } from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';
import data from '../../../data/story';

const d = data.chapters[0].slides[2]

gsap.registerPlugin(ScrollTrigger);

export default function Technology3({ index }) {
  const copy1Ref = useRef(null)
  const copy2Ref = useRef(null)

  const mobileAnimation = (el, props) => {
    const transitions = 4;

    return gsap.timeline({
      scrollTrigger: {
        ...props,
        trigger: el,
        pin: el,
        pinSpacing: false,
        scrub: true,
      }
    })
    .to(el, {
      opacity: 1,
      duration: 1/transitions,
      ease: 'none',
    })
    .to(copy1Ref.current, {
      duration: 1/transitions,
      opacity: 0,
      ease: 'none'
    })
    .to(copy2Ref.current, {
      duration: 1/transitions,
      opacity: 1,
      ease: 'none'
    })
    .to(el, {
      opacity: 0,
      duration: 1/transitions,
      ease: 'none',
    })
  }

  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} animate={animateFadeInOut}>
          <LeftHalf>
            <Column css={css`max-width: 540px;`} h="100%" justify="center">
              <H2 alternative>
                {d.copy[0].text}
              </H2>
              <P css={css`margin: 20px 0;`}>
              {d.copy[1].text}
              </P>
              <P css={css`margin-bottom: 20px;`}>
              {d.copy[2].text}
              </P>
              <P>
              {d.copy[3].text}
              </P>
            </Column>
          </LeftHalf>
          <Layer css={css`right: -10%; z-index: -1; width: 72%;`}>
            <SlideImage {...d.images[0]} css={css`position: absolute; top: 35%;`} />
          </Layer>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} animate={mobileAnimation}>
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
      </MobileView>
    </>
  );
};
