import styled from '@emotion/styled';
import { typefaceHeader, typefaceParagraph } from './const';

const headingColor = ({ theme, alternative, tertiary }) =>
  alternative ? theme.fontHeaderAlternative : tertiary ? theme.fontHeaderTertiary :theme.fontHeaderPrimary

export const H2 = styled.h2`
  position: relative;
  font-family: ${typefaceHeader};
  color: ${props => headingColor(props)};
  font-size: ${({ mobile }) => mobile ? '25px' : '50px'};
  line-height: ${({ mobile }) => mobile ? '35px' : '70px'};
  font-weight: normal;
  text-transform: uppercase;
  ${({ align }) => align && `text-align: ${align};`};
`;

export const H3 = styled.h3`
  position: relative;
  font-family: ${typefaceHeader};
  color: ${props => headingColor(props)};
  font-size: 40px;
  line-height: 56px;
  font-weight: normal;
  text-transform: uppercase;
  ${({ align }) => align && `text-align: ${align};`};
`;

export const H4 = styled.h4`
  position: relative;
  font-family: ${typefaceHeader};
  color: ${props => headingColor(props)};
  font-size: ${({ mobile }) => mobile ? '20px' : '30px'};
  line-height: ${({ mobile }) => mobile ? '28px' : '35px'};
  font-weight: normal;
  text-transform: uppercase;
  ${({ align }) => align && `text-align: ${align};`};
`;

export const P = styled.p`
  font-family: ${typefaceParagraph};
  color: ${props => props.theme.fontParagraph};
  font-size: ${({ mobile }) => mobile ? '15px' : '20px'};
  line-height: ${({ mobile }) => mobile ? '20px' : '25px'};
  ${({ align }) => align && `text-align: ${align};`};
`
