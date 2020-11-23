import { css } from '@emotion/core';
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import { H4, P } from '../styles/typography';
import { Circle, CircleSizes, Divider, Layer, Block, Row, Column, Background, ChapterCaption } from './UIKit';
import VideoContent from './VideoContent';

export default function ChapterHead({toContent, nextChapter}) {
  return (
    <Background css={css`height: 100vh;`}>
      <Layer>
        <VideoContent videoId={479786374} />
      </Layer>

      <BrowserView>
        <Layer>
          <Row h="100%" justify="center">
            <Divider vertical />
          </Row>
        </Layer>
        <Layer>
          <Block h="100%">
            <Row w="50%" justify="center" align="center">
              <Column align="center" css={css`cursor: pointer;`} onClick={nextChapter}>
                <Circle size="xl" />
                <ChapterCaption>
                  <H4>Chapter 1</H4>
                  <P>ACCUracy through<br />elecTRONics</P>
                </ChapterCaption>
              </Column>
            </Row>
            {/* <Row w="50%" justify="center" align="center">
              <Layer>
                <Row h="100%" align="center" justify="flex-end">
                  <Divider length={`calc(50% - ${CircleSizes.xl}px / 2 - 40px)`} />
                </Row>
              </Layer>
              <Column align="center" css={css`cursor: pointer;`} onClick={nextChapter}>
                <Circle size="xl" rotation={90} />
                <ChapterCaption>
                  <H4>Chapter 2</H4>
                  <P>A legacy Reborn</P>
                </ChapterCaption>
              </Column>
            </Row> */}
          </Block>
        </Layer>
      </BrowserView>
      
      <MobileView>
        <Column h="100vh">
          <Row align="center" h="50%" justify="center">
            <Column align="center" onClick={nextChapter}>
              <Circle size="l" />
              <ChapterCaption>
                <H4>Chapter 1</H4>
                <P>ACCUracy through<br />elecTRONics</P>
              </ChapterCaption>
            </Column>
          </Row>
          {/* <Row align="center" h="50%" justify="center">
            <Column align="center" w="100%" onClick={nextChapter}>
              <Row justify="center">
                <Layer>
                  <Row h="100%" align="center" justify="flex-end">
                    <Divider length={`calc(50% - ${CircleSizes.l}px / 2 - 40px)`} />
                  </Row>
                </Layer>
                <Circle size="l" rotation={90} />
              </Row>
              <H4 css={css`margin-top: 16px;`}>Chapter 2</H4>
              <P>A legacy Reborn</P>
            </Column>
          </Row> */}
        </Column>
      </MobileView>
    </Background>
  );
}
