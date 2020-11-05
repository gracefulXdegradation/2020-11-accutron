import styled from '@emotion/styled';
import { typefaceHeader } from '../styles/const';
import Slider from './Slider';

const Wrapper = styled('div')`
  width: 100%;
  font-family: ${typefaceHeader};
`

const Preamble = styled('div')`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Chapter() {
  return (
    <Wrapper>
      <Preamble>
        Accuracy through electronics
      </Preamble>
      <Slider />
      <Preamble>
        Chapter End
      </Preamble>
    </Wrapper>
  );
};
