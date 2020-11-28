import React, { useRef } from 'react';
import styled from '@emotion/styled';
import NavBar from './NavBar';
import NavBarProvider from '../../providers/NavBarProvider';
import { BrandBackground } from './BrandBackground';
import { Background } from '../UIKit';
import { css } from '@emotion/core';
import Ending from './Ending';

import data from '../../data/story';

const chapter2 = data.chapters[1]

const SliderRoot = styled.div`
  position: relative;
  overflow: hidden;
`;

const headings = ['the spaceview', 'iconic design', '2020', 'dna', 'the legacy']

export default function Slider() {
  const pinSectionRef = useRef(null);

  return (
    <SliderRoot ref={pinSectionRef}>
      <Background css={css`height: 100%;`}>
        <NavBarProvider headings={headings}>
          <BrandBackground sliderRef={pinSectionRef} chapter={2} />
          <NavBar sliderRef={pinSectionRef} />

          {chapter2.slides.map(({component: Slide, title, ...d}) => (
            <Slide index={title} data={d} />
          ))}

          <Ending />
        </NavBarProvider>
      </Background>
    </SliderRoot>
  );
};
