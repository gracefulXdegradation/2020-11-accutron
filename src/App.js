import React from 'react';
import Layout from './components/Layout';
import StoryStateProvider from './providers/StoryStateProvider';
import ChapterAnimationProvider from './providers/ChapterAnimationProvider';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <StoryStateProvider>
        <ChapterAnimationProvider>
          <Layout />
        </ChapterAnimationProvider>
      </StoryStateProvider>
    </>
  );
}

export default App;
