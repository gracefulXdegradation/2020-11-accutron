import React, { useCallback, useEffect, useRef, useState } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import ReactVisibilitySensor from 'react-visibility-sensor';
import { gsap, ScrollTrigger } from 'gsap/all';
import { H2, H3, H4 } from '../../styles/typography';
import { Column, Divider, Circle, Row, BackgroundImage, Layer } from '../UIKit';
import data from '../../data/story';

gsap.registerPlugin(ScrollTrigger);

const d = data.chapters[1].opening
const BgImage = d.images[0].src

export default function ChapterHead({ onAnimateEnd = () => null }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dividerRef = useRef(null)
  const divider2MobRef = useRef(null)
  const circleRef = useRef(null)

  const onAppear = isVisible => {
    setIsVisible(isVisible)
    animate()
  }

  const animate = useCallback(() => {
    if (isVisible && !hasAnimated && dividerRef.current && circleRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          setHasAnimated(true)
          onAnimateEnd()
        }
      })
        .to(circleRef.current, {
          opacity: 1,
          duration: .8,
          delay: .5,
          ease: 'easeIn'
        })
        .to(dividerRef.current, Object.assign({
          duration: 1,
          ease: 'none',
        }, isMobile ? {height: '100%'} : {width: '100%'}))

      isMobile && tl.to(divider2MobRef.current, {
        duration: 1,
        ease: 'none',
        height: '100%'
      })
    }
  }, [hasAnimated, isVisible, onAnimateEnd])

  useEffect(() => animate(), [animate])

  return (
    <>
      <BrowserView renderWithFragment>
        <Layer top="0" css={css`opacity: .5;`}>
          <BackgroundImage position="right center" src={BgImage} />
        </Layer>
        <Column h="100%" w="100%" align="center" justify="center">
          <Row css={css`flex: 1;`} justify="center" align="flex-end">
            <ReactVisibilitySensor
              partialVisibility={true}
              minTopValue={300}
              onChange={onAppear}
            >
              <Column ref={circleRef} align="center" css={css`margin-bottom: 12px; opacity: 0;`}>
                <Circle size="xl" rotation={90} />
                <H4 css={css`white-space: nowrap;`}>Chapter 2</H4>
              </Column>
            </ReactVisibilitySensor>
          </Row>
          <Row>
            <Divider ref={dividerRef} length={`0%`} />
          </Row>
          <Row css={css`flex: 1;`} justify="center" align="flex-start">
            <H2 align="center" css={css`margin-top: 40px;`} alternative>
              {d.copy[0].text}
            </H2>
          </Row>
        </Column>
      </BrowserView>

      <MobileView renderWithFragment>
        <Layer top="0" css={css`opacity: .5;`}>
          <BackgroundImage position="center" src={BgImage} />
        </Layer>
        <Column h="100vh" w="100%">
          <Column h="50%" w="100%" align="center" justify="flex-end">
            <Column css={css`flex: 1;`}>
              <Divider vertical length={`0`} ref={dividerRef} />
            </Column>
            <ReactVisibilitySensor
              partialVisibility={true}
              minTopValue={300}
              onChange={onAppear}
            >
              <Column ref={circleRef} align="center" css={css`padding-top: 20px; opacity: 0;`}>
                <Circle size="xl" rotation={90} />
              </Column>
            </ReactVisibilitySensor>
          </Column>

          <Column h="50%" w="100%" align="center" justify="flex-start">
            <Column align="center">
              <Row justify="center">
                <H4 css={css`white-space: nowrap;`}>Chapter 2</H4>
              </Row>
              <Row justify="center" css={css`margin-top: 12px;`}>
                <H3 alternative mobile align="center" css={css`padding: 8px 16px;`}>
                  {d.copy[0].text}
                </H3>
              </Row>
            </Column>
            <Column css={css`flex: 1;`}>
              <Divider vertical length={`0`} ref={divider2MobRef} />
            </Column>
          </Column>
        </Column>
      </MobileView>
    </>
  );
}
