import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';
import { Watches } from '../../Watches';
import data from '../../../data/story';

const d = data.chapters[1].slides[8]

gsap.registerPlugin(ScrollTrigger);

export default function Legacy9({ index }) {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);

  const animation = (el, props) => {
    const isMobile = !!img1Ref.current

    const tl = gsap.timeline({
      scrollTrigger:{
        ...props,
        trigger: el,
        pin: el,
        pinSpacing: false,
        scrub: true,
      }
    })
    .to(el, {
      opacity: 1,
      duration: 1,
      ease: 'none',
    })

    if (isMobile) {
      tl.to(img1Ref.current, {
        opacity: 0,
        duration: 1,
        delay: .5,
        ease: 'none',
      })
    }

    tl.to(img2Ref.current, {
      opacity: 1,
      duration: 1,
      ease: 'none',
    })

    if (isMobile) {
      tl.to(img2Ref.current, {
        opacity: 0,
        duration: 1,
        delay: .5,
        ease: 'none',
      })
    }

    tl.to(img3Ref.current, {
      opacity: 1,
      duration: 1,
      ease: 'none',
    })

    if (isMobile) {
      tl.to(img3Ref.current, {
        opacity: 0,
        duration: 1,
        delay: .5,
        ease: 'none',
      })
    }

    tl.to(img4Ref.current, {
      opacity: 1,
      duration: 1,
      ease: 'none',
    })

    .to(el, {
      opacity: 0,
      duration: 1,
      delay: .5,
      ease: 'none',
    })

    return tl;
  }

  const shift = 16
  
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} subslides={2.5} animate={animation}>
          <Row w="100%" h="100%" align="center" justify="space-around">
            <Column css={css`transform: translateX(${shift * 3 }%);`}>
              <Watches {...d.images[0]} large />
            </Column>
            <Column ref={img2Ref} css={css`transform: translateX(${shift}%); opacity: 0;`}>
              <Watches {...d.images[1]} large />
            </Column>
            <Column ref={img3Ref} css={css`transform: translateX(${-shift}%); opacity: 0;`}>
              <Watches {...d.images[2]} large />
            </Column>
            <Column ref={img4Ref} css={css`transform: translateX(${-shift * 3}%); opacity: 0;`}>
              <Watches {...d.images[3]} large />
            </Column>
          </Row>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} subslides={4} animate={animation}>
          <Column w="100%" h="100%">
            <Layer ref={img1Ref}>
              <Column w="100%" h="100%" align="center" justify="center">
                <Watches {...d.images[0]} />
              </Column>
            </Layer>
            <Layer ref={img2Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="center" justify="center">
                <Watches {...d.images[1]} />
              </Column>
            </Layer>
            <Layer ref={img3Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="center" justify="center">
                <Watches {...d.images[2]} />
              </Column>
            </Layer>
            <Layer ref={img4Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="center" justify="center">
                <Watches {...d.images[3]} />
              </Column>
            </Layer>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
