import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H2, H4, P } from '../../../styles/typography';
import Image from '../../../assets/ch1-s4.png'
import { Column, Layer, LeftHalf, RightHalf, SlideImage } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function Slide4({ index }) {
  // const copy1Ref = useRef(null)
  // const copy2Ref = useRef(null)

  // const mobileAnimation = (el) => {
  //   const transitions = 4;

  //   return gsap.timeline({
  //     scrollTrigger: {
  //       trigger: el,
  //       pin: el,
  //       pinSpacing: false,
  //       scrub: true,
  //     }
  //   })
  //   .to(el, {
  //     opacity: 1,
  //     duration: 1/transitions,
  //     ease: 'none',
  //   })
  //   .to(copy1Ref.current, {
  //     duration: 1/transitions,
  //     opacity: 0,
  //     ease: 'none'
  //   })
  //   .to(copy2Ref.current, {
  //     duration: 1/transitions,
  //     opacity: 1,
  //     ease: 'none'
  //   })
  //   .to(el, {
  //     opacity: 0,
  //     duration: 1/transitions,
  //     ease: 'none',
  //   })
  // }

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

      {/* <MobileView style={{height: "100vh"}}>
        <Slide index={index} animate={mobileAnimation}>
          <Layer css={css`height: 100%; right: -20%; z-index: -1; width: 140%; top: 0;`}>
            <SlideImage src={TunerImage} alt="Tuning fork" css={css`position: absolute; bottom: 80px;`} />
          </Layer>
          <div css={css`position: relative;`}>
            <Column ref={copy1Ref} css={css`position: absolute;`}>
              <H2 mobile alternative>
                The tuning fork
              </H2>
              <H4 mobile css={css`margin-top: 16px;`}>
                A revolutionary invention for timekeeper precision.
              </H4>
            </Column>
            <Column ref={copy2Ref} css={css`position: absolute; opacity: 0;`}>
              <P mobile css={css`margin-bottom: 20px;`}>
                Invented by Swiss engineer Max Hetzel, the secret to Accutron’s precision lies in the watch’s tuning fork
              </P>
              <P mobile>
              a small fork-shaped piece typically used as an acoustic resonator for musical instruments. Instead of the traditional balance wheel and spring, this new transistor movement divided each second into 360 equal parts and achieved unprecedented precision.
              </P>
            </Column>
          </div>
        </Slide>
      </MobileView> */}
    </>
  );
};
