import React from 'react';
import { withOrientationChange } from "react-device-detect";
import Layout from './components/Layout';
import StoryStateProvider from './providers/StoryStateProvider';
import ChapterAnimationProvider from './providers/ChapterAnimationProvider';
import GlobalStyle from './styles/global';
import LandscapeStub from './components/LandscapeStub';
import { ErrorBoundary } from './components/ErrorBoundary';

function App({ isLandscape }) {
  return (
    <>
      <GlobalStyle />
      <StoryStateProvider>
        <ChapterAnimationProvider>
          <ErrorBoundary>
          {isLandscape
            ? <LandscapeStub />
            : <Layout />
          }
          </ErrorBoundary>
        </ChapterAnimationProvider>
      </StoryStateProvider>
    </>
  );
}

export default withOrientationChange(App);
