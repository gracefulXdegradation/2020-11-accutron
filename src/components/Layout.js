import React from 'react';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import VideoScreen from './VideoScreen';
import { useStoryState } from '../providers/StoryStateProvider';
import { useChapterAnimation } from '../providers/ChapterAnimationProvider';

import { images } from '../data/story'
import Preloader from './Preloader';

function Layout() {
  const { chapter, ts } = useStoryState()
  const { toVideo } = useChapterAnimation()

  return (
    <>
      { chapter === -2 && <Preloader images={images} onLoad={toVideo} /> }
      { chapter === -1 && <VideoScreen /> }
      { chapter === 0 &&  <Chapter1 key={`${ts}-1`} /> }
      { chapter === 1 &&  <Chapter2 key={`${ts}-2`} /> }
    </>
  );
}

export default Layout;
