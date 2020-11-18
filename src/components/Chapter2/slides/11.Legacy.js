import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H2, H4, P } from '../../../styles/typography';
import CollectionWatches1 from '../../../assets/Collection-Watches-1.png'
import CollectionWatches2 from '../../../assets/Collection-Watches-2.png'
import CollectionWatches3 from '../../../assets/Collection-Watches-3.png'
import CollectionWatches4 from '../../../assets/Collection-Watches-4.png'
import CollectionWatches5 from '../../../assets/Collection-Watches-5.png'
import CollectionWatches6 from '../../../assets/Collection-Watches-6.png'
import CollectionWatches7 from '../../../assets/Collection-Watches-3.png'
import { Column, Layer, RightHalf, Row, SlideImage } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';
import { Watches } from '../../Watches';

gsap.registerPlugin(ScrollTrigger);

const watches = [
  CollectionWatches1,
  CollectionWatches2,
  CollectionWatches3,
  CollectionWatches4,
  CollectionWatches5,
  CollectionWatches6,
  CollectionWatches7,
]

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
      <BrowserView style={{height: "200vh"}}>
        <Slide index={index} subslides={2} animate={animation}>
          <Row w="100%" h="100%" align="center" justify="space-around">
            {watches.map((img, i) => (
              <Column key={img} css={css`transform: translateX(${(mid - i) * 2 * shift}%);`}>
                <Watches src={img} alt={img} />
              </Column>
            ))}
            <Layer>
              <Column w="100%" h="100%">
                <Row h="50%" align="center" justify="center">
                  <H4>
                    each style only has 600 individually numbered pieces
                  </H4>
                </Row>
                <Row h="50%" align="center" justify="center">
                  <P css={css`text-align: center; max-width: 350px;`}>
                  The Legacy collection ranges between $1,290-$1,550. 
                  </P>
                </Row>
              </Column>
            </Layer>
          </Row>
        </Slide>
      </BrowserView>

      <MobileView style={{height: "200vh"}}>
        <Slide index={index} subslides={2} animate={animation}>
        <Column w="100%" h="100%">
          <Column ref={layer1Ref} w="100%" h="100%" align="center" justify="center">
            <H4 align="center" mobile css={css`margin: 35px;`}>
              each style only has 600 individually numbered pieces
            </H4>
          </Column>

          <Layer ref={layer2Ref} css={css`opacity: 0;`}>
            <Column w="100%" h="100%">
              <Row h="50%" w="100%" justify="space-around" align="flex-end">
                {[...watches.slice(0, 3), ...watches.slice(6)].map((img) => (
                  <Column key={img}>
                    <Watches src={img} alt={img} css={css`height: 165px;`} />
                  </Column>
                ))}
              </Row>
              <Row h="50%" w="100%" justify="space-around" align="flex-start">
              {watches.slice(3, 6).map((img) => (
                <Column key={img}>
                  <Watches src={img} alt={img} css={css`height: 165px;`} />
                </Column>
              ))}
              </Row>
              
              <Layer ref={pRef} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="center" justify="flex-end">
                  <P mobile css={css`text-align: center; margin: 30px;`}>
                  The Legacy collection ranges between $1,290-$1,550.
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
