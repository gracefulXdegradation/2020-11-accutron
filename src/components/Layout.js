import React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import { useRef, useState } from 'react';
import { gsap, ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { themes, typefaceHeader } from '../styles/const';
import GlobalStyle from '../styles/global';
import Chapter1 from './Chapter1';
import Chapter1Header from './Chapter1/ChapterHead';
import Chapter2, { Header as Chapter2Header} from './Chapter2';
import { Row } from './UIKit';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

window.gsap = gsap

const chapters = 2;

const HorizontalLayout = styled.div`
  width: ${props => props.chapters * 100}%;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
`;

const Root = styled.div`
  font-family: ${typefaceHeader};
`;

function Layout() {
  const horSliderRef = useRef(null)
  const chapterContentRef = useRef(null)
  const [chapter, setChapter] = useState(0)

  const toChapter = (chapterIndex) => (scrollUpDuration) => {
    const tl1 = gsap.timeline({
      paused: true,
      onComplete: () => {
        tl2.play()
      }
    }).to(window, { duration: scrollUpDuration, scrollTo: 0 })

    const tl2 = gsap.timeline({
      paused: true,
      onComplete: () => {
        setChapter(chapterIndex)
      }
    })
      .to(horSliderRef.current, { x: `${-100 * chapterIndex / chapters}%`, duration: 0.6 });

    tl1.play()
  }

  const toChapterContent = () => {
    gsap.to(window, {
      duration: .6,
      scrollTo: chapterContentRef.current,
      ease: 'easeIn'
    })
  }

  return (
    <Root>
      <GlobalStyle />
        <HorizontalLayout ref={horSliderRef} chapters={chapters}>
          <ThemeProvider theme={themes.dark}>
            <Chapter1Header nextChapter={toChapter(1)} toContent={toChapterContent} />
          </ThemeProvider>
          <ThemeProvider theme={themes.light}>
            <Chapter2Header prevChapter={toChapter(0)} />
          </ThemeProvider>
        </HorizontalLayout>
        <div ref={chapterContentRef}>
          { chapter === 0 && 
            <ThemeProvider theme={themes.dark}>
              <Chapter1 nextChapter={toChapter(1)} />
            </ThemeProvider>
          }
          {/* { chapter === 1 && 
            <ThemeProvider theme={themes.light}>
              <Chapter2 />
            </ThemeProvider>
          } */}
        </div>
    </Root>
  );
}

export default Layout;
