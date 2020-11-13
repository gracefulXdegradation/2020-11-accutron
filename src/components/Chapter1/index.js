import { H2 } from '../../styles/typography';
import { Background, Column } from '../UIKit';
import Preamble from './Preamble';
import Slider from './Slider';

export default function Chapter({ nextChapter }) {
  return (
    <Background>
      <Preamble />
      <Slider />
      <Column h="100vh" w="100%" align="center" justify="center">
        <H2 alternative onClick={() => nextChapter(1)}>Chapter end</H2>
      </Column>
    </Background>
  );
};
