import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useSlideHeading } from '../../providers/SlideHeadingProvider';

gsap.registerPlugin(ScrollTrigger);

const SlideRoot = styled.div`
  width: 100%;
  height: 100vh;
  opacity: 0;
`;

const Slide = React.forwardRef(({ index, children }, slideRef) =>  {
  const { setSlideHeading } = useSlideHeading();
  // const slideRef = useRef(null)

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
	}, [index, setSlideHeading, slideRef]);

  return (
    <SlideRoot ref={slideRef}>
      {children}
    </SlideRoot>
  );
});

export default Slide;
