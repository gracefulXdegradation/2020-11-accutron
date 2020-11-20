import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap/all';
import { useStoryState } from '../../providers/StoryStateProvider';
import { Background } from '../UIKit';
import ChapterHead from './ChapterHead';
import Ending from './Ending';
import Slider from './Slider';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from 'react-device-detect';

const LeftScreen = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: -100%;
`;

const HorizontalSlider = styled.div`
  position: relative;
  width: 100%;
`

export default function Chapter({ prevChapter, toTop }) {
  const horSlider = useRef(null)
  const mobSliderRef = useRef(null)
  const { initChapter2, hasChapter2Init } = useStoryState()

  const toSlider = () => {
    if (horSlider.current) {
      // desktop
      gsap.to(horSlider.current, {
        x: 0,
        duration: 1,
        delay: 0.4,
        ease: 'none',
        onComplete: () => {
          // clear transform for scroll triggers to position correctly
          gsap.set(horSlider.current, {
            clearProps: 'transform'
          })
          initChapter2()
        }
      })
    }
    if (mobSliderRef.current) {
      //mobile
      gsap.to(window, {
        duration: 1.4,
        delay: 0.4,
        scrollTo: mobSliderRef.current,
        ease: 'easeIn',
        onComplete: initChapter2
      })
    }
  }
  
  return (
    <>
      <BrowserView renderWithFragment>
        <Background css={!hasChapter2Init && css`height: 100vh; overflow: hidden;`}>
            {/* set transform via style in order to make it clearable by GSAP */}
            <HorizontalSlider ref={horSlider} style={{transform: 'translate3d(100%,0,0)'}}> 
              <LeftScreen>
                <ChapterHead onAnimateEnd={toSlider} />
              </LeftScreen>
              <Slider />
              <Ending prevChapter={prevChapter} toTop={() => toTop(1)} />
            </HorizontalSlider>
        </Background>
      </BrowserView>

      <MobileView renderWithFragment>
        <Background css={!hasChapter2Init && css`height: ${200}vh; overflow: hidden;`}>
          <ChapterHead onAnimateEnd={toSlider} />
          <div ref={mobSliderRef}>
            <Slider />
          </div>
          <Ending prevChapter={prevChapter} toTop={() => toTop(1)} />
        </Background>
      </MobileView>
    </>
  );
};
