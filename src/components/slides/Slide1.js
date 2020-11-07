import React from 'react';
import styled from '@emotion/styled';
import { H4, P } from '../../styles/typography';
import WatchesSchemeImg from '../../assets/scheme.png'
import WatchesImg from '../../assets/watches.jpg'
import { css } from '@emotion/core';
import Animate, { Animations } from '../Animate';

const SlideRoot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const SlideHalf = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Slide1() {
  return (
    <SlideRoot>
      <SlideHalf>
        <div css={css`max-width: 500px;`}>
          <Animate animation={Animations.FadeInUp}>
            <P>
              Long before American watchmaker Bulova introduced its legendary Accutron watch in October 1960,
            </P>
          </Animate>
          <Animate animation={Animations.FadeInUp}>
            <img src={WatchesSchemeImg} height="500" alt="Watches scheme" />
          </Animate>
        </div>
      </SlideHalf>
      <SlideHalf>
        <div css={css`max-width: 536px;`}>
          <Animate animation={Animations.FadeInUp}>
            <H4>the company was founded in 1875 by Joseph Bulova in New York City.</H4>
          </Animate>
          <Animate animation={Animations.FadeInUp}>
            <img src={WatchesImg} height="500" alt="Watches collection" />
          </Animate>
        </div>
      </SlideHalf>
    </SlideRoot>
  );
};
