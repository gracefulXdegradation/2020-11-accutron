import { css } from '@emotion/core';
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import { H4, P } from '../styles/typography';
import { Circle, Layer, Row, Column, Background, ChapterCaption, HoverableCircle } from './UIKit';
import VideoContent from './VideoContent';
import data from '../data/story';

export default function ChapterHead({nextChapter}) {
  return (
    <Background css={css`height: 100vh;`}>
      <Layer>
        <VideoContent videoId={data.video.id} />
      </Layer>

      <BrowserView renderWithFragment>
        <Column h="100%" w="100%" justify="flex-end" align="center">
          <Column h="50%" justify="center">
            <Column align="center" css={css`cursor: pointer;`} onClick={nextChapter}>
              <HoverableCircle size="xl" wrapChildren>
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
            <Column align="center" onClick={nextChapter}>
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
