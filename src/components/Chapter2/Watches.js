import React from 'react';
import styled from '@emotion/styled';
import { Row } from '../UIKit';

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
`;

const FullWatchImage = styled.img`
  height: 100%;
  object-fit: contain;
  width: 200%;
  max-width: 200%;
  transform: translateX(${props => props.right ? '-50%' : '0'});
`;

export const WatchesSafeArea = styled(Row)`
  height: 100%;
  padding: 220px 0;
`

export const HalfWatches = ({ right, src, alt = '' }) => {
  return (
    <WatchesSafeArea justify={right ? 'flex-start' : 'flex-end'} align="center">
      <Wrapper>
        <FullWatchImage src={src} alt={alt} right={right} />
      </Wrapper>
    </WatchesSafeArea>
  )
};

const WatchesImage = styled.img`
  object-fit: contain;
  width: auto;
  height: 100%;
`;

export const Watches = (props) => {
  return (
    <WatchesImage {...props} />
  )
}
