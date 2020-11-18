import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: ${props => props.size / 2}px;
  height: ${props => props.size}px;
  border-radius: ${({ size, right }) => right ? `0 ${size}px ${size}px 0` : `${size}px 0 0 ${size}px`};
  overflow: hidden;
`;

const FullWatchImage = styled.img`
  height: 100%;
  object-fit: contain;
  width: 200%;
  max-width: 200%;
  transform: translateX(${props => props.right ? '-50%' : '0'});
`;

const ImageHeight = {
  large: 520,
  small: 376
}

export const HalfWatches = ({ large, right, img }) => {
  const size = large ? ImageHeight.large : ImageHeight.small;
  return (
    <Wrapper size={size} right={right}>
      <FullWatchImage src={img} right={right} />
    </Wrapper>
  )
};

const WatchesImage = styled.img`
  object-fit: contain;
  width: auto;
`;

export const Watches = ({ large, ...props }) => {
  const height = large ? ImageHeight.large : ImageHeight.small
  return (
    <WatchesImage height={height} {...props} />
  )
}
