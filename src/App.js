import Layout from './components/Layout';
import StoryStateProvider from './providers/StoryStateProvider';

function App() {
  return (
    <StoryStateProvider>
      <Layout />
    </StoryStateProvider>
  );
}

export default App;
