import styled from '@emotion/styled';
import Slider from './Slider';

const Preamble = styled('div')`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Chapter() {
  return (
    <div>
      <Preamble>
        Chapter Begin
      </Preamble>
      <Slider />
      <Preamble>
        Chapter End
      </Preamble>
    </div>
  );
};
