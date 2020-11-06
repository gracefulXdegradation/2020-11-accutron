import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { gsap, ScrollTrigger } from 'gsap/all';
import { H2 } from '../styles/typography';
import { useSlideHeading } from '../providers/SlideHeadingProvider';

gsap.registerPlugin(ScrollTrigger);

const SlideRoot = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Slide({ index }) {
  const { setSlideHeading } = useSlideHeading();
  const slideRef = useRef(null)

  useEffect(() => {
    console.log(slideRef)
    ScrollTrigger.create({
      trigger: slideRef.current,
      start: 'top top',
      end: 'bottom top',
      onToggle: (self) => {
        if (self.isActive) {
          setSlideHeading(index);
        }
      },
    });
	}, [index, setSlideHeading]);

  return (
    <SlideRoot ref={slideRef}>
      <H2>{index}</H2>
    </SlideRoot>
  );
};
