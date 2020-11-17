import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useNavBar } from '../../providers/NavBarProvider';

gsap.registerPlugin(ScrollTrigger);

const SlideRoot = styled.div`
  width: 100%;
  height: 100vh;
`;

export default function Slide({ index, children }) {
  const { setSlideHeading } = useNavBar();
  const slideRef = useRef(null)

  useEffect(() => {
    const sc = ScrollTrigger.create({
      trigger: slideRef.current,
      start: 'top center',
      end: 'bottom center',
      onToggle: (self) => {
        if (self.isActive) {
          setSlideHeading(index);
        }
      },
    });

    return () => sc.kill()
	}, [index, setSlideHeading]);

  return (
    <SlideRoot ref={slideRef}>
      {children}
    </SlideRoot>
  );
};
