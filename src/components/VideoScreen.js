import React from 'react';
import { css } from '@emotion/core';
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import { H4, P } from '../styles/typography';
import { Circle, Layer, Column, Background, HoverableCircle } from './UIKit';
import VideoContent from './VideoContent';
import data from '../data/story';
import { useChapterAnimation } from '../providers/ChapterAnimationProvider';


export default function VideoScreen() {
  const { toChapter1 } = useChapterAnimation()

  return (
    <Background css={css`height: 100vh;`}>
      <Layer>
        <VideoContent videoId={data.video.id} />
        <Layer top="0" css={css`height: 100%; width: 100%; background: linear-gradient(to bottom, transparent 60%, #000000 100%);;`} />
      </Layer>

      <BrowserView renderWithFragment>
        <Column h="100%" w="100%" justify="flex-end" align="center">
          <Column align="center" css={css`cursor: pointer; margin: 10vh 0 20vh;`}>
            <HoverableCircle size="l" wrapChildren onClick={toChapter1}>
              <H4>Chapter 1</H4>
              <P align="center">ACCUracy through<br />elecTRONics</P>
            </HoverableCircle>
          </Column>
        </Column>
      </BrowserView>
      
      <MobileView renderWithFragment>
        <Column h="100vh" justify="flex-end" align="center">
          <Column align="center" onClick={toChapter1} css={css`margin: 10vh 0;`}>
            <Circle size="l" />
            <Column align="center">
              <H4>Chapter 1</H4>
              <P align="center">ACCUracy through<br />elecTRONics</P>
            </Column>
          </Column>
        </Column>
      </MobileView>
    </Background>
  );
}
