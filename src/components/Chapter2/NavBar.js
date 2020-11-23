import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H3, H4 } from '../../styles/typography';
import { useNavBar } from '../../providers/NavBarProvider';
import { Circle, Layer, Divider, Row, Column, ChapterCaption } from '../UIKit';
import { useStoryState } from '../../providers/StoryStateProvider';

gsap.registerPlugin(ScrollTrigger);

export default function NavBar({ sliderRef }) {
  const { slideHeading } = useNavBar();
  const { hasChapterInit } = useStoryState();
  const pinRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    if (hasChapterInit) {
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger: sliderRef.current,
          pin: pinRef.current,
          scrub: true,
          start: 'top top',
          end:'bottom bottom',
        }
      })
      .to(logoRef.current, {
        rotation: 90,
        duration: 1,
        ease: 'none',
      })

      return () => tl.kill()
    }
  }, [sliderRef, hasChapterInit])

  return (
    <Layer ref={pinRef} fullScreen css={css`pointer-events: none;`}>
      <BrowserView>
        <Layer>
          <Column align="center">
            <Column align="center" css={css`margin-top: 32px;`}>
              <Circle ref={logoRef} size="m" />
              <H4 css={css`margin-top: 20px;`}>Chapter 2</H4>
            </Column>
            <H3 alternative>{slideHeading}</H3>
          </Column>
        </Layer>
        <Layer fullScreen>
          <Row h="100%" align="center" justify="space-between">
            <Divider length="90px" />
            <Column align="center" css={css`margin: 24px;`}>
              <Circle size="m" />
              <ChapterCaption>
                <H4>Chapter 1</H4>
              </ChapterCaption>
            </Column>
            <Divider />
            <Column align="center" css={css`margin: 24px;`}>
              <Circle size="m" logo />
            </Column>
            <Divider length="90px" />
          </Row>
        </Layer>
      </BrowserView>

      <MobileView>
        <Layer>
          <Column w="100%" h="100%" justify="space-between">
            <Column align="center">
              <Divider vertical length="35px" />
              <H4 mobile css={css`margin: 12px 0; white-space: nowrap;`}>Chapter 1</H4>
              <Row align="center">
                <Divider />
                <Column css={css`margin: 0 30px;`}>
                  <Circle ref={logoRef} size="s" />
                </Column>
                <Divider />
              </Row>
              <H4 mobile css={css`margin: 12px 0; white-space: nowrap;`}>Chapter 2</H4>
              <H3 alternative css={css`font-size: 35px; line-height: 40px; white-space: nowrap;`}>{slideHeading}</H3>
            </Column>
            <Row align="center" css={css`margin: 12px 0 16px;`}>
              <Row />
              <Column align="center" css={css`padding: 0 16px;`}>
                <Circle size="s" logo />
              </Column>
              <Divider />
            </Row>
          </Column>
        </Layer>
      </MobileView>
    </Layer>
  );
};