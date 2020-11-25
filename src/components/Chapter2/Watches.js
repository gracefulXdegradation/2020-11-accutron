import React from 'react';
import styled from '@emotion/styled';
import { Row } from '../UIKit';

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
`;

const FullWatchImage = styled.img`
  height: 100% !important;
  object-fit: contain;
  width: 200%;
  max-width: 200% !important;
  transform: translateX(${props => props.right ? '-50%' : '0'});
`;

export const WatchesSafeArea = styled(Row)`
  height: 100%;
  padding: 220px 0;
  align-items: center;
`

export const HalfWatches = ({ right, src, alt = '' }) => {
  return (
    <Wrapper>
      <FullWatchImage src={src} alt={alt} right={right} />
    </Wrapper>
  )
};

const WatchesImage = styled.img`
  object-fit: contain;
  width: auto;
  height: 100% !important;
`;

export const Watches = (props) => {
  return (
    <WatchesImage {...props} />
  )
}
