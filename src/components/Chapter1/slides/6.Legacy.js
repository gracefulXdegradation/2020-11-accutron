import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H2, H4, P } from '../../../styles/typography';
import SpaceviewAlphaImage from '../../../assets/1961_Accutron-SpaceviewAlpha.png';
import { Column, Layer, RightHalf, Row, SlideImage } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function Legacy5({ index }) {
  const copy1Ref = useRef(null)
  const copy2Ref = useRef(null)

  const mobLayer1 = useRef(null)
  const mobLayer2 = useRef(null)
  const mobHead2 = useRef(null)

  const desktopAnimation = (el, props) => {
    const transitions = 3;

    return gsap.timeline({
      scrollTrigger: {
        ...props,
        trigger: el,
        pin: el,
        // pinSpacing: false,
        scrub: true,
        start: 'top top',
        end: 'bottom bottom',
      },
    })
    .to(el, {
      opacity: 1,
      duration: 1/transitions,
      ease: 'none',
    })
    .to(copy1Ref.current, {
      opacity: 0,
      duration: 1/transitions,
      ease: 'none',
    })
    .to(copy2Ref.current, {
      opacity: 1,
      duration: 1/transitions,
      ease: 'none',
    })
  }

  const mobileAnimation = (el, props) => {
    const transitions = 6;

    return gsap.timeline({
      scrollTrigger: {
        ...props,
        trigger: el,
        pin: el,
        scrub: true,
        pinSpacing: false,
        start: 'top top',
        end: 'bottom bottom',
      }
    })
    .to(el, {
      opacity: 1,
      duration: 1/transitions,
      ease: 'none',
    })
    .to(copy1Ref.current, {
      opacity: 0,
      duration: 1/transitions,
      ease: 'none',
    })
    .to(copy2Ref.current, {
      opacity: 1,
      duration: 1/transitions,
      ease: 'none',
    })
    .to(mobLayer1.current, {
      opacity: 0,
      duration: 1/transitions,
      ease: 'none',
    })
    .to(mobLayer2.current, {
      opacity: 1,
      duration: 1/transitions,
      ease: 'none',
    })
    .to(mobHead2.current, {
      opacity: 1,
      duration: 1/transitions,
      ease: 'none',
    })
  }

  return (
    <>
      <BrowserView style={{height: "200vh"}}>
        <Slide index={index} subslides={2} animate={desktopAnimation}>
          <Column h="100%" w="50%" justify="center" css={css`margin: 0 100px;`}>
            <Column css={css`transform: translateY(50%);`}>
              <Layer ref={copy1Ref}>
                <Column css={css`max-width: 580px;`}>
                  <P>
                    In 2014, Emmy-award winning advertising drama Mad Men opened its final season with an entire episode dedicated to pitching the watch.
                  </P>
                  <H4 alternative css={css`margin: 25px 0 56px;`}>
                    Their tagline was surprisingly simple, yet effective:
                  </H4>
                </Column>
                <H2 alternative>
                  “it’s not a timepiece,<br/>
                  it’s a conversation piece.”
                </H2>
              </Layer>
              <Layer ref={copy2Ref} css={css`opacity: 0;`}>
                <Column css={css`max-width: 580px;`}>
                  <H4 alternative>
                    And the conversation has only just begun.
                  </H4>
                  <P css={css`margin: 25px 0 56px;`}>
                    As Accutron celebrates its 60th anniversary this year, they’re 
                    relaunching the watch with yet another timekeeping innovation.
                  </P>
                </Column>
                <H2 alternative>
                  the  world’s first timepiece powered by electrostatic energy. 
                </H2>
              </Layer>
            </Column>
          </Column>
          <RightHalf>
            <Column css={css`max-width: 540px;`} h="100%" justify="center">
              <Row css={css`max-height: 600px;`} h="100%" justify="flex-end">
                <SlideImage src={SpaceviewAlphaImage} alt="1961 Accutron Spaceview Alpha" />
              </Row>
            </Column>
          </RightHalf>
        </Slide>
      </BrowserView>

      <MobileView style={{height: "300vh"}}>
        <Slide index={index} subslides={3} animate={mobileAnimation}>
          <Column h="100%">
            <Layer ref={mobLayer1} css={css`height: 50%;`}>
              <SlideImage src={SpaceviewAlphaImage} alt="1961 Accutron Spaceview Alpha" css={css`object-fit: contain; height: 100%;`} />
              <Column>
                <Layer ref={copy1Ref}>
                  <Column>
                    <P mobile css={css`margin-top: 16px;`}>
                      In 2014, Emmy-award winning advertising drama Mad Men opened its final season with an entire episode dedicated to pitching the watch.
                    </P>
                    <H4 mobile alternative css={css`margin-top: 16px;`}>
                      Their tagline was surprisingly simple, yet effective:
                    </H4>
                  </Column>
                </Layer>
                <Layer ref={copy2Ref} css={css`opacity: 0;`}>
                  <H2 alternative mobile css={css`margin-top: 16px; text-align: center;`}>
                    “it’s not a timepiece,<br/>
                    it’s a conversation piece.”
                  </H2>
                </Layer>
              </Column>
            </Layer>
            <Layer ref={mobLayer2} css={css`opacity: 0;`}>
              <Column>
                <H4 mobile alternative>
                  And the conversation has only just begun.
                </H4>
                <P mobile css={css`margin: 16px 0 40px;`}>
                  As Accutron celebrates its 60th anniversary this year, they’re 
                  relaunching the watch with yet another timekeeping innovation.
                </P>
                <H2 ref={mobHead2} mobile alternative css={css`opacity: 0;`}>
                  the  world’s first timepiece powered by electrostatic energy. 
                </H2>
              </Column>
            </Layer>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
