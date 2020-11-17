import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const Background = styled.div`
  width: 100%;
  position: relative;
  background-color: ${props => props.theme.bgColor};
`;

export const Layer = styled.div`
  position: absolute;
  width: 100%;
  height: ${({ fullScreen }) => fullScreen ? '100vh' : '100%'};
  ${({ fullScreen }) => fullScreen && css`
    top: 0;
    left: 0;
  `}

  ${({ top }) => top && `top: ${top};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
`;

export const Block = styled.div`
  position: relative;
  ${props => props.h && `height: ${props.h};`}
  display: flex;
  ${props => props.justify && `justify-content: ${props.justify};`}
  ${props => props.align && `align-items: ${props.align};`}
`;

export const Row = styled(Block)`
  width: ${props => props.w || '100%'};
`;

export const Column = styled(Block)`
  flex-direction: column;
  ${props => props.w && `width: ${props.w};`}
`;

export const Logo = () => <svg xmlns="http://www.w3.org/2000/svg" width="29.229" height="41.626" viewBox="0 0 29.229 41.626"><path d="M9.757,41.626,12.234,33.3H0C2.161,22.1,4.275,11.147,6.4.113H8.4C7.512,5.855,6.616,11.49,5.79,17.134A28.366,28.366,0,0,0,5.373,22.3c.21,5.4,3.892,8.694,9.432,8.615,5.425-.078,9.163-3.456,9.032-8.8A107.72,107.72,0,0,0,22.382,10.1c-.458-3.3-1.01-6.6-1.538-10.008L22.817,0c2.13,11.016,4.25,21.98,6.412,33.164H17.009l2.436,8.462Z" fill="#aa8c66"/></svg>

export const CircleSizes = {
  s: 49,
  m: 69,
  l: 73,
  xl: 146
}
export const Circle = styled.div`
  ${({ size }) => css`
    width: ${CircleSizes[size]}px;
    height: ${CircleSizes[size]}px;
  `}
  border: 1px solid ${props => props.theme.fontParagraph};
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ children, theme, rotation }) => !children && css`
    &:after {
      content: '';
      height: 100%;
      width: 1px;
      background-color: ${theme.fontParagraph};
      ${rotation && `transform: rotateZ(${rotation}deg);`}
    }
  `}

  
`;

export const Divider = styled.div`
  ${({ vertical, length }) => vertical
    ? css`
      width: 1px;
      height: ${length || '100%'};
    `
    : css`
      height: 1px;
      width: ${length || '100%'};
    `}
  transition: all .4s linear;
  background: ${({ camouflage, theme }) => camouflage ? theme.bgColor : theme.fontParagraph};
`;

export const Camouflage = ({ w, length }) => (
  <Layer top="0">
    <Row justify="center" h="100%">
      <Divider vertical length={length} camouflage css={w && css`width: ${w};`} />
    </Row>
  </Layer>
);

const Half = styled(Row)`
  width: 50%;
  height: 100%;
  justify-content: center;
  &:before,
  &:after {
    content: '';
    display: block;
  }
`;

export const LeftHalf = styled(Half)`
  &:after { flex-grow: 2 }
  &:before { flex-grow: 1 }
`;

export const RightHalf = styled(Half)`
  &:after { flex-grow: 1 }
  &:before { flex-grow: 2 }
`;

export const SlideImage = styled.img`
  ${({ greedy }) => greedy && css`
    width: 100%;
    height: 100%;
  `}
  object-fit: cover;
`;

export const ChapterCaption = ({ children }) => (
  <Block>
    <Layer css={css`
      top: 16px;
      
      & > * {
        white-space: nowrap;
        transform: translateX(-50%);
        display: inline-block;
        text-align: center;
      }
    `}>
      {children}
    </Layer>
  </Block>
);
