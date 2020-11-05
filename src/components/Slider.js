import React from 'react';
import styled from '@emotion/styled';
import { useRef } from 'react';
import { H2 } from '../styles/typography';
import NavBar from './NavBar';

const SliderRoot = styled.div`
  position: relative;
`;

const SlideWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Slider() {
  const pinSectionRef = useRef(null);

  return (
    <SliderRoot ref={pinSectionRef}>
      <NavBar sliderRef={pinSectionRef} />

      {[1,2,3].map(i => (
        <SlideWrapper key={i}>
          <H2>{i}</H2>
        </SlideWrapper>
      ))}
    </SliderRoot>
  );
};
