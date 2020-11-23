import React, { createContext, useCallback, useContext } from 'react';
import { css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { useRef } from 'react';
import { gsap, ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { themes } from '../styles/const';
import { useStoryState } from './StoryStateProvider';
import { Background, Layer } from '../components/UIKit';

const ChapterAnimationContext = createContext();

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const AnimationProvider = ({ children }) => {
  const fixedRef = useRef(null)
  const { chapter, setChapter } = useStoryState()

  const toChapter = useCallback((chapterIndex) => {
    gsap.to(fixedRef.current, {
      opacity: 1,
      duration: 1,
      ease: 'none',
      onComplete: () => {
        setChapter(chapterIndex)

        gsap.to(fixedRef.current, {
          opacity: 0,
          duration: 1,
          ease: 'none',
        })
      }
    })
  }, [setChapter])

  const animationMethods = {
    toChapter,
    toVideo: useCallback(() => toChapter(-1), [toChapter]),
    toChapter1: useCallback(() => toChapter(0), [toChapter]),
    toChapter2: useCallback(() => toChapter(1), [toChapter]),
  }

  return (
    <ChapterAnimationContext.Provider value={animationMethods}>
      <ThemeProvider theme={chapter === 1 ? themes.ch2 : themes.ch1}>
        {children}
        <Layer ref={fixedRef} css={css`pointer-events: none; opacity: 0; position: fixed; top: 0; z-index: 3;`}>
          <Background css={css`height: 100vh;`} />
        </Layer>
      </ThemeProvider>
    </ChapterAnimationContext.Provider>
  );
}

export default AnimationProvider;

export const useChapterAnimation = () => useContext(ChapterAnimationContext);
