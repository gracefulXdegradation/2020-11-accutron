import React, { useRef } from 'react';
import styled from '@emotion/styled';
import NavBar from './NavBar';
import NavBarProvider from '../../providers/NavBarProvider';
import TheSpaceview1 from './slides/1.TheSpaceview';
import IconicDesign2 from './slides/2.IconicDesign';
import IconicDesign3 from './slides/3.IconicDesign';
import Legacy6 from './slides/6.Legacy';

const SliderRoot = styled.div`
  position: relative;
  overflow: hidden;
`;

const headings = ['the spaceview', 'iconic design', 'spaceview 2020', 'dna', 'the legacy collection']

export default function Slider() {
  const pinSectionRef = useRef(null);

  return (
    <SliderRoot ref={pinSectionRef}>
      <NavBarProvider headings={headings}>
        <NavBar sliderRef={pinSectionRef} />
        <TheSpaceview1 index={0} />
        <IconicDesign2 index={1} />
        <IconicDesign3 index={1} />
        <Legacy6 index={2} />
      </NavBarProvider>
    </SliderRoot>
  );
};
