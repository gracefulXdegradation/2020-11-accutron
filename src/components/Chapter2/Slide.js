import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { useNavBar } from '../../providers/NavBarProvider';
import { css } from '@emotion/core';
import { Column, Row } from '../UIKit';
import { BrowserView, MobileView } from 'react-device-detect';
import { useStoryState } from '../../providers/StoryStateProvider';
import { zIndex } from '../../styles/const';

const Wrapper = styled.div`
  pointer-events: ${props => props.isActionable ? 'all' : 'none'};
  position: relative;
  z-index: ${props => props.isBackground ? zIndex.backgroundSlide : zIndex.foregroundSlide};
`

const SlideRoot = styled.section`
  width: 100%;
  position: relative;
  height: ${({ subslides }) => subslides * 100}vh;
  opacity: ${({ visible }) => visible ? 1 : 0};
`;

const Slide = ({ index, children, startVisible, isBackground, isActionable, subslides = 1, animate }) =>  {
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

      return () => {
        tl.scrollTrigger.kill()
        tl.kill()
      };
    }
  }, [animate, index, setSlideHeading, hasChapterInit])

  return (
    <Wrapper isBackground={isBackground} isActionable={isActionable}>
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
    </Wrapper>
  );
};

export default Slide;
