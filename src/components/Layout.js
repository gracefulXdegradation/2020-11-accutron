import React from 'react'
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import VideoScreen from './VideoScreen';
import { useStoryState } from '../providers/StoryStateProvider';
import { useChapterAnimation, stages } from '../providers/ChapterAnimationProvider';

import { images } from '../data/story'
import Preloader from './Preloader';

function Layout() {
  const { chapter, ts } = useStoryState()
  const { toVideo } = useChapterAnimation()

  return <>
      { chapter === stages.LOADER && <Preloader images={images} onLoad={toVideo} /> }
      { (chapter === stages.VIDEO || chapter === stages.LOADER) && <VideoScreen /> }
      { chapter === stages.CHAPTER_1 &&  <Chapter1 key={`${ts}-1`} /> }
      { chapter === stages.CHAPTER_2 &&  <Chapter2 key={`${ts}-2`} /> }
    </>
  ;
}

export default Layout;
