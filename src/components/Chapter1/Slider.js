import React, { useRef } from 'react';
import styled from '@emotion/styled';
import NavBar from './NavBar';
import SlideHeadingProvider from '../../providers/SlideHeadingProvider';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';

const SliderRoot = styled.div`
  position: relative;
`;

const headings = ['origins', 'technology', 'legacy']

export default function Slider() {
  const pinSectionRef = useRef(null);

  return (
    <SliderRoot ref={pinSectionRef}>
      <SlideHeadingProvider headings={headings}>
        <Slide1 index={0} first />
        <Slide2 index={1} />
        <Slide3 index={2} last />
        <NavBar sliderRef={pinSectionRef} />
      </SlideHeadingProvider>
    </SliderRoot>
  );
};
