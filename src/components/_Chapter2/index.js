import styled from '@emotion/styled';
import { typefaceHeader } from '../../styles/const';
import { H2, P } from '../../styles/typography';
import Slider from './Slider';

const Wrapper = styled('div')`
  width: 100%;
  font-family: ${typefaceHeader};
  background-color: ${props => props.theme.bgColor};
  transition: background-color 2s ease;
`;

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
      <Slider />
      <Preamble>
        <H2 alternative>Chapter end</H2>
      </Preamble>
    </Wrapper>
  );
};
