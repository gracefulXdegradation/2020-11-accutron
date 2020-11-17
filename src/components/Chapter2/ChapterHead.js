import { H2 } from '../../styles/typography';
import { Row, Background } from '../UIKit';

export default function ChapterHead({prevChapter}) {
  return (
    <Background>
      <Row h="100%" align="center" justify="center">
        <H2 align="center" alternative onClick={() => prevChapter(0)}>A Legacy Reborn</H2>
      </Row>
    </Background>
  );
}
