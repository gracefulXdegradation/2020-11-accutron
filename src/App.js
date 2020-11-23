import React from 'react';
import Layout from './components/Layout';
import StoryStateProvider from './providers/StoryStateProvider';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <StoryStateProvider>
        <Layout />
      </StoryStateProvider>
    </>
  );
}

export default App;
