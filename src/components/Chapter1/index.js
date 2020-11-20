import { Background } from '../UIKit';
import Ending from './Ending';
import Slider from './Slider';

export default function Chapter({ nextChapter }) {
  return (
    <Background>
      <Slider />
      <Ending nextChapter={() => nextChapter(1)} />
    </Background>
  );
};
