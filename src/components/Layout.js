import React, { useCallback } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import { useRef } from 'react';
import { gsap, ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { themes, typefaceHeader } from '../styles/const';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import VideoScreen from './VideoScreen';
import { useStoryState } from '../providers/StoryStateProvider';
import { Background, Layer } from './UIKit';

import { images } from '../data/story'
import Preloader from './Preloader';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Root = styled.div`
  font-family: ${typefaceHeader};
`;

function Layout() {
  const fixedRef = useRef(null)
  const { chapter, ts, setChapter } = useStoryState()

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

  const toVideo = useCallback(() => toChapter(-1), [toChapter])
  const toChapter1 = useCallback(() => toChapter(0), [toChapter])
  const toChapter2 = useCallback(() => toChapter(1), [toChapter])

  return (
    <ThemeProvider theme={chapter === 1 ? themes.ch2 : themes.ch1}>
      <Root>
        { chapter === -2 && <Preloader images={images} onLoad={toVideo} /> }
        { chapter === -1 && <VideoScreen nextChapter={toChapter1} /> }
        { chapter === 0 &&  <Chapter1 key={`${ts}-1`} nextChapter={toChapter2} /> }
        { chapter === 1 &&  <Chapter2 key={`${ts}-2`} prevChapter={toChapter1} /> }
      </Root>
      <Layer ref={fixedRef} css={css`pointer-events: none; opacity: 0; position: fixed; top: 0; z-index: 3;`}>
        <Background css={css`height: 100vh;`} />
      </Layer>
    </ThemeProvider>
  );
}

export default Layout;
