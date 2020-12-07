import { css } from '@emotion/core';
import React, { useRef } from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from "../../styles/typography";
import { gsap, ScrollTrigger } from 'gsap/all';
import { Background, BackgroundImage, Circle, Column, Divider, HoverableCircle, Layer, Row, ShopLink } from "../UIKit";
import { useChapterAnimation } from '../../providers/ChapterAnimationProvider';
import Slide from './Slide';
import { animateFadeIn, fadeIn } from '../../helpers/animation';

gsap.registerPlugin(ScrollTrigger);


export default function Ending({ data: d }) {
  const BgImage = d.images[0].src
  const { toChapter1, toChapter2 } = useChapterAnimation()

  const bgRef = useRef(null)
  const contentRef = useRef(null)

  const animation = (slide, props) => animateFadeIn(slide, {
    ...props,
    start: 'top top',
    end: 'bottom bottom',
    snap: 'labels'
  }, tl => {
    tl.to(bgRef.current, {
      opacity: .3,
      duration: .5,
      ease: 'none',
    })
    fadeIn(tl, contentRef.current)
    tl.addLabel('ending')
  })

  return (
    <>
      <BrowserView renderWithFragment>
        <Slide isActionable subslides={3} animate={animation}>
          <Layer left="0">
            <Layer top="0">
              <Background css={css`height: 100%;`}>
                <BackgroundImage ref={bgRef} src={BgImage} position="center" css={css`opacity: 0;`} />
              </Background>
            </Layer>
            <Column ref={contentRef} h="100vh" w="100%" align="center" justify="space-between" css={css`opacity: 0;`}>
              <Column css={css`flex: 1;`} align="center" justify="flex-start">
                <Row>
                  <Column align="center" css={css`cursor: pointer; padding: 50px 0 20px;`}>
                    <HoverableCircle size="m" wrapChildren onClick={toChapter1}>
                      <H4>Chapter 1</H4>
                    </HoverableCircle>
                  </Column>

                  <Divider vertical css={css`margin: 0 150px;`} />

                  <Column align="center" css={css`cursor: pointer; padding: 50px 0;`}>
                    <HoverableCircle size="m" wrapChildren onClick={toChapter2} rotation={90}>
                      <H4>Chapter 2</H4>
                    </HoverableCircle>
                  </Column>
                </Row>
              </Column>

              <Row align="center">
                <Row css={css`flex: 1; margin-left: 20px;`}>
                  <Divider />
                </Row>
                <Column align="center" css={css`margin: 0 100px;`}>
                  <ShopLink {...d.shopLink} />
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
            </Layer>
          </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide isActionable subslides={3} animate={animation}>
          <Layer left="0" top="0">
            <Layer top="0">
              <Background css={css`height: 100%;`}>
                <BackgroundImage ref={bgRef} src={BgImage} position="left center" css={css`opacity: 0;`} />
              </Background>
            </Layer>
            <Column ref={contentRef} h="100vh" w="100%" align="center" justify="space-between" css={css`opacity: 0;`}>
              <Column css={css`flex: 1;`} justify="flex-start" align="center" w="100%">
                <Row h="30vh" align="center">
                  <Column align="center" css={css`cursor: pointer; flex: 1;`} onClick={toChapter1}>
                    <Circle size="s" />
                    <H4 mobile css={css`white-space: nowrap;`}>Chapter 1</H4>
                  </Column>

                  <Divider vertical />

                  <Column align="center" css={css`cursor: pointer; flex: 1;`} onClick={toChapter2}>
                    <Circle size="s" rotation={90} />
                    <H4 mobile css={css`white-space: nowrap;`}>Chapter 2</H4>
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
                <ShopLink {...d.shopLink} />
              </Column>

              <Row css={css`margin-top: 30px; padding: 20px 0;`} align="flex-end">
                <Row align="center">
                  <Row css={css`flex: 1;`}>
                    <Divider />
                  </Row>
                  <Column align="center" css={css`margin: 0 20px;`}>
                    <Circle size="l" logo css={css`margin: 0;`} />
                  </Column>
                  <Row css={css`flex-direction: row-reverse; flex: 1;`}>
                    <Divider />
                  </Row>
                </Row>
              </Row>
            </Column>
          </Layer>
        </Slide>
      </MobileView>
    </>
  )
}
