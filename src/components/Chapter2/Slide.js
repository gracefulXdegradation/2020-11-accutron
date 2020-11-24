import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { useNavBar } from '../../providers/NavBarProvider';
import { css } from '@emotion/core';
import { Column, Row } from '../UIKit';
import { BrowserView, MobileView } from 'react-device-detect';
import { useStoryState } from '../../providers/StoryStateProvider';

const SlideRoot = styled.section`
  width: 100%;
  position: relative;
  height: ${({ subslides }) => subslides * 100}vh;
  opacity: ${({ visible }) => visible ? 1 : 0};
`;

const Slide = ({ index, children, startVisible, subslides = 1, animate }) =>  {
  const { hasChapterInit } = useStoryState();
  const { setSlideHeading } = useNavBar();
  const slideRef = useRef(null)
  const slideInnerRef = useRef(null)

  useEffect(() => {
    if (hasChapterInit) {
      const tl = animate(slideRef.current, {
        onEnter: () => setSlideHeading(index),
        onEnterBack: () => setSlideHeading(index),
      });

      return () => tl.kill();
    }
  }, [animate, index, setSlideHeading, hasChapterInit])

  return (
    <div css={css`pointer-events: none;`}>
      <BrowserView renderWithFragment>
        <SlideRoot ref={slideRef} visible={startVisible} subslides={subslides}>
          <Row ref={slideInnerRef} h="100vh" css={css`padding: 0 200px;`}>
            {children}
          </Row>
        </SlideRoot>
      </BrowserView>

      <MobileView renderWithFragment>
        <SlideRoot ref={slideRef} visible={startVisible} subslides={subslides}>
          <Column ref={slideInnerRef} h="100vh" css={css`padding: 228px 0 77px;`}>
            {children}
          </Column>
        </SlideRoot>
      </MobileView>
    </div>
  );
};

export default Slide;
