import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { Column, Layer, Row } from '../../UIKit';
import CollectionWatches1 from '../../../assets/Collection-Watches-1.png'
import CollectionWatches2 from '../../../assets/Collection-Watches-2.png'
import CollectionWatches3 from '../../../assets/Collection-Watches-3.png'
import CollectionWatches7 from '../../../assets/Collection-Watches-7.png'
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';
import { Watches } from '../../Watches';

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
      <BrowserView style={{height: "250vh"}}>
        <Slide index={index} subslides={2.5} animate={animation}>
          <Row w="100%" h="100%" align="center" justify="space-around">
            <Column css={css`transform: translateX(${shift * 3 }%);`}>
              <Watches src={CollectionWatches1} large alt="Collection Watches 1" />
            </Column>
            <Column ref={img2Ref} css={css`transform: translateX(${shift}%); opacity: 0;`}>
              <Watches src={CollectionWatches2} large alt="Collection Watches 2" />
            </Column>
            <Column ref={img3Ref} css={css`transform: translateX(${-shift}%); opacity: 0;`}>
              <Watches src={CollectionWatches3} large alt="Collection Watches 3" />
            </Column>
            <Column ref={img4Ref} css={css`transform: translateX(${-shift * 3}%); opacity: 0;`}>
              <Watches src={CollectionWatches7} large alt="Collection Watches 7" />
            </Column>
          </Row>
        </Slide>
      </BrowserView>

      <MobileView style={{height: "400vh"}}>
        <Slide index={index} subslides={4} animate={animation}>
          <Column w="100%" h="100%">
            <Layer ref={img1Ref}>
              <Column w="100%" h="100%" align="center" justify="center">
                <Watches src={CollectionWatches1} alt="Collection Watches 1" />
              </Column>
            </Layer>
            <Layer ref={img2Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="center" justify="center">
                <Watches src={CollectionWatches2} alt="Collection Watches 2" />
              </Column>
            </Layer>
            <Layer ref={img3Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="center" justify="center">
                <Watches src={CollectionWatches3} alt="Collection Watches 3" />
              </Column>
            </Layer>
            <Layer ref={img4Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="center" justify="center">
                <Watches src={CollectionWatches7} alt="Collection Watches 7" />
              </Column>
            </Layer>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
