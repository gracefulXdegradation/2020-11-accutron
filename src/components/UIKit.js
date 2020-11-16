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

  &:after {
    content: '';
    height: 100%;
    width: 1px;
    background-color: ${props => props.theme.fontParagraph};
    ${props => props.rotation && `transform: rotateZ(${props.rotation}deg);`}
  }
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
