import { css } from '@emotion/core';
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import { H4, P } from '../styles/typography';
import { Circle, Layer, Row, Column, Background, ChapterCaption, HoverableCircle } from './UIKit';
import VideoContent from './VideoContent';
import data from '../data/story';
import { useChapterAnimation } from '../providers/ChapterAnimationProvider';

export default function VideoScreen() {
  const { toChapter1 } = useChapterAnimation()

  return (
    <Background css={css`height: 100vh;`}>
      <Layer>
        <VideoContent videoId={data.video.id} />
      </Layer>

      <BrowserView renderWithFragment>
        <Column h="100%" w="100%" justify="flex-end" align="center">
          <Column h="50%" justify="center">
            <Column align="center" css={css`cursor: pointer;`}>
              <HoverableCircle size="xl" wrapChildren onClick={toChapter1}>
                <H4>Chapter 1</H4>
                <P>ACCUracy through<br />elecTRONics</P>
              </HoverableCircle>
            </Column>
          </Column>
        </Column>
      </BrowserView>
      
      <MobileView renderWithFragment>
        <Column h="100vh" justify="flex-end">
          <Row align="center" h="70%" justify="center">
            <Column align="center" onClick={toChapter1}>
              <Circle size="l" />
              <ChapterCaption>
                <H4>Chapter 1</H4>
                <P>ACCUracy through<br />elecTRONics</P>
              </ChapterCaption>
            </Column>
          </Row>
        </Column>
      </MobileView>
    </Background>
  );
}
