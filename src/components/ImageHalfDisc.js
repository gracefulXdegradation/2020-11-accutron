import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: ${props => props.size / 2}px;
  height: ${props => props.size}px;
  border-radius: ${({ size, right }) => right ? `0 ${size}px ${size}px 0` : `${size}px 0 0 ${size}px`};
  overflow: hidden;
`;

const Image = styled.div`
  width: 200%;
  height: 100%;
  background: url(${props => props.img}) no-repeat;
  background-position: center center;
  transform: translateX(${props => props.right ? '-50%' : '0'});
`;

const ImageHalfDisc = ({ size, right, img }) => {
  return (
  <Wrapper size={size} right={right}>
    <Image img={img} right={right} />
  </Wrapper>
)};

export default ImageHalfDisc
