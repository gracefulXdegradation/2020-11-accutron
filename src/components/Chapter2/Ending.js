import { css } from '@emotion/core';
import React from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import { gsap, ScrollTrigger } from 'gsap/all';
import { H4, P } from "../../styles/typography";
import { Circle, Column, Divider, HoverableCircle, Row } from "../UIKit";
import data from '../../data/story';
import { useChapterAnimation } from '../../providers/ChapterAnimationProvider';

const d = data.chapters[1].ending

gsap.registerPlugin(ScrollTrigger);

export default function Ending() {
  const { toChapter1, toChapter2 } = useChapterAnimation()

  return (
    <>
      <BrowserView>
        <Column h="100vh" w="100%" align="center" justify="space-between">
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
              <Circle size="xl" logo />
            </Column>
            <Row css={css`flex-direction: row-reverse; flex: 1; margin-right: 20px;`}>
              <Divider />
            </Row>
          </Row>

          <Column css={css`flex: 1; margin-top: 50px;`} justify="flex-start" align="center">
            <P css={css`margin-bottom: 16px;`}>
              {d.copy[0].text}
            </P>
            <H4 tertiary>
            {d.copy[1].text}
            </H4>
          </Column>
        </Column>
      </BrowserView>

      <MobileView>
        <Column h="100vh" w="100%" align="center" justify="space-between">
          <Column css={css`flex: 1;`} justify="flex-start" align="center" w="100%">
            <Row h="20vh" align="center">
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

          <Column w="100%" align="center" css={css`padding: 0 20px;`}>
            <P mobile css={css`margin-bottom: 16px; text-align: center;`}>
              {d.copy[0].text}
            </P>
            <H4 tertiary align="center" mobile>
              {d.copy[1].text}
            </H4>
          </Column>

          <Row css={css`flex: 1; margin-top: 50px;`} align="flex-end">
            <Row align="center" h="50%">
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
      </MobileView>
    </>
  )
}
