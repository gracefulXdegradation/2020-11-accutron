import { css } from '@emotion/core';
import React, { useEffect, useRef } from 'react';
import { isBrowser, isMobile, withOrientationChange } from "react-device-detect";
import styled from '@emotion/styled';
import { gsap, ScrollTrigger } from 'gsap/all';
import { H2, H4, P } from "../../styles/typography";
import { Block, ChapterCaption, Circle, Column, Divider, HoverableCircle, Layer, Row } from "../UIKit";
import { useStoryState } from '../../providers/StoryStateProvider';
import data from '../../data/story';
import { useChapterAnimation } from '../../providers/ChapterAnimationProvider';

const d = data.chapters[0].ending

gsap.registerPlugin(ScrollTrigger);

const Image = styled.img`
  object-fit: contain;
  object-position: right;
  height: 80% !important;
  pointer-events: none;
  position: absolute;
  bottom: 0;
  right: 0;
`;

function Ending({ isPortrait, isLandscape }) {
  const { toChapter1, toChapter2 } = useChapterAnimation();
  const { hasChapterInit } = useStoryState();
  const rootRef = useRef(null)
  const topDivRef = useRef(null)
  const leftDivRef = useRef(null)
  const rightDivRef = useRef(null)
  const chap2Ref = useRef(null)
  const mobSlide1Ref = useRef(null)
  const mobSlide2Ref = useRef(null)

  useEffect(() => {
    if (!hasChapterInit) return;

    if (isBrowser || (isMobile && isLandscape)) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top center',
          end: 'bottom bottom',
          scrub: true,
          snap: 'labels'
        },
      })
      .to(topDivRef.current, {
        height: '100%',
        duration: 1,
        delay: .5,
        ease: 'none'
      })
      .to([leftDivRef.current, rightDivRef.current], {
        width: '100%',
        duration: 1,
        delay: -1,
        ease: 'none'
      })
      .to(chap2Ref.current, {
        opacity: 1,
        duration: .5,
        delay: 0.5,
        ease: 'easeIn'
      })
      .addLabel('bottom')

      return () => tl.kill()
    } else {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          pin: true,
          pinSpacing: false,
          scrub: true,
          start: 'top top',
          end: 'bottom bottom',
        }
      })
      .to(mobSlide1Ref.current, {
        opacity: 0,
        duration: 1/2,
        delay: 1/4,
        ease: 'none'
      })
      .to(mobSlide2Ref.current, {
        opacity: 1,
        duration: 1/2,
        ease: 'none'
      })

      return () => tl.kill()
    }
  }, [hasChapterInit, isLandscape])

  return (
    <>
      {isBrowser && (
        <Column ref={rootRef} h="100vh" w="100%" align="center" justify="space-between">
          <Column css={css`flex: 1;`} align="center">
            <Column align="center" css={css`padding: 50px 0 20px;`}>
              <HoverableCircle size="m" onClick={toChapter1}>
                <H4 css={css`margin-top: 20px;`}>Chapter 1</H4>
              </HoverableCircle>
            </Column>
            <Column css={css`flex: 1;`}>
              <Divider ref={topDivRef} vertical length="0" />
            </Column>
          </Column>
          <Row align="center">
            <Row css={css`flex: 1;`}>
              <Divider ref={leftDivRef} length="0" />
            </Row>
            <Column ref={chap2Ref} align="center" css={css`margin: 24px; z-index: 3; opacity: 0;`}>
              <HoverableCircle size="xl" wrapChildren onClick={toChapter2}>
                <H4>Chapter 2</H4>
              </HoverableCircle>
            </Column>
            <Row css={css`flex-direction: row-reverse; flex: 1;`}>
              <Divider ref={rightDivRef} length="0" />
            </Row>
          </Row>
          <Image {...d.images[0]} />
          <Column css={css`flex: 1;`} justify="center" align="center">
            <P css={css`margin-bottom: 16px;`}>
              {d.copy[0].text}
            </P>
            <H2 alternative>
            {d.copy[1].text}
            </H2>
          </Column>
        </Column>
      )}

      {isMobile && isPortrait && (
        <Column ref={rootRef} w="100%" h="200vh">
          <Column w="100%" h="100vh">
            <Column align="center" css={css`padding-bottom: 20px;`}>
              <Block css={css`padding-top: 50px;`} onClick={toChapter1}>
                <Circle size="s" />
                <Layer top="0">
                  <Row h="100%" justify="center">
                    <Divider vertical length="35px" />
                  </Row>
                </Layer>
              </Block>
              <H4 alternative mobile css={css`margin: 12px 0; white-space: nowrap;`}>Chapter 1</H4>
            </Column>
            <Column css={css`flex: 1;`}>
              <Layer ref={mobSlide1Ref}>
                <P mobile css={css`margin: 0 50px;`}>
                {d.copy[0].text}
                </P>
                <Image {...d.images[0]} />
              </Layer>
              <Layer ref={mobSlide2Ref} css={css`opacity: 0;`}>
                <H2 mobile alternative align="center" css={css`margin: 0 60px;`}>
                {d.copy[1].text}
                </H2>

                <Row align="center">
                  <Divider css={css`opacity: 0;`} />
                  <Column ref={chap2Ref} align="center" css={css`cursor: pointer; margin: 24px;`} onClick={toChapter2}>
                    <Circle size="xl" rotation="90" />
                    <ChapterCaption>
                      <H4>Chapter 2</H4>
                    </ChapterCaption>
                  </Column>
                  <Divider />
                </Row>
              </Layer>
            </Column>
          </Column>
        </Column>
      )}

      {isMobile && isLandscape && (
        <Column ref={rootRef} h="100vh" w="100%" align="center" justify="space-between">
          <Column css={css`flex: 1;`} align="center">
            <Column align="center" css={css`padding: 20px 0;`}>
              <H4 mobile onClick={toChapter1}>Chapter 1</H4>
            </Column>
            <Column css={css`flex: 1;`}>
              <Divider ref={topDivRef} vertical length="0" />
            </Column>
          </Column>
          <Row align="center">
            <Row css={css`flex: 1;`}>
              <Divider ref={leftDivRef} length="0" />
            </Row>
            <Column ref={chap2Ref} align="center" css={css`margin: 24px; z-index: 1; opacity: 0; transition: opacity .8s ease-in; transition-delay: .2s;`}>
              <HoverableCircle size="m" wrapChildren onClick={toChapter2}>
                <H4 mobile>Chapter 2</H4>
              </HoverableCircle>
            </Column>
            <Row css={css`flex-direction: row-reverse; flex: 1;`}>
              <Divider ref={rightDivRef} length="0" />
            </Row>
          </Row>
          <Image {...d.images[0]} />
          <Column css={css`flex: 1;`} justify="center" align="center">
            <P mobile css={css`margin-bottom: 16px;`}>
              {d.copy[0].text}
            </P>
            <H4 mobile alternative>
            {d.copy[1].text}
            </H4>
          </Column>
        </Column>
      )}
    </>
  )
}

export default withOrientationChange(Ending)
