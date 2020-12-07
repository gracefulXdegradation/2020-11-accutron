import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { useNavBar } from '../../providers/NavBarProvider';
import { css } from '@emotion/core';
import { Column, Row } from '../UIKit';
import { isBrowser, isMobile, withOrientationChange } from "react-device-detect";
import { useStoryState } from '../../providers/StoryStateProvider';

const SlideRoot = styled.section`
  width: 100%;
  height: ${({ subslides }) => subslides * 100}vh;
  opacity: ${({ visible }) => visible ? 1 : 0};
`;

const Slide = ({ index, children, startVisible, subslides = 1, animate, isPortrait, isLandscape }) =>  {
  const { setSlideHeading } = useNavBar();
  const { hasChapterInit } = useStoryState();
  const slideRef = useRef(null)
  const slideInnerRef = useRef(null)

  useEffect(() => {
    if (hasChapterInit) {
      const tl = animate(slideRef.current, {
        onEnter: () => setSlideHeading(index),
        onEnterBack: () => setSlideHeading(index),
      });

      return () => {
        tl.scrollTrigger.kill()
        tl.kill()
      };
    }
  }, [animate, index, setSlideHeading, hasChapterInit])

  return (
    <>
      {(isBrowser || (isMobile && isLandscape)) && (
        <SlideRoot ref={slideRef} visible={startVisible} subslides={subslides}>
          <Row ref={slideInnerRef} h="100vh">
            {children}
          </Row>
        </SlideRoot>
      )}
      {isMobile && isPortrait && (
        <SlideRoot ref={slideRef} visible={startVisible} subslides={subslides}>
          <Column ref={slideInnerRef} h="100vh" css={css`padding: 196px 60px 82px;`}>
            {children}
          </Column>
        </SlideRoot>
      )}
    </>
  );
};

export default withOrientationChange(Slide);
