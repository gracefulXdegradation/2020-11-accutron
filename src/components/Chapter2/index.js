import { Background } from '../UIKit';
import Ending from './Ending';
import Slider from './Slider';

export default function Chapter({ prevChapter, toTop }) {
  return (
    <Background>
      <Slider />
      <Ending prevChapter={prevChapter} toTop={() => toTop(1)} />
    </Background>
  );
};
