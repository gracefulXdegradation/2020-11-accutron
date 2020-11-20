import { gsap } from 'gsap/all';
import { Background } from '../UIKit';
import Ending from './Ending';
import ChapterHead from './ChapterHead';
import Slider from './Slider';
import { useRef } from 'react';
import { useStoryState } from '../../providers/StoryStateProvider';
import { css } from '@emotion/core';

export default function Chapter() {
  const sliderRef = useRef(null)
  const { initChapter, hasChapterInit } = useStoryState()

  const toSlider = () => {
    if (sliderRef.current) {
      gsap.to(window, {
        duration: 1.4,
        scrollTo: sliderRef.current,
        ease: 'easeIn',
        onComplete: () => {
          initChapter()
          // gsap.to(window, {
          //   duration: 1,
          //   scrollTo: `+=${window.innerHeight / 4}`,
          //   ease: 'none',
          // })
        }
      })
    }
  }

  return (
    <Background css={!hasChapterInit && css`height: ${200}vh; overflow: hidden;`}>
      <ChapterHead onAnimateEnd={toSlider} />
      <div ref={sliderRef}>
        <Slider />
      </div>
      <Ending />
    </Background>
  );
};
