import React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import { useRef, useState } from 'react';
import { gsap, ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { themes } from '../styles/const';
import GlobalStyle from '../styles/global';
import Chapter1, { Header as Chapter1Header} from './Chapter1';
import Chapter2, { Header as Chapter2Header} from './Chapter2';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const HorizontalLayout = styled.div`
  width: ${props => props.chapters * 100}%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
`;

function Layout() {
  const rootRef = useRef()
  const [theme, setTheme] = useState(themes.dark)
  const [chapter, setChapter] = useState(0)

  const nextChapter = (scrollUpDuration) => {
    const tl1 = gsap.timeline({
      paused: true,
      onComplete: () => {
        setTheme(themes.light)
        tl2.play()
      }
    }).to(window, { duration: scrollUpDuration, scrollTo: 0 })

    const tl2 = gsap.timeline({
      paused: true,
      onComplete: () => {
        setChapter(i => i + 1)
      }
    })
      .to(rootRef.current, { x: "-50%", duration: 0.6 });

    tl1.play()
  }

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <HorizontalLayout ref={rootRef} chapters={2}>
          <Chapter1Header nextChapter={nextChapter} />
          <Chapter2Header />
        </HorizontalLayout>
        { chapter === 0 && <Chapter1 nextChapter={nextChapter} />}
        { chapter === 1 && <Chapter2 />}
      </ThemeProvider>
    </>
  );
}

export default Layout;
