import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import { useRef, useState } from 'react';
import { gsap, ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { themes, typefaceHeader } from '../styles/const';
import GlobalStyle from '../styles/global';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import VideoScreen from './VideoScreen';
import { useStoryState } from '../providers/StoryStateProvider';
import { Background, Layer } from './UIKit';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Root = styled.div`
  font-family: ${typefaceHeader};
`;

function Layout() {
  const fixedRef = useRef(null)
  const [chapter, setChapter] = useState(-1)
  const { initChapter } = useStoryState()

  const toChapter = (chapterIndex) => {
    gsap.to(fixedRef.current, {
      opacity: 1,
      duration: 1,
      ease: 'none',
      onComplete: () => {
        initChapter(false)
        setChapter(chapterIndex)

        gsap.to(fixedRef.current, {
          opacity: 0,
          duration: 1,
          ease: 'none',
        })
      }
    })
  }

  return (
      <ThemeProvider theme={chapter === 1 ? themes.ch2 : themes.ch1}>
        <Root>
          <GlobalStyle />
          { chapter === -1 && <VideoScreen nextChapter={() => toChapter(0)} /> }
          { chapter === 0 &&  <Chapter1 nextChapter={() => toChapter(1)} /> }
          { chapter === 1 &&  <Chapter2 prevChapter={() => toChapter(0)} /> }
        </Root>
        <Layer ref={fixedRef} css={css`pointer-events: none; opacity: 0; position: fixed; top: 0; z-index: 3;`}>
          <Background css={css`height: 100vh;`} />
        </Layer>
      </ThemeProvider>
  );
}

export default Layout;
