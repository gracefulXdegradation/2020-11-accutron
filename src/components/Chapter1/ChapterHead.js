import React, { useCallback, useEffect, useRef, useState } from 'react';
import { css } from '@emotion/core';
import { gsap } from 'gsap/all';
import { isBrowser, isMobile, withOrientationChange } from "react-device-detect";
import ReactVisibilitySensor from 'react-visibility-sensor';
import { H2, H4, P } from '../../styles/typography';
import { Circle, Divider, Layer, Block, Row, Column, Camouflage, Background } from '../UIKit';
import data from '../../data/story';

const d = data.chapters[0].opening

function ChapterHead({ onAnimateEnd, isLandscape, isPortrait }) {
  const mobChapterCaptionRef = useRef(null)
  const mobPaddingTop = useRef(null)

  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dividerRef = useRef(null)
  const camouflageRef = useRef(null)
  const hRef = useRef(null)
  const pRef = useRef(null)

  useEffect(() => {
    if (mobChapterCaptionRef.current) {
      mobPaddingTop.current = mobChapterCaptionRef.current.getBoundingClientRect().height * 2;
    }
  }, [])

  const onAppear = isVisible => {
    setIsVisible(isVisible)
    animate()
  }

  const animate = useCallback(() => {
    if (isVisible && !hasAnimated && dividerRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          setHasAnimated(true)
          onAnimateEnd()
        }
      })
        .to(hRef.current, {
          duration: 1,
          opacity: 1,
          ease: 'ease-in'
        })
        
        if (pRef.current) {
          tl.to(pRef.current, {
            duration: 1.5,
            opacity: 1,
            ease: 'ease-in'
          })
        }
        
        tl.to(dividerRef.current, {
          duration: 2,
          ease: 'none',
          height: '100%'
        })
        .to(camouflageRef.current, {
          duration: .5,
          delay: -1.5,
          ease: 'none',
          height: 0
        })
    }
  }, [hasAnimated, isVisible, onAnimateEnd])

  useEffect(() => animate(), [animate])

  return (
    <Background css={css`height: 100vh;`}>
      {isBrowser && (
        <Column h="100vh" w="100%" align="center" justify="center">
          <Layer>
              <Row h="100%" justify="center">
                <Divider ref={dividerRef} vertical length="0" />
              </Row>
          </Layer>
          
          <Layer>
            <Column w="100%" h="100%">
              <Column w="100%" h="50%" justify="flex-end" align="center">
                <ReactVisibilitySensor
                  partialVisibility={true}
                  minTopValue={300}
                  onChange={onAppear}
                >
                  <Column align="center" css={css`padding: 32px 0 12px;`}>
                    <Camouflage />
                    <Circle size="xl" />
                    <H4>Chapter 1</H4>
                    <Layer top="0">
                      <Row justify="center" h="100%">
                        <Divider ref={camouflageRef} vertical camouflage css={css`max-width: 100%; width: 100%; height: 100%;`} />
                      </Row>
                    </Layer>
                  </Column>
                </ReactVisibilitySensor>
              </Column>
              <Column w="100%" h="50%" align="center">
                <Block css={css`margin-top: 28px;`}>
                  <Camouflage />
                  <H2 ref={hRef} align="center" css={css`padding: 12px 0 6px; opacity: 0;`}>
                    {d.copy[0].text}
                  </H2>
                </Block>
                <Column justify="center" align="center" css={css`flex: 1;`}>
                  <Block css={css`padding: 14px 0 6px;`}>
                    <Camouflage w="100%" />
                    <P ref={pRef} css={css`text-align: center; position: relative; opacity: 0;`}>
                      {d.copy[1].text}
                    </P>
                  </Block>
                </Column>
              </Column>
            </Column>
          </Layer>
        </Column>
      )}

      {isMobile && isPortrait && (
        <Column h="100vh" w="100%" align="center" justify="center">
          <Layer>
              <Row h="100%" justify="center">
                <Divider ref={dividerRef} vertical length="0" />
              </Row>
          </Layer>

          <Layer>
            <Column w="100%" h="100%" css={css`padding-top: ${mobPaddingTop.current}px;`}>
              <Column w="100%" h="50%" justify="flex-end" align="center"> 
                <ReactVisibilitySensor
                  partialVisibility={true}
                  minTopValue={300}
                  onChange={onAppear}
                >
                  <Column align="center" css={css`padding-top: 32px;`}>
                    <Camouflage />
                    <Circle size="xl" />
                    <Block ref={mobChapterCaptionRef}>
                      <H4 css={css`margin-bottom: 12px;`}>Chapter 1</H4>
                    </Block>
                    <Layer top="0">
                      <Row justify="center" h="100%">
                        <Divider ref={camouflageRef} vertical camouflage css={css`max-width: 100%; width: 100%; height: 100%;`} />
                      </Row>
                    </Layer>
                  </Column>
                </ReactVisibilitySensor>
              </Column>

              <Column w="100%" h="50%" align="center">
                <Block css={css`margin-top: 28px;`}>
                  <Camouflage />
                  <H2 ref={hRef} mobile css={css`padding: 12px 0 6px; opacity: 0;`} align="center">
                    {d.copy[0].text}
                  </H2>
                </Block>
              </Column>
            </Column>
          </Layer>
        </Column>
      )}

      {isMobile && isLandscape && (
        <Column h="100vh" w="100%" align="center" justify="center">
          <Layer>
            <Row h="100%" justify="center">
              <Divider ref={dividerRef} vertical length="0" />
            </Row>
          </Layer>
          
          <Layer>
            <Column w="100%" h="100%">
              <Column w="100%" h="50%" justify="flex-end" align="center">
                <ReactVisibilitySensor
                  partialVisibility={true}
                  minTopValue={300}
                  onChange={onAppear}
                >
                  <Column align="center" css={css`padding: 32px 0 12px;`}>
                    <Camouflage />
                    <Circle size="l" />
                    <H4 mobile>Chapter 1</H4>
                    <Layer top="0">
                      <Row justify="center" h="100%">
                        <Divider ref={camouflageRef} vertical camouflage css={css`max-width: 100%; width: 100%; height: 100%;`} />
                      </Row>
                    </Layer>
                  </Column>
                </ReactVisibilitySensor>
              </Column>
              <Column w="100%" h="50%" align="center">
                <Block css={css`margin-top: 28px;`}>
                  <Camouflage />
                  <H2 ref={hRef} mobile align="center" css={css`padding: 12px 0 6px; opacity: 0;`}>
                    {d.copy[0].text}
                  </H2>
                </Block>
                <Column justify="center" align="center" css={css`flex: 1;`}>
                  <Block css={css`padding: 14px 0 6px;`}>
                    <Camouflage w="100%" />
                    <P ref={pRef} mobile css={css`text-align: center; position: relative; opacity: 0;`}>
                      {d.copy[1].text}
                    </P>
                  </Block>
                </Column>
              </Column>
            </Column>
          </Layer>
        </Column>
      )}
    </Background>
  )
}

export default withOrientationChange(ChapterHead)
