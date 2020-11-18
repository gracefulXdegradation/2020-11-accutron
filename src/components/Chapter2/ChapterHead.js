import { css } from '@emotion/core';
import { BrowserView, MobileView } from 'react-device-detect';
import { H2, H4 } from '../../styles/typography';
import { Column, Background, Divider, Circle, Row, ChapterCaption, Layer, Camouflage } from '../UIKit';

export default function ChapterHead({prevChapter}) {
  return (
    <Background>
      <BrowserView style={{ height: '100%' }}>
        <Column h="100%" w="100%" align="center" justify="center">
          <Row css={css`flex: 1;`} justify="center" align="flex-end">
            <Column align="center" css={css`margin-bottom: 12px;`}>
              <Circle size="xl" rotation={90} />
              <H4 css={css`margin-top: 20px;`}>Chapter 2</H4>
            </Column>
          </Row>
          <Divider />
          <Row css={css`flex: 1;`} justify="center" align="flex-start">
            <H2 align="center" css={css`margin-top: 40px;`} alternative onClick={() => prevChapter(0)}>A Legacy Reborn</H2>
          </Row>
        </Column>
      </BrowserView>

      <MobileView style={{ height: '100%' }}>
        <Column h="100%" w="100%">
          <Layer>
            <Column w="100%" h="100%" align="center">
              <Divider vertical />
            </Column>
          </Layer>

          <Row h="50%" justify="center" align="flex-end">
            <Column align="center" css={css`padding-top: 12px;`}>
              <Camouflage />
              <Circle size="xl" rotation={90} />
            </Column>
          </Row>
          <Row h="50%" justify="center" align="flex-start">
            <Column align="center">
              <Row justify="center">
                <Camouflage />
                <H4 css={css`padding-top: 20px;`}>Chapter 2</H4>
              </Row>
              <Row justify="center" css={css`margin-top: 12px;`}>
                <Camouflage />
                <H2 alternative mobile css={css`padding-top: 8px;`}>A legacy reborn</H2>
              </Row>
            </Column>
          </Row>
        </Column>
      </MobileView>
    </Background>
  );
}
