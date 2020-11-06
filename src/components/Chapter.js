import styled from '@emotion/styled';
import { typefaceHeader } from '../styles/const';
import { H2, P } from '../styles/typography';
import Slider from './Slider';

const Wrapper = styled('div')`
  width: 100%;
  font-family: ${typefaceHeader};
  background-color: ${props => props.theme.bgColor};
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
      <Preamble>
        <H2>Accuracy through electronics</H2>
        <P>Before the quartz movement swept the horological world by storm during the 1970s and early-80s, Bulova began developing its electronic Accutron watch in 1952.</P>
      </Preamble>
      <Slider />
      <Preamble>
        <H2 alternative>Chapter end</H2>
      </Preamble>
    </Wrapper>
  );
};
