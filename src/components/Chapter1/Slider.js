import React from 'react';
import styled from '@emotion/styled';
import { useRef } from 'react';
import NavBar from './NavBar';
import Slide from './Slide';
import SlideHeadingProvider from '../../providers/SlideHeadingProvider';

import Slide1 from './slides/Slide1';

const SliderRoot = styled.div`
  position: relative;
`;

const headings = ['origins', 'technology', 'legacy']

export default function Slider() {
  const pinSectionRef = useRef(null);

  return (
    <SliderRoot ref={pinSectionRef}>
      <SlideHeadingProvider headings={headings}>
        <Slide index={0}>
          <Slide1 />
        </Slide>
        <Slide index={1}>
          <Slide1 />
        </Slide>
        <Slide index={2}>
          <Slide1 />
        </Slide>
        <NavBar sliderRef={pinSectionRef} />
      </SlideHeadingProvider>
    </SliderRoot>
  );
};
