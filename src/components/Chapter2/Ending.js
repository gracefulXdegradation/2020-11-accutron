import { css } from '@emotion/core';
import React, { useEffect, useRef } from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import styled from '@emotion/styled';
import { H4, P } from "../../styles/typography";
import { typefaceParagraph } from "../../styles/const";
import { gsap, ScrollTrigger } from 'gsap/all';
import { BackgroundImage, Circle, Column, Divider, HoverableCircle, Layer, Row } from "../UIKit";
import data from '../../data/story';
import { useChapterAnimation } from '../../providers/ChapterAnimationProvider';

// import BgImage from '../../assets/2ES8A003_Detail_1.png';
import { useStoryState } from '../../providers/StoryStateProvider';

gsap.registerPlugin(ScrollTrigger);

const d = data.chapters[1].ending
const BgImage = d.images[0].src

const ShopNow = styled.a`
  font-size: 20px;
  line-height: 1em;
  padding: 20px 83px 17px;
  font-family: ${typefaceParagraph};
  border: 1px solid ${props => props.theme.borderColor};
  text-transform: uppercase;
  background: transparent;
  color: ${props => props.theme.fontHeaderPrimary};
  cursor: pointer;
  transition: box-shadow .2s ease-in;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 0px 4px 1px #FFF inset;
    color: ${props => props.theme.fontHeaderPrimary};
  }
`

const ShopLink = () => (
  <ShopNow href={d.shopLink.url} target="_blank">{d.shopLink.caption}</ShopNow>
)

export default function Ending() {
  const { toChapter1, toChapter2 } = useChapterAnimation()
  const { hasChapterInit } = useStoryState()

  const sliderRef = useRef(null)
  const bgRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (hasChapterInit) {
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger: sliderRef.current,
          pin: true,
          scrub: true,
          start: 'top top',
          snap: 'labels'
        }
      })
      .to(bgRef.current, {
        opacity: .3,
        duration: .5,
        ease: 'none',
      })
      .to(contentRef.current, {
        opacity: 1,
        duration: 1,
        ease: 'none',
      })
      .addLabel('ending')

      return () => tl.kill()
    }
  }, [hasChapterInit])

  return (
    <>
      <BrowserView renderWithFragment>
          <Row h="100vh" ref={sliderRef}>
            <Layer top="0">
              <BackgroundImage ref={bgRef} src={BgImage} position="center" css={css`opacity: 0;`} />
            </Layer>
            <Column ref={contentRef} h="100vh" w="100%" align="center" justify="space-between" css={css`opacity: 0;`}>
              <Column css={css`flex: 1;`} align="center" justify="flex-start">
                <Row>
                  <Column align="center" css={css`cursor: pointer; padding: 50px 0 20px;`}>
                    <HoverableCircle size="m" onClick={toChapter1}>
                      <H4 css={css`margin-top: 20px;`}>Chapter 1</H4>
                    </HoverableCircle>
                  </Column>

                  <Divider vertical css={css`margin: 0 150px;`} />

                  <Column align="center" css={css`cursor: pointer; padding: 50px 0 20px;`}>
                    <HoverableCircle size="m" onClick={toChapter2} rotation={90}>
                      <H4 css={css`margin-top: 20px;`}>Chapter 2</H4>
                    </HoverableCircle>
                  </Column>
                </Row>
              </Column>

              <Row align="center">
                <Row css={css`flex: 1; margin-left: 20px;`}>
                  <Divider />
                </Row>
                <Column align="center" css={css`margin: 0 100px;`}>
                  <ShopLink />
                </Column>
                <Row css={css`flex-direction: row-reverse; flex: 1; margin-right: 20px;`}>
                  <Divider />
                </Row>
              </Row>

              <Column css={css`flex: 1; margin-top: 50px;`} justify="flex-start" align="center">
                <P css={css`margin-bottom: 16px;`}>
                  {d.copy[0].text}
                </P>
                <H4 alternative align="center" css={css`margin-bottom: 32px; max-width: 500px;`}>
                {d.copy[1].text}
                </H4>
                <Column css={css`margin-bottom: 50px;`}>
                  <Circle size="xl" logo />
                </Column>
              </Column>
            </Column>
          </Row>
      </BrowserView>

      <MobileView renderWithFragment>
        <Row h="100vh" ref={sliderRef}>
          <Layer top="0">
            <BackgroundImage ref={bgRef} src={BgImage} position="left center" css={css`opacity: 0;`} />
          </Layer>
          <Column ref={contentRef} h="100vh" w="100%" align="center" justify="space-between" css={css`opacity: 0;`}>
            <Column css={css`flex: 1;`} justify="flex-start" align="center" w="100%">
              <Row h="30vh" align="center">
                <Column align="center" css={css`cursor: pointer; flex: 1;`} onClick={toChapter1}>
                  <Circle size="s" />
                  <H4 mobile css={css`margin-top: 20px;`}>Chapter 1</H4>
                </Column>

                <Divider vertical />

                <Column align="center" css={css`cursor: pointer; flex: 1;`} onClick={toChapter2}>
                  <Circle size="s" rotation={90} />
                  <H4 mobile css={css`margin-top: 20px;`}>Chapter 2</H4>
                </Column>
              </Row>
            </Column>

            <Column w="100%" align="center" justify="space-between" css={css`padding: 0 20px; flex: 1;`}>
              <Column>
                <P mobile css={css`margin-bottom: 16px; text-align: center;`}>
                  {d.copy[0].text}
                </P>
                <H4 alternative align="center" mobile>
                  {d.copy[1].text}
                </H4>
              </Column>
              <ShopLink />
            </Column>

            <Row css={css`margin-top: 30px; padding: 20px 0;`} align="flex-end">
              <Row align="center">
                <Row css={css`flex: 1;`}>
                  <Divider />
                </Row>
                <Column align="center" css={css`margin: 0 20px;`}>
                  <Circle size="l" logo />
                </Column>
                <Row css={css`flex-direction: row-reverse; flex: 1;`}>
                  <Divider />
                </Row>
              </Row>
            </Row>
          </Column>
        </Row>
      </MobileView>
    </>
  )
}
