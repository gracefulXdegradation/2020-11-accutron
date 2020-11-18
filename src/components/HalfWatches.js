import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: ${props => props.size / 2}px;
  height: ${props => props.size}px;
  border-radius: ${({ size, right }) => right ? `0 ${size}px ${size}px 0` : `${size}px 0 0 ${size}px`};
  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
  object-fit: contain;
  width: 200%;
  max-width: 200%;
  transform: translateX(${props => props.right ? '-50%' : '0'});
`;

const HalfWatches = ({ large, right, img }) => {
  const size = large ? 500 : 376;
  return (
  <Wrapper size={size} right={right}>
    <Image src={img} right={right} />
  </Wrapper>
)};

export default HalfWatches
