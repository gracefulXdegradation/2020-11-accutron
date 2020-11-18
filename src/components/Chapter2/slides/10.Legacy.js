import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { Column, Layer, Row } from '../../UIKit';
import CollectionWatches4 from '../../../assets/Collection-Watches-4.png'
import CollectionWatches5 from '../../../assets/Collection-Watches-5.png'
import CollectionWatches6 from '../../../assets/Collection-Watches-6.png'
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';
import { Watches } from '../../Watches';

gsap.registerPlugin(ScrollTrigger);

export default function Legacy10({ index }) {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);

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
      <BrowserView style={{height: "200vh"}}>
        <Slide index={index} subslides={2} animate={animation}>
          <Row w="100%" h="100%" align="center" justify="space-around">
            <Column css={css`transform: translateX(${shift * 2 }%);`}>
              <Watches src={CollectionWatches4} large alt="Collection Watches 1" />
            </Column>
            <Column ref={img2Ref} css={css`opacity: 0;`}>
              <Watches src={CollectionWatches5} large alt="Collection Watches 2" />
            </Column>
            <Column ref={img3Ref} css={css`transform: translateX(${-shift * 2}%); opacity: 0;`}>
              <Watches src={CollectionWatches6} large alt="Collection Watches 3" />
            </Column>
          </Row>
        </Slide>
      </BrowserView>

      <MobileView style={{height: "300vh"}}>
        <Slide index={index} subslides={4} animate={animation}>
          <Column w="100%" h="100%">
            <Layer ref={img1Ref}>
              <Column w="100%" h="100%" align="center" justify="center">
                <Watches src={CollectionWatches4} alt="Collection Watches 1" />
              </Column>
            </Layer>
            <Layer ref={img2Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="center" justify="center">
                <Watches src={CollectionWatches5} alt="Collection Watches 2" />
              </Column>
            </Layer>
            <Layer ref={img3Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="center" justify="center">
                <Watches src={CollectionWatches6} alt="Collection Watches 3" />
              </Column>
            </Layer>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
