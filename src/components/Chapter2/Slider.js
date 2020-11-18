import React, { useRef } from 'react';
import styled from '@emotion/styled';
import NavBar from './NavBar';
import NavBarProvider from '../../providers/NavBarProvider';
import TheSpaceview1 from './slides/1.TheSpaceview';
import IconicDesign2 from './slides/2.IconicDesign';
import IconicDesign3 from './slides/3.IconicDesign';
import Spaceview20204 from './slides/4.Spaceview2020';
import DNA5 from './slides/5.DNA';
import DNA6 from './slides/6.DNA';
import Legacy7 from './slides/7.Legacy';
import Legacy8 from './slides/8.Legacy';
import Legacy9 from './slides/9.Legacy';
import Legacy11 from './slides/11.Legacy';

const SliderRoot = styled.div`
  position: relative;
  overflow: hidden;
`;

const headings = ['the spaceview', 'iconic design', 'spaceview 2020', 'dna', 'the legacy']

export default function Slider() {
  const pinSectionRef = useRef(null);

  return (
    <SliderRoot ref={pinSectionRef}>
      <NavBarProvider headings={headings}>
        <NavBar sliderRef={pinSectionRef} />
        <TheSpaceview1 index={0} />
        <IconicDesign2 index={1} />
        <IconicDesign3 index={1} />
        <Spaceview20204 index={2} />
        <DNA5 index={3} />
        <DNA6 index={3} />
        <Legacy7 index={4} />
        <Legacy8 index={4} />
        <Legacy9 index={4} />
        <Legacy11 index={4} />
      </NavBarProvider>
    </SliderRoot>
  );
};
