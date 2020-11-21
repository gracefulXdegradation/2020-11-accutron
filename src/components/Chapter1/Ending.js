import { css } from '@emotion/core';
import React, { useEffect, useRef } from 'react';
import { BrowserView, isBrowser, MobileView } from "react-device-detect";
import styled from '@emotion/styled';
import { gsap, ScrollTrigger } from 'gsap/all';
import { H2, H4, P } from "../../styles/typography";
import { Block, ChapterCaption, Circle, Column, Divider, Layer, Row } from "../UIKit";
import EndingImage from '../../assets/ch1-ending.png';
import { useStoryState } from '../../providers/StoryStateProvider';

gsap.registerPlugin(ScrollTrigger);

const Image = styled.img`
  object-fit: contain;
  object-position: right;
  height: 80%;
  pointer-events: none;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const HoverableCircle = styled(Column)`
  align-items: center;

  ${Circle}, ${H4} {
    transition: transform .2s ease-in;
  }

  &:hover {
    ${Circle} { 
      transform: rotateZ(90deg) scale(1.05);
      box-shadow: 0px 0px 8px 2px #FFF inset;

      &:after {
        box-shadow: 0px 0px 8px 2px #FFF;
      }
    }

    ${H4} {
      transform: translateX(-50%) scale(1.05);
    }
  }
`

export default function Ending({ nextChapter = () => null }) {
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

    if (isBrowser) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top center',
          end: 'bottom bottom',
          scrub: true,
        },
        onComplete: () => {
          gsap.set(chap2Ref.current, {
            opacity: 1
          })
        }
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
  }, [hasChapterInit])

  return (
    <>
      <BrowserView>
        <Column ref={rootRef} h="100vh" w="100%" align="center" justify="space-between">
          <Column css={css`flex: 1;`} align="center">
            <Column align="center" css={css`padding: 50px 0 20px;`}>
              <Circle size="m" />
              <H4 css={css`margin-top: 20px;`}>Chapter 1</H4>
            </Column>
            <Column css={css`flex: 1;`}>
              <Divider ref={topDivRef} vertical length="0" />
            </Column>
          </Column>
          <Row align="center">
            <Row css={css`flex: 1;`}>
              <Divider ref={leftDivRef} length="0" />
            </Row>
            <Column ref={chap2Ref} align="center" css={css`cursor: pointer; margin: 24px; z-index: 1; opacity: 0; transition: opacity .8s ease-in; transition-delay: .2s;`} onClick={nextChapter}>
              <HoverableCircle>
                <Circle size="xl" />
                <ChapterCaption>
                  <H4>Chapter 2</H4>
                </ChapterCaption>
              </HoverableCircle>
            </Column>
            <Row css={css`flex-direction: row-reverse; flex: 1;`}>
              <Divider ref={rightDivRef} length="0" />
            </Row>
          </Row>
          <Image src={EndingImage} alt="Accutron watches" />
          <Column css={css`flex: 1;`} justify="center" align="center">
            <P css={css`margin-bottom: 16px;`}>
              Learn more about this new industry standard and  Accutron’s updated range of watches.
            </P>
            <H2 alternative>
              In the following chapter
            </H2>
          </Column>
        </Column>
      </BrowserView>

      <MobileView>
        <Column ref={rootRef} w="100%" h="200vh">
          <Column w="100%" h="100vh">
            <Column align="center" css={css`padding-bottom: 20px;`}>
              <Block css={css`padding-top: 50px;`}>
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
                  Learn more about this new industry standard and Accutron’s updated range of watches
                </P>
                <Image src={EndingImage} alt="Accutron watches" />
              </Layer>
              <Layer ref={mobSlide2Ref} css={css`opacity: 0;`}>
                <H2 mobile alternative align="center" css={css`margin: 0 60px;`}>
                  In the following chapter
                </H2>

                <Row align="center">
                  <Divider css={css`opacity: 0;`} />
                  <Column ref={chap2Ref} align="center" css={css`cursor: pointer; margin: 24px;`} onClick={nextChapter}>
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
      </MobileView>
    </>
  )
}
