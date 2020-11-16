import { Background } from '../UIKit';
import Preamble from './Preamble';
import Ending from './Ending';
import Slider from './Slider';

export default function Chapter({ nextChapter }) {
  return (
    <Background>
      <Preamble />
      <Slider />
      <Ending nextChapter={() => nextChapter(1)} />
    </Background>
  );
};
