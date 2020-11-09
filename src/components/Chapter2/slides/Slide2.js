import React from 'react';
import styled from '@emotion/styled';
import { H4, P } from '../../../styles/typography';
import AccutronSpaceviewAlphaImg from '../../../assets/1961_Accutron-SpaceviewAlpha.png'
import { css } from '@emotion/core';
import Animate, { Animations } from '../../Animate';
import HalfDisc from '../../ImageHalfDisc';

const SlideRoot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

const SlideHalf = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export default function Slide1() {
  return (
    <SlideRoot>
      <SlideHalf>
        <div css={css`max-width: 536px;`}>
          <Animate animation={Animations.FadeInUp}>
            <P>The Spaceview of yesteryear featured a deconstructed outer case design that exposed the inner workings of the watch and was only provided to Bulova dealers as display units to helps explain how the innovative technology worked.</P>
          </Animate>
        </div>
      </SlideHalf>
    </SlideRoot>
  );
};
