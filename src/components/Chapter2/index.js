import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap/all';
import { useStoryState } from '../../providers/StoryStateProvider';
import { Background } from '../UIKit';
import ChapterHead from './ChapterHead';
import Ending from './Ending';
import Slider from './Slider';
import { css } from '@emotion/core';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';

const LeftScreen = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: -100%;
`;

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

export default function Chapter2() {
  const horSlider = useRef(null)
  const { initChapter, hasChapterInit } = useStoryState()

  const toSlider = () => {
    gsap.to(horSlider.current, Object.assign({
      duration: 1,
      ease: 'none',
      onComplete: () => {
        // clear transform for scroll triggers to position correctly
        gsap.set(horSlider.current, {
          clearProps: 'transform'
        })
        initChapter()
      }
    }, isMobile ? { y: 0 } : { x: 0 }))
  }

  return (
    <>
      <BrowserView renderWithFragment>
        <Background css={!hasChapterInit && css`height: 100vh; overflow: hidden;`}>
            {/* set transform via style in order to make it clearable by GSAP */}
            <HorizontalSlider ref={horSlider} style={{transform: 'translate3d(100%,0,0)'}}> 
              <LeftScreen>
                <ChapterHead onAnimateEnd={toSlider} />
              </LeftScreen>
              <Slider />
              <Ending />
            </HorizontalSlider>
        </Background>
      </BrowserView>

      <MobileView renderWithFragment>
        <Background css={!hasChapterInit && css`height: 100vh; overflow: hidden;`}>
          <HorizontalSlider ref={horSlider} style={{transform: 'translate3d(0,100%,0)'}}> 
            <TopScreen>
              <ChapterHead onAnimateEnd={toSlider} />
            </TopScreen>
            <Slider />
            <Ending />
          </HorizontalSlider>
        </Background>
      </MobileView>
    </>
  );
};
