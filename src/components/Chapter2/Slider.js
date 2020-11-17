import React, { useRef } from 'react';
import styled from '@emotion/styled';
import NavBar from './NavBar';
import NavBarProvider from '../../providers/NavBarProvider';
import Origins1 from './slides/1.Origins';

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
        <Origins1 index={0} />
        <NavBar sliderRef={pinSectionRef} />
      </NavBarProvider>
    </SliderRoot>
  );
};
