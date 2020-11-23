import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';
import { Watches } from '../../Watches';
import data from '../../../data/story';

const d = data.chapters[1].slides[10]

gsap.registerPlugin(ScrollTrigger);

const watches = d.images

const mid = Math.ceil(watches.length / 2) - 1

export default function Legacy11({ index }) {
  const layer1Ref = useRef(null)
  const layer2Ref = useRef(null)
  const pRef = useRef(null)

  const animation = (el, props) => {

    const tl = gsap.timeline({
      scrollTrigger:{
        ...props,
        trigger: el,
        pin: el,
        pinSpacing: false,
        scrub: true,
        start: 'top top',
        end: 'bottom bottom',
      }
    })
    tl.to(el, {
      opacity: 1,
      duration: 1,
      ease: 'none',
    })

    if (layer1Ref.current) {
      tl.to(layer1Ref.current, {
        opacity: 0,
        duration: 1,
        delay: .5,
        ease: 'none',
      })
    }

    if (layer2Ref.current) {
      tl.to(layer2Ref.current, {
        opacity: 1,
        duration: 1,
        ease: 'none',
      })
      tl.to(pRef.current, {
        opacity: 1,
        duration: 1,
        ease: 'none',
      })
    }

    return tl;
  }

  const shift = 12

  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} subslides={2} animate={animation}>
          <Row w="100%" h="100%" align="center" justify="space-around">
            {watches.map((img, i) => (
              <Column key={img.src} css={css`transform: translateX(${(mid - i) * 2 * shift}%);`}>
                <Watches {...img} />
              </Column>
            ))}
            <Layer>
              <Column w="100%" h="100%">
                <Row h="50%" align="center" justify="center">
                  <H4 tertiary>
                    {d.copy[0].text}
                  </H4>
                </Row>
                <Row h="50%" align="center" justify="center">
                  <P css={css`text-align: center; max-width: 350px;`}>
                    {d.copy[1].text}
                  </P>
                </Row>
              </Column>
            </Layer>
          </Row>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} subslides={2} animate={animation}>
        <Column w="100%" h="100%">
          <Column ref={layer1Ref} w="100%" h="100%" align="center" justify="center">
            <H4 tertiary align="center" mobile css={css`margin: 35px;`}>
              {d.copy[0].text}
            </H4>
          </Column>

          <Layer ref={layer2Ref} css={css`opacity: 0;`}>
            <Column w="100%" h="100%">
              <Row h="50%" w="100%" justify="space-around" align="flex-end">
                {[...watches.slice(0, 3), ...watches.slice(6)].map((img, i) => (
                  <Column key={`${img.src}${i}`}>
                    <Watches {...img} css={css`height: 165px;`} />
                  </Column>
                ))}
              </Row>
              <Row h="50%" w="100%" justify="space-around" align="flex-start">
              {watches.slice(3, 6).map((img, i) => (
                <Column key={`${img.src}${i}`}>
                  <Watches {...img} css={css`height: 165px;`} />
                </Column>
              ))}
              </Row>
              
              <Layer ref={pRef} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="center" justify="flex-end">
                  <P mobile css={css`text-align: center; margin: 30px;`}>
                    {d.copy[1].text}
                  </P>
                </Column>
              </Layer>
            </Column>
          </Layer>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
