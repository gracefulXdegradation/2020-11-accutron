import styled from '@emotion/styled';
import { typefaceHeader, typefaceParagraph } from './const';

const headingColor = ({ theme, alternative }) =>
  alternative ? theme.fontHeaderAlternative : theme.fontHeaderPrimary

export const H2 = styled.h2`
  position: relative;
  font-family: ${typefaceHeader};
  color: ${props => headingColor(props)};
  font-size: 50px;
  line-height: 70px;
  font-weight: normal;
  text-transform: uppercase;
`;

export const H3 = styled.h3`
  position: relative;
  font-family: ${typefaceHeader};
  color: ${props => headingColor(props)};
  font-size: 40px;
  line-height: 56px;
  font-weight: normal;
  text-transform: uppercase;
`;

export const H4 = styled.h4`
  position: relative;
  font-family: ${typefaceHeader};
  color: ${props => headingColor(props)};
  font-size: 30px;
  line-height: 35px;
  font-weight: normal;
  text-transform: uppercase;
`;

export const P = styled.p`
  font-family: ${typefaceParagraph};
  color: ${props => props.theme.fontParagraph};
  font-size: 20px;
  line-height: 25px;
`
