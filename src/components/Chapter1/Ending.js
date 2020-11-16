import { css } from '@emotion/core';
import React, { useEffect, useRef } from 'react';
import { BrowserView } from "react-device-detect";
import styled from '@emotion/styled';
import { gsap, ScrollTrigger } from 'gsap/all';
import { H2, H4, P } from "../../styles/typography";
import { ChapterCaption, Circle, Column, Divider, Row } from "../UIKit";
import EndingImage from '../../assets/ch1-ending.png';

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

export default function Ending({ nextChapter }) {
  const rootRef = useRef(null)
  const topDivRef = useRef(null)
  const leftDivRef = useRef(null)
  const rightDivRef = useRef(null)
  const chap2Ref = useRef(null)

  useEffect(() => {
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
  }, [])

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
              <Circle size="xl" css={css`transform: rotateZ(90deg);`} />
              <ChapterCaption>
                <H4>Chapter 2</H4>
              </ChapterCaption>
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
    </>
  )
}
