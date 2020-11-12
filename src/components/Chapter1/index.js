import { css } from '@emotion/core';
import styled from '@emotion/styled';
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import { typefaceHeader } from '../../styles/const';
import { H2, H4, P } from '../../styles/typography';
import { Circle, CircleSizes, Divider, Layer, Block, Row, Column } from '../UIKit';
import VideoContent from '../VideoContent';
import Slider from './Slider';

const Wrapper = styled.div`
  width: 100%;
  font-family: ${typefaceHeader};
  position: relative;
`;

const Preamble = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ChapterCaption = ({ children }) => (
  <Block>
    <Layer css={css`
      top: 16px;
      
      & > * {
        white-space: nowrap;
        transform: translateX(-50%);
        display: inline-block;
        text-align: center;
      }
    `}>
      {children}
    </Layer>
  </Block>
)

export default function Chapter({ nextChapter }) {
  return (
    <Wrapper>
      <Slider />
      <Preamble>
        <H2 alternative onClick={() => nextChapter(1)}>Chapter end</H2>
      </Preamble>
    </Wrapper>
  );
};

export const Header = () => (
  <Wrapper>
    <Layer>
      <VideoContent videoId={466496736} />
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
            <Column align="center" css={css`cursor: pointer;`}>
              <Circle size="xl" />
              <ChapterCaption>
                <H4>Chapter 1</H4>
                <P>ACCUracy through<br />elecTRONics</P>
              </ChapterCaption>
            </Column>
          </Row>
          <Row w="50%" justify="center" align="center">
            <Layer>
              <Row h="100%" align="center" justify="flex-end">
                <Divider length={`calc(50% - ${CircleSizes.xl}px / 2 - 40px)`} />
              </Row>
            </Layer>
            <Column align="center" css={css`cursor: pointer;`}>
              <Circle size="xl" rotation={90} />
              <ChapterCaption>
                <H4>Chapter 2</H4>
                <P>A legacy Reborn</P>
              </ChapterCaption>
            </Column>
          </Row>
        </Block>
      </Layer>
    </BrowserView>
    
    <MobileView>
      <Column h="100vh">
        <Row align="center" h="50%" justify="center">
          <Column align="center">
            <Circle size="l" />
            <ChapterCaption>
              <H4>Chapter 1</H4>
              <P>ACCUracy through<br />elecTRONics</P>
            </ChapterCaption>
          </Column>
        </Row>
        <Row align="center" h="50%" justify="center">
          <Column align="center" w="100%">
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
        </Row>
      </Column>
    </MobileView>
  </Wrapper>
)
