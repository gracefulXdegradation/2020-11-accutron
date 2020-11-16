import { css } from '@emotion/core';
import React from 'react';
import { BrowserView } from "react-device-detect";
import { H2, H4, P } from "../../styles/typography";
import { ChapterCaption, Circle, Column, Divider, Row } from "../UIKit";
import EndingImage from '../../assets/ch1-ending.png';
import styled from '@emotion/styled';

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

  return (
    <>
      <BrowserView>
        <Column h="100vh" w="100%" align="center" justify="space-between">
          <Column css={css`flex: 1;`} align="center">
            <Column align="center" css={css`padding: 50px 0 20px;`}>
              <Circle size="m" />
              <H4 css={css`margin-top: 20px;`}>Chapter 1</H4>
            </Column>
            <Divider vertical css={css`flex: 1;`} />
          </Column>
          <Row align="center">
            <Divider css={css`flex: 1;`} />
            <Column align="center" css={css`cursor: pointer; margin: 24px; z-index: 1;`} onClick={nextChapter}>
              <Circle size="xl" css={css`transform: rotateZ(90deg);`} />
              <ChapterCaption>
                <H4>Chapter 2</H4>
              </ChapterCaption>
            </Column>
            <Divider css={css`flex: 1;`} />
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
