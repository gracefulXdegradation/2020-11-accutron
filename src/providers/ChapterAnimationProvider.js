import React, { createContext, useCallback, useContext } from 'react';
import { css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { useRef } from 'react';
import { gsap, ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { themes } from '../styles/const';
import { useStoryState } from './StoryStateProvider';
import { Background, Column, HighsnobietyLogo, Layer } from '../components/UIKit';

export const stages = {
  LOADER: -2,
  VIDEO: -1,
  CHAPTER_1: 0,
  CHAPTER_2: 1
}

const ChapterAnimationContext = createContext();

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const AnimationProvider = ({ children }) => {
  const fixedRef = useRef(null)
  const logoRef = useRef(null)
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
    toChapter1: useCallback(() => {
      gsap.to(logoRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'none'
      })
      toChapter(0)
    }, [toChapter]),
    toChapter2: useCallback(() => toChapter(1), [toChapter]),
  }

  return (
    <ChapterAnimationContext.Provider value={animationMethods}>
      <ThemeProvider theme={chapter === stages.CHAPTER_2 ? themes.ch2 : themes.ch1}>
        <Layer top="0" ref={logoRef} css={css`z-index: 4; pointer-events: none;`}>
          <Column h="100%" w="100%" justify="flex-start" align="center" css={css`padding-top: 50px;`}>
            <HighsnobietyLogo style={{width: '200px', height: '35px'}} />
          </Column>
        </Layer>
        <Layer ref={fixedRef} css={css`pointer-events: none; opacity: 0; position: fixed; top: 0; z-index: 3;`}>
          <Background css={css`height: 100vh;`} />
        </Layer>
        {children}
      </ThemeProvider>
    </ChapterAnimationContext.Provider>
  );
}

export default AnimationProvider;

export const useChapterAnimation = () => useContext(ChapterAnimationContext);
