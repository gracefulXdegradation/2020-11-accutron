import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H3, H4 } from '../../styles/typography';
import { useNavBar } from '../../providers/NavBarProvider';
import { Circle, Layer, Divider, Row, Column, HoverableCircle } from '../UIKit';
import { useStoryState } from '../../providers/StoryStateProvider';
import { useChapterAnimation } from '../../providers/ChapterAnimationProvider';
import { zIndex } from '../../styles/const';

gsap.registerPlugin(ScrollTrigger);

export default function NavBar({ sliderRef }) {
  const { toChapter1, toChapter2 } = useChapterAnimation();
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
    <Layer ref={pinRef} fullScreen css={css`z-index: ${zIndex.navBar};`}>
      <BrowserView renderWithFragment>
        {/* <Layer fullScreen> */}
          <Column w="100%" h="100%">
            <Column align="center" css={css`flex: 1;`}>
              <Column align="center" css={css`margin-top: 32px;`}>
                <HoverableCircle size="m" ref={logoRef} onClick={toChapter2}>
                  <H4 css={css`margin-top: 20px;`}>Chapter 2</H4>
                </HoverableCircle>
              </Column>
              <H3 alternative>{slideHeading}</H3>
            </Column>

            <Row align="center" justify="space-between">
              <Divider length="90px" />
              <Column align="center" css={css`margin: 24px;`}>
                <HoverableCircle size="m" onClick={toChapter1} wrapChildren>
                  <H4>Chapter 1</H4>
                </HoverableCircle>
              </Column>
              <Column w="100%">
                <Divider />
              </Column>
              <Column align="center" css={css`margin: 24px;`}>
                <Circle size="m" logo />
              </Column>
              <Divider length="90px" />
            </Row>

            <Column align="center" css={css`flex: 1;`} />
          </Column>
        {/* </Layer> */}
      </BrowserView>

      <MobileView renderWithFragment>
        {/* <Layer> */}
          <Column w="100%" h="100%" justify="space-between">
            <Column align="center">
              <Divider vertical length="35px" />
              <H4 mobile css={css`margin: 12px 0; white-space: nowrap;`} onClick={toChapter1}>Chapter 1</H4>
              <Row align="center">
                <Divider />
                <Column css={css`margin: 0 30px;`} onClick={toChapter2}>
                  <Circle ref={logoRef} size="s" />
                </Column>
                <Divider />
              </Row>
              <H4 mobile css={css`margin: 12px 0; white-space: nowrap;`} onClick={toChapter2}>Chapter 2</H4>
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
        {/* </Layer> */}
      </MobileView>
    </Layer>
  );
};