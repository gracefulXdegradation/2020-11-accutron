import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { typefaceParagraph, xlScreenBreakpoint } from "../styles/const";
import { AccutronLogo } from '../data/assets';
import { H4 } from '../styles/typography';

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

export const CircleSizes = {
  s: 49,
  m: 69,
  l: 73,
  xl: 146
}

const CircleSmallScreenSizes = {
  s: 49,
  m: 49,
  l: 69,
  xl: 73
}

export const Circle = styled.div`
  ${({ size, logo }) => css`
    width: ${CircleSizes[size]}px;
    height: ${CircleSizes[size]}px;
    min-width: ${CircleSizes[size]}px;
    min-height: ${CircleSizes[size]}px;
    ${!logo && css`margin-bottom: 16px;`}

    @media(max-width: ${xlScreenBreakpoint}) {
      width: ${CircleSmallScreenSizes[size]}px;
      height: ${CircleSmallScreenSizes[size]}px;
      min-width: ${CircleSmallScreenSizes[size]}px;
      min-height: ${CircleSmallScreenSizes[size]}px;
      ${!logo && css`margin-bottom: 10px;`}
    }
  `}
  border: 1px solid ${props => props.theme.fontParagraph};
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ logo, theme, rotation }) => logo ? css`
    padding: 12%;
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      background-image: url(${AccutronLogo});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  ` : css`
    ${rotation && `transform: rotateZ(${rotation}deg);`}
    &:after {
      content: '';
      height: 100%;
      width: 1px;
      background-color: ${theme.fontParagraph};
    }
  `}
`;

export const Divider = styled.div`
  ${({ vertical, length }) => vertical
    ? css`
      width: 1px;
      max-width: 1px;
      height: ${length || '100%'};
    `
    : css`
      height: 1px;
      max-height: 1px;
      width: ${length || '100%'};
    `}
  background: ${({ camouflage, theme }) => camouflage ? theme.bgColor : theme.fontParagraph};
`;

export const Camouflage = ({ w, length }) => (
  <Layer top="0">
    <Row justify="center" h="100%">
      <Divider vertical length={length} camouflage css={w && css`width: ${w}; max-width: ${w}; transition: all .4s linear; transition-delay: .2s;`} />
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
  padding: ${props => props.mobile ? '0 80px 0 40px' : '0 90px'};
`;

export const RightHalf = styled(Half)`
  &:after { flex-grow: 1 }
  &:before { flex-grow: 2 }
  padding: ${props => props.mobile ? '0 40px 0 80px' : '0 90px'};
`;

export const SlideImage = styled.img`
  ${({ greedy }) => greedy && css`
    width: 100%;
    height: 100% !important;
  `}
  object-fit: cover;
`;

export const ChapterCaption = ({ children }) => (
  <Block>
    <Layer css={css`
      top: 16px;
      @media(max-width: ${xlScreenBreakpoint}) {
        top: 10px;
      }

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

export const Em = styled.em`
  font-style: normal;
  color: ${props => props.theme.fontParagraph};
`;

const GlowingCircle = styled(Column)`
  align-items: center;
  cursor: pointer;

  ${Circle}, ${Circle}:after, ${H4} {
    transition: transform .2s ease-in;
  }

  &:hover {
    ${Circle} { 
      transform: scale(1.05);
      box-shadow: 0px 0px 4px 1px #FFF inset;

      &:after {
        box-shadow: 0px 0px 4px 1px #FFF;
        transform: rotateZ(${({rotation = 0}) => rotation + 90}deg);
      }
    }

    ${Layer} ${H4} {
      transform: translateX(-50%) scale(1.05);
    }

    ${H4} {
      transform: scale(1.05);
    }
  }
`

export const HoverableCircle = React.forwardRef(({ size, children, rotation, wrapChildren, onClick }, ref) => {
  return (
    <GlowingCircle rotation={rotation} onClick={onClick}>
      <Circle ref={ref} size={size} rotation={rotation} css={css`margin: 0 !important;`} />
      { wrapChildren ? (
        <ChapterCaption>
          {children}
        </ChapterCaption>
      ) : <div css={css`
        margin-top: 16px;
        @media(max-width: ${xlScreenBreakpoint}) {margin-top: 10px;}
      `}>{children}</div> }
    </GlowingCircle>
  )
})

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${props => props.position};
`

const ShopNow = styled.a`
  font-size: 20px;
  line-height: 1em;
  padding: 20px 83px 17px;
  font-family: ${typefaceParagraph};
  border: 1px solid ${props => props.theme.borderColor};
  text-transform: uppercase;
  background: transparent;
  color: ${props => props.theme.fontHeaderPrimary};
  cursor: pointer;
  transition: box-shadow .2s ease-in, opacity .2s ease;
  text-decoration: none;
  white-space: nowrap;
  display: inline-block;

  @media(max-width: ${xlScreenBreakpoint}) {
    padding: 16px 40px 13px;
    font-size: 16px;
  }

  &:hover {
    box-shadow: 0px 0px 4px 1px #FFF inset;
    color: ${props => props.theme.fontHeaderPrimary};
  }
`

export const ShopLink = ({ url, style, isHidden }) => {
  return (
    <ShopNow href={url} target="_blank" css={[style, isHidden && css`opacity: 0; pointer-events: none;`]}>Shop Now</ShopNow>
  )
}
