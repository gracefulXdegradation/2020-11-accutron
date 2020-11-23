import React, { useCallback, useEffect, useRef, useState } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import ReactVisibilitySensor from 'react-visibility-sensor';
import { gsap } from 'gsap/all';
import { H2, H4 } from '../../styles/typography';
import { Column, Divider, Circle, Row, Layer, Camouflage } from '../UIKit';
import data from '../../data/story';

const d = data.chapters[1].opening

export default function ChapterHead({ onAnimateEnd = () => null }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dividerRef = useRef(null)
  const circleRef = useRef(null)

  const onAppear = isVisible => {
    setIsVisible(isVisible)
    animate()
  }

  const animate = useCallback(() => {
    if (isVisible && !hasAnimated && dividerRef.current && circleRef.current) {
      gsap.timeline({
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
    }
  }, [hasAnimated, isVisible, onAnimateEnd])

  useEffect(() => animate(), [animate])

  return (
    <>
      <BrowserView renderWithFragment>
        <Column h="100%" w="100%" align="center" justify="center">
          <Row css={css`flex: 1;`} justify="center" align="flex-end">
            <ReactVisibilitySensor
              partialVisibility={true}
              minTopValue={300}
              onChange={onAppear}
            >
              <Column ref={circleRef} align="center" css={css`margin-bottom: 12px; opacity: 0;`}>
                <Circle size="xl" rotation={90} />
                <H4 css={css`margin-top: 20px;`}>Chapter 2</H4>
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
        <Column h="100vh" w="100%">
          <Layer>
            <Column w="100%" h="100%" align="center">
              <Divider ref={dividerRef} vertical length={`0`} />
            </Column>
          </Layer>

          <Row h="50%" justify="center" align="flex-end">
            <ReactVisibilitySensor
              partialVisibility={true}
              minTopValue={300}
              onChange={onAppear}
            >
              <Column ref={circleRef} align="center" css={css`padding-top: 12px; opacity: 0;`}>
                <Camouflage />
                <Circle size="xl" rotation={90} />
              </Column>
            </ReactVisibilitySensor>
          </Row>

          <Row h="50%" justify="center" align="flex-start">
            <Column align="center">
              <Row justify="center">
                <Camouflage />
                <H4 css={css`padding-top: 20px;`}>Chapter 2</H4>
              </Row>
              <Row justify="center" css={css`margin-top: 12px;`}>
                <Camouflage />
                <H2 alternative mobile css={css`padding-top: 8px;`}>
                  {d.copy[0].text}
                </H2>
              </Row>
            </Column>
          </Row>
        </Column>
      </MobileView>
    </>
  );
}
