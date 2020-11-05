import styled from '@emotion/styled';
import { typefaceHeader, typefaceParagraph } from './const';

const headingColor = ({ theme, alternative }) =>
  alternative ? theme.fontHeaderAlternative : theme.fontHeaderPrimary

export const H2 = styled.h2`
  font-family: ${typefaceHeader};
  color: ${props => headingColor(props)};
  font-size: 50pt;
  line-height: 70pt;
  font-weight: normal;
  text-transform: uppercase;
`;

export const H3 = styled.h3`
  font-family: ${typefaceHeader};
  color: ${props => headingColor(props)};
  font-size: 40pt;
  line-height: 56pt;
  font-weight: normal;
  text-transform: uppercase;
`;

export const H4 = styled.h4`
  font-family: ${typefaceHeader};
  color: ${props => headingColor(props)};
  font-size: 30pt;
  line-height: 35pt;
  font-weight: normal;
  text-transform: uppercase;
`;

export const P = styled.p`
  font-family: ${typefaceParagraph};
  color: ${props => props.theme.fontParagraph};
  font-size: 20pt;
  line-height: 25pt;
`
