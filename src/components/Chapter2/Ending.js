import { css } from '@emotion/core';
import React from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import styled from '@emotion/styled';
import { H4, P } from "../../styles/typography";
import { typefaceParagraph } from "../../styles/const";
import { Circle, Column, Divider, HoverableCircle, Row } from "../UIKit";
import data from '../../data/story';
import { useChapterAnimation } from '../../providers/ChapterAnimationProvider';

const d = data.chapters[1].ending

const ShopNow = styled.button`
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

  &:hover {
    box-shadow: 0px 0px 4px 1px #FFF inset;
  }
`

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
              <ShopNow>Shop Now</ShopNow>
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
      </BrowserView>

      <MobileView>
        <Column h="100vh" w="100%" align="center" justify="space-between">
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
            <ShopNow>Shop Now</ShopNow>
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
      </MobileView>
    </>
  )
}
