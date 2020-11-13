import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { H4, P } from '../../../styles/typography';
import LeftBgImage from '../../../assets/ch1-s1-l.png'
import WatchesFrontImg from '../../../assets/ch1-s1-r1.png'
import WatchesBackImg from '../../../assets/ch1-s1-r2.png'
import Animate, { Animations } from '../../Animate';
import { Column, Row } from '../../UIKit';

const Image = styled.img`
  ${({ greedy }) => greedy && css`
    width: 100%;
    height: 100%;
  `}
  object-fit: cover;
`;

export default function Slide1() {
  return (
    <Row h="100%">
      <Row w="50%" h="100%">
        <Image greedy src={LeftBgImage} alt="Accutron mechanism" />
      </Row>
      <Row w="50%" h="100%" align="center" css={css`
        &:before,
        &:after {
          content: '';
          display: block;
        }
        &:after { flex-grow: 1 }
        &:before { flex-grow: 2 }
      `}>
        <Column css={css`max-width: 540px;`} h="100%" justify="center">
          <Column css={css`max-height: 672px;`} h="100%" justify="space-between">
            <Column>
              <P>
                Long before American watchmaker Bulova introduced its legendary Accutron watch in October 1960,
              </P>
              <H4 css={css`margin-top: 32px;`}>
                the company was founded in 1875 by Joseph Bulova in New York City.
              </H4>
            </Column>

            <div css={css`position: relative;`}>
              <img src={WatchesFrontImg} alt="Accutron watches front" css={css`width: 63%;`} />
              <img src={WatchesBackImg} alt="Accutron watches back" css={css`width: 63%; position: absolute; right: 0; z-index: -1;`} />
            </div>
          </Column>
        </Column>
      </Row>
    </Row>
  );
};
