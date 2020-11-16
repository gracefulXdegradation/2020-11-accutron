import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import Image from '../../../assets/ch1-s4.png'
import { Column, LeftHalf, RightHalf, SlideImage } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function Slide4({ index }) {
  const copyRef = useRef(null)
  const imageRef = useRef(null)

  const mobileAnimation = (el) => {
    const transitions = 4;

    return gsap.timeline({
      scrollTrigger: {
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
      <BrowserView>
        <Slide index={index}>
          <LeftHalf>
            <Column h="100%" justify="center">
              <SlideImage src={Image} alt="Accutron watches" />
            </Column>
          </LeftHalf>
          <RightHalf>
            <Column css={css`max-width: 540px;`} h="100%" justify="center">
              <Column css={css`transform: translateY(50%);`}>
                <P>
                  Bulova’s tuning fork technology was so revolutionary that
                </P>
                <H4 css={css`margin: 20px 0;`}>
                  NASA opted to use Accutron technology for its manned space missions
                </H4>
                <P>
                outfitting cockpit flight instruments during the Gemini and Apollo programs. 
                </P>
              </Column>
            </Column>
          </RightHalf>
        </Slide>
      </BrowserView>

      <MobileView style={{height: "100vh"}}>
        <Slide index={index} animate={mobileAnimation}>
          <SlideImage ref={imageRef} src={Image} alt="Accutron watches" css={css`top: 20%; position: relative;`} />
          <Column ref={copyRef} css={css`opacity: 0; margin-top: 40px;`}>
            <P mobile>
              Bulova’s tuning fork technology was so revolutionary that
            </P>
            <H4 mobile css={css`margin: 20px 0;`}>
              NASA opted to use Accutron technology for its manned space missions
            </H4>
            <P mobile>
            outfitting cockpit flight instruments during the Gemini and Apollo programs. 
            </P>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
