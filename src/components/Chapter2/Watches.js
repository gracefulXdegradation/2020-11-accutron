import React from 'react';
import styled from '@emotion/styled';
import { Row } from '../UIKit';
import { css } from '@emotion/core';
import { xlScreenBreakpoint } from '../../styles/const';

const Wrapper = styled.div`
  height: 100%;
  ${props => props.maxHeight && `max-height: ${props.maxHeight};`}
  width: ${props => props.isHidden ? 0 : '100%'};
  position: relative;
  overflow: hidden;
`;

const HalfWatchImage = styled.img`
  height: 100% !important;
  max-height: 100%;
  position: absolute;
  width: auto !important;
  max-width: none !important;
  ${(props) => props.right ? css`
    object-position: right;
    left: 0;
  ` : css`
    object-position: left;
    right: 0;
  `}
`

export const WatchesSafeArea = styled(Row)`
  height: 100%;
  padding: 220px 0;
  @media(max-width: ${xlScreenBreakpoint}) {
    padding: 158px 0;
  }
  align-items: center;
`

export const HalfWatches = React.forwardRef(({ right, src, isHidden, alt = '', maxHeight }, ref) => {
  return (
    <Wrapper ref={ref} isHidden={isHidden} maxHeight={maxHeight}>
      <HalfWatchImage src={src} alt={alt} right={right}/>
    </Wrapper>
  )
});

const WatchesImage = styled.img`
  object-fit: contain;
  width: auto;
  height: 100% !important;
`;

export const Watches = React.forwardRef((props, ref) => {
  return (
    <WatchesImage ref={ref} {...props} />
  )
})

const WatchSliderRoot = styled.div`
  height: 100%;
  display: block;
  width: 100%;
  text-align: center;
`

const WatchSliderImageWrapper = styled.span`
  height: 100%;
  display: inline-block;
  position: relative;

  & > img:first-of-type {
    height: 100%;
    width: auto;
    display: inline-block;
  }

  & > img:not(:first-of-type) {
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    object-fit: cover;
    object-position: right;
    width: 0;
  }
`;

export const WatchSlider = React.forwardRef(({ children, style }, ref) => {
  return (
    <WatchSliderRoot
      ref={ref}
      css={style}
    >
      <WatchSliderImageWrapper>
        {children}
      </WatchSliderImageWrapper>
    </WatchSliderRoot>
  )
})
