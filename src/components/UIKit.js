import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { typefaceParagraph, xlScreenBreakpoint } from "../styles/const";
import { AccutronLogo, HSLogo } from '../data/assets';
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
  pointer-events: all;

  @media(max-width: ${xlScreenBreakpoint}) {
    padding: 16px 40px 13px;
    font-size: 16px;
  }

  &:hover {
    box-shadow: 0px 0px 4px 1px #FFF inset;
    color: ${props => props.theme.fontHeaderPrimary};
  }
`

export const ShopLink = ({ url, style }) => {
  return (
    <ShopNow href={url} target="_blank" css={style}>Shop Now</ShopNow>
  )
}

export const HighsnobietyLogo = ({ style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="184" height="32" viewBox="0 0 184 32" style={style}>
    <title>Highsnobiety logo</title>
    <path d="M103.37384,22.35638c7.46222,0,7.46222-5.51428,7.46222-11.17828,0-5.72418,0-11.1781-7.46222-11.1781-7.46191,0-7.46191,5.45392-7.46191,11.1781C95.91193,16.8421,95.91193,22.35638,103.37384,22.35638Zm0-19.12017c2.54749,0,2.87726,2.39758,2.87726,7.94189,0,5.54395-.32977,7.94147-2.87726,7.94147-2.54718,0-2.877-2.39752-2.877-7.94147C100.49683,5.63379,100.82666,3.23621,103.37384,3.23621Zm25.07007,13.03625c0-2.9668-.83923-5.03454-4.04572-5.48419v-.05982c2.45734-.47937,3.68592-2.27746,3.68592-4.76507,0-4.615-2.847-5.60388-6.29315-5.60388h-8.03168v21.637h8.00165C123.67877,21.99652,128.44391,21.75684,128.44391,16.27246ZM118.28436,3.68591h2.78742a2.59194,2.59194,0,0,1,2.607,2.75708c0,2.09784-1.37842,2.75721-2.36749,2.75721h-3.02692Zm0,14.984V12.52655h2.63758c2.27746,0,2.99658,1.1687,2.99658,3.08661,0,3.027-2.15759,3.05676-3.11664,3.05676ZM136.03.3595h-4.52515v21.637H136.03ZM80.92474,5.97717h.06012l5.90357,16.01935H92.8523V.3595H88.62665V15.53986H88.5669L82.81262.3595H76.69928v21.637h4.22546ZM151.7395,18.66992h-7.52173v-6.3233h6.71277V9.02026h-6.71277V3.8764H151.5V.3595H139.69232v21.637H151.7395ZM4.52869,12.34662H9.71307v9.6499h4.52515V.3595H9.71307V9.02026H4.52869V.3595H.00354v21.637H4.52869ZM178.8681.3595l-3.44616,9.14044L172.18543.3595H152.9953V3.8764h5.6236V21.99652h4.32867V3.8764h5.701l4.25586,10.62812v7.492h4.52521v-7.492L183.48334.3595Zm-156.35553,0H17.98749v21.637h4.52508ZM47.94489,12.34662H53.1294v9.6499h4.52514V.3595H53.1294V9.02026H47.94489V.3595H43.41956v21.637h4.52533ZM33.99939,22.35638a41.2753,41.2753,0,0,0,6.1134-.71966V10.6687H33.13031V13.995h2.45728V18.79a7.11175,7.11175,0,0,1-2.2475.41931c-2.57733,0-3.23663-1.19842-3.23663-7.97143,0-4.19562,0-8.00171,2.81719-8.00171,2.39734,0,2.727,1.76831,2.69684,3.77606h4.4953C40.38263,2.48712,37.62549,0,33.19025,0,25.788,0,25.51837,5.544,25.51837,10.99817,25.51837,19.20935,26.38745,22.35638,33.99939,22.35638Zm32.44757,0c3.44635,0,7.55206-.6596,7.55206-6.26355,0-6.80255-9.11041-6.443-9.11041-10.54882a2.10766,2.10766,0,0,1,2.33765-2.3078c1.82812,0,2.09772,1.64849,2.09772,3.26666h4.40545C74.02887,1.97766,71.84137,0,67.43591,0c-5.5141,0-7.13232,2.69684-7.13232,6.0835,0,6.44305,9.11047,6.683,9.11047,10.57855a2.16335,2.16335,0,0,1-2.27789,2.45752c-2.48724,0-2.57721-1.738-2.57721-3.80585H60.03387C59.79419,19.05951,60.843,22.35638,66.447,22.35638ZM0,32H177.41174V28.67358H0Z" fill="#fff"></path>
  </svg>
)
