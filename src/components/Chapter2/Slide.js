import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useSlideHeading } from '../../providers/SlideHeadingProvider';

gsap.registerPlugin(ScrollTrigger);

const SlideRoot = styled.div`
  width: 100%;
  height: 100vh;
`;

export default function Slide({ index, children }) {
  const { setSlideHeading } = useSlideHeading();
  const slideRef = useRef(null)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: slideRef.current,
      start: 'top center',
      end: 'bottom center',
      onToggle: (self) => {
        if (self.isActive) {
          setSlideHeading(index);
        }
      },
    });
	}, [index, setSlideHeading]);

  return (
    <SlideRoot ref={slideRef}>
      {children}
    </SlideRoot>
  );
};
