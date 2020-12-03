import React, { useRef } from 'react';
import styled from '@emotion/styled';
import NavBar from './NavBar';
import NavBarProvider from '../../providers/NavBarProvider';
import BrandBackground from './BrandBackground';

import data from '../../data/story';

const chapter1 = data.chapters[0]

const SliderRoot = styled.div`
  position: relative;
  overflow: hidden;
`;

const headings = ['origins', 'technology', 'legacy']

export default function Slider() {
  const pinSectionRef = useRef(null);

  return (
    <SliderRoot ref={pinSectionRef}>
      <NavBarProvider headings={headings}>
        <BrandBackground sliderRef={pinSectionRef} />

        {chapter1.slides.map(({component: Slide, title, ...d}, i) => (
          <Slide index={title} data={d} key={`${title}-${i}`} />
        ))}

        <NavBar sliderRef={pinSectionRef} />
      </NavBarProvider>
    </SliderRoot>
  );
};
