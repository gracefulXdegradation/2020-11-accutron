import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { gsap } from 'gsap/all';
import { useStoryState } from '../../providers/StoryStateProvider';
import { Background } from '../UIKit';
import ChapterHead from './ChapterHead';
// import Ending from './Ending';
import Slider from './Slider';

const TopScreen = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -100%;
`;

const HorizontalSlider = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export default function Chapter1() {
  const horSlider = useRef(null)
  const { initChapter, hasChapterInit } = useStoryState()

  const toSlider = () => {
    gsap.to(horSlider.current, {
      duration: 1,
      ease: 'none',
      y: 0,
      onComplete: () => {
        // clear transform for scroll triggers to position correctly
        gsap.set(horSlider.current, {
          clearProps: 'transform'
        })
        initChapter()
      }
    })
  }

  return (
    <Background css={!hasChapterInit && css`height: 100vh; overflow: hidden;`}>
      <HorizontalSlider ref={horSlider} style={{transform: 'translate3d(0,100%,0)'}}> 
        <TopScreen>
          <ChapterHead onAnimateEnd={toSlider} />
        </TopScreen>
        <Slider />
        {/* <Ending /> */}
      </HorizontalSlider>
    </Background>
  );
};
