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

export default function Slider() {
  const pinSectionRef = useRef(null);

  return (
    <SliderRoot ref={pinSectionRef}>
      <Background css={css`height: 100%;`}>
        <NavBarProvider>
          <BrandBackground sliderRef={pinSectionRef} chapter={2} />
          <NavBar sliderRef={pinSectionRef} />

          {chapter2.slides.map(({component: Slide, title, ...d}, i) => (
            <Slide index={title} data={d} key={`${title}-${i}`} />
          ))}

          <Ending />
        </NavBarProvider>
      </Background>
    </SliderRoot>
  );
};
