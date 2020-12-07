import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { css } from '@emotion/core';
import { isBrowser, isMobile, withOrientationChange } from "react-device-detect";
import { H2, H3, H4 } from '../../styles/typography';
import { useNavBar } from '../../providers/NavBarProvider';
import { Circle, Layer, Divider, Row, Column, Block, HoverableCircle } from '../UIKit';
import { useStoryState } from '../../providers/StoryStateProvider';
import { useChapterAnimation } from '../../providers/ChapterAnimationProvider';

gsap.registerPlugin(ScrollTrigger);

function NavBar({ sliderRef, isLandscape, isPortrait }) {
  const { toChapter1, toChapter2 } = useChapterAnimation();
  const { slideHeading } = useNavBar();
  const { hasChapterInit } = useStoryState();
  const pinRef = useRef(null);
  const logoRef = useRef(null);
  const dividerContainerRef = useRef(null);

  useEffect(() => {
    if (hasChapterInit) {
      const tl = gsap.timeline()
        .to(logoRef.current, {
          rotation: 90,
          duration: 1,
          ease: 'none',
        })

      const st = ScrollTrigger.create({
        id: 'NavBarST',
        animation: tl,
        trigger: sliderRef.current,
        pin: pinRef.current,
        scrub: true,
        start: 'top top',
        end:'bottom bottom',
      })

      return () => {
        tl.kill()
        st.kill()
      }
    }
  }, [sliderRef, hasChapterInit])

  return (
    <Layer ref={pinRef} fullScreen>
      {isBrowser && (
        <Layer>
          <Column h="100%" w="100%" justify="space-between" align="center">
            <Column align="center" css={css`padding: 50px 0 20px;`}>
              <HoverableCircle size="m" ref={logoRef} onClick={toChapter1}>
                <H4 css={css`white-space: nowrap;`}>Chapter 1</H4>
              </HoverableCircle>
            </Column>
            <Divider length="auto" vertical css={css`flex: 1;`} />
            <H3 tertiary css={css`margin-top: 8px;`}>{slideHeading}</H3>
            <Divider length="auto" vertical css={css`flex: 1;`} />
            <Column align="center" css={css`padding: 30px 0 50px;`}>
              <HoverableCircle size="m" rotation={90} onClick={toChapter2}>
                <H4 css={css`white-space: nowrap;`}>Chapter 2</H4>
              </HoverableCircle>
            </Column>
          </Column>
        </Layer>
      )}

      {isMobile && isPortrait && (
        <Layer>
          <Column w="100%" h="100%">
            <Column align="center" css={css`padding-bottom: 10px;`} onClick={toChapter1}>
              <Block css={css`padding-top: 50px;`}>
                <Circle ref={logoRef} size="m" />
                <Layer top="0">
                  <Row h="100%" justify="center">
                    <Divider vertical length="35px" />
                  </Row>
                </Layer>
              </Block>
              <H4 alternative mobile css={css`white-space: nowrap;`}>Chapter 1</H4>
              <H3 tertiary css={css`white-space: nowrap;`}>{slideHeading}</H3>
            </Column>
            <Column ref={dividerContainerRef} align="flex-end" css={css`flex: 1;`} w="35px">
              <Divider vertical />
            </Column>
            <Row justify="center">
              <H4 mobile css={css`margin: 25px 0 29px; white-space: nowrap;`} onClick={toChapter2}>Chapter 2</H4>
            </Row>
          </Column>
        </Layer>
      )}

    {isMobile && isLandscape && (
        <Layer>
          <Column h="100%" w="100%" justify="space-between" align="center">
            <Column align="center" css={css`padding: 10px 0;`}>
              <HoverableCircle size="l" ref={logoRef} onClick={toChapter1}>
                <H4 mobile css={css`white-space: nowrap;`}>Chapter 1</H4>
              </HoverableCircle>
            </Column>
            <Divider vertical />
            <H4 mobile tertiary>{slideHeading}</H4>
            <Divider vertical />
            <Column align="center" css={css`padding: 10px 0;`}>
              <H4 mobile onClick={toChapter2} css={css`white-space: nowrap;`}>Chapter 2</H4>
            </Column>
          </Column>
        </Layer>
      )}
    </Layer>
  );
};

export default withOrientationChange(NavBar)
