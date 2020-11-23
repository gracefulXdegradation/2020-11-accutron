import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import Image from '../../../assets/ch1-legacy-1.png'
import { Column, LeftHalf, RightHalf, SlideImage } from '../../UIKit';
import Slide, { animateFadeInOut } from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';
import data from '../../../data/story';

const d = data.chapters[0].slides[3]

gsap.registerPlugin(ScrollTrigger);

export default function Legacy4({ index }) {
  const copyRef = useRef(null)
  const imageRef = useRef(null)

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
    .to(imageRef.current, {
      duration: 1/transitions,
      top: 0,
      ease: 'none'
    })
    .to(copyRef.current, {
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
            <Column h="100%" justify="center">
              <SlideImage {...d.images[0]} />
            </Column>
          </LeftHalf>
          <RightHalf>
            <Column css={css`max-width: 540px;`} h="100%" justify="center">
              <Column css={css`transform: translateY(50%);`}>
                <P>
                {d.copy[0].text}
                </P>
              </Column>
            </Column>
          </RightHalf>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} animate={mobileAnimation}>
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
