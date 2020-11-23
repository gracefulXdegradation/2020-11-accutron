import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';
import { HalfWatches } from '../../Watches';
import data from '../../../data/story';

const d = data.chapters[1].slides[2]

gsap.registerPlugin(ScrollTrigger);

export default function IconicDesign2({ index }) {
  const p1Ref = useRef(null);
  const h1Ref = useRef(null);
  const h15Ref = useRef(null);
  const watchRef = useRef(null);
  const watch2Ref = useRef(null);
  const p2Ref = useRef(null);
  const h2Ref = useRef(null);

  const animation = (slide, props) => {
    const isMobile = !!h15Ref.current

    const tl = gsap.timeline({
      scrollTrigger:{
        ...props,
        trigger: slide,
        pin: slide,
        pinSpacing: false,
        scrub: true,
      }
    })
    .to(slide, {
      opacity: 1,
      duration: 1,
      ease: 'none',
    });

    tl.to(p1Ref.current, {
      opacity: 0,
      duration: 1,
      delay: .5,
      ease: 'none',
    })

    tl.to(h1Ref.current, {
      opacity: 1,
      duration: 1,
      ease: 'none',
    })
    tl.to(h1Ref.current, {
      opacity: 0,
      duration: 1,
      delay: .5,
      ease: 'none',
    })

    if (isMobile) {
      tl.to(h15Ref.current, {
        opacity: 1,
        duration: 1,
        ease: 'none',
      })
      tl.to(h15Ref.current, {
        opacity: 0,
        duration: 1,
        delay: .5,
        ease: 'none',
      })
    }

    tl.to(watchRef.current, {
      opacity: 1,
      duration: 1,
      ease: 'none',
    })

    if (isMobile) {
      tl.to([watchRef.current, watch2Ref.current], {
        top: 50,
        duration: .5,
        ease: 'none',
      })
    }

    tl.to(p2Ref.current, {
      opacity: 1,
      duration: 1,
      ease: 'none',
    })
    tl.to(p2Ref.current, {
      opacity: 0,
      duration: 1,
      delay: .5,
      ease: 'none',
    })

    if (isMobile) {
      tl.to([watchRef.current, watch2Ref.current], {
        opacity: 0,
        duration: 1,
        delay: -.5,
        ease: 'none',
      })
    }

    tl.to(h2Ref.current, {
      opacity: 1,
      duration: 1,
      ease: 'none',
    })

    tl.to(slide, {
      opacity: 0,
      duration: 1,
      delay: .5,
      ease: 'none',
    });

    return tl;
  }
  
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} subslides={7} animate={animation}>
          <Row w="50%" h="100%">
            <Layer ref={p1Ref}>
              <Column w="100%" h="100%" align="flex-end" justify="center">
                <P css={css`position: absolute; transform: translateY(-50%); max-width: 610px; padding: 20px;`}>
                  {d.copy[0].text}
                </P>
                <P css={css`position: absolute; transform: translateY(50%); max-width: 610px; padding: 20px;`}>
                {d.copy[1].text}
                </P>
              </Column>
            </Layer>

            <Layer ref={h1Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="flex-end" justify="center">
                <H4 tertiary align="right" css={css`position: absolute; transform: translateY(-50%); max-width: 590px; padding: 50px 0; margin: 0 32px;`}>
                {d.copy[2].text}
                </H4>
                <H4 tertiary align="right" css={css`position: absolute; transform: translateY(50%); max-width: 590px; padding: 50px 0; margin: 0 32px;`}>
                {d.copy[3].text}
                </H4>
              </Column>
            </Layer>

            <Layer ref={watchRef} css={css`opacity: 0;`}>
              <Row w="100%" h="100%" justify="flex-end" align="center">
                <HalfWatches large src={d.images[0].src} />
              </Row>
            </Layer>
          </Row>

          <Row w="50%" h="100%" justify="flex-start" align="center">
            <HalfWatches large right src={d.images[0].src} />

            <Layer ref={p2Ref} css={css`opacity: 0;`}>
              <Column h="100%" w="100%" justify="center" align="center">
                <P css={css`transform: translateY(50%); padding: 20px; max-width: 380px;`}>
                {d.copy[4].text}
                </P>
              </Column>
            </Layer>
          </Row>

          <Layer ref={h2Ref} css={css`opacity: 0;`}>
            <Column w="100%" h="100%" justify="flex-end" align="center">
              <H4 tertiary align="center" css={css`max-width: 900px; margin-bottom: 50px;`}>
              {d.copy[5].text}
              </H4>
            </Column>
          </Layer>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} subslides={8} animate={animation}>
          <Row h="100%" align="center">
            <Row w="50%" h="100%">
              <Layer ref={p1Ref}>
                <Column w="100%" h="100%" align="flex-end" justify="center">
                  <P mobile css={css`margin-right: 8px; max-width: 146px;`}>
                  {d.copy[0].text}
                    <br /><br />
                    {d.copy[1].text}
                  </P>
                </Column>
              </Layer>

              <Layer ref={h1Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-end" justify="center">
                  <H4 tertiary mobile align="right" css={css`margin-right: 8px; max-width: 165px;`}>
                  {d.copy[2].text}
                  </H4>
                </Column>
              </Layer>

              <Layer ref={h15Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-end" justify="center">
                  <H4 tertiary mobile align="right" css={css`margin-right: 8px; max-width: 165px;`}>
                  {d.copy[3].text}
                  </H4>
                </Column>
              </Layer>

              <Layer ref={watchRef} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-end" justify="center">
                  <HalfWatches src={d.images[0].src} />
                </Column>
              </Layer>
            </Row>

            <Row w="50%" h="100%" justify="flex-start" align="center">
              <Layer ref={watch2Ref}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <HalfWatches right src={d.images[0].src} />
                </Column>
              </Layer>
            </Row>

            <Layer ref={p2Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" justify="flex-start" align="center">
                <P mobile align="center" css={css`text-align: center; margin: 32px;`}>
                {d.copy[4].text}
                </P>
              </Column>
            </Layer>

            <Layer ref={h2Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" justify="center" align="center">
                <H4 tertiary mobile align="center" css={css`text-align: center; margin: 60px;`}>
                {d.copy[5].text}
                </H4>
              </Column>
            </Layer>
          </Row>
        </Slide>
      </MobileView>
    </>
  );
};
