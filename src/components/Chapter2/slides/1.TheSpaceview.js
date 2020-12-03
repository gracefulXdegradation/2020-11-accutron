import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { P } from '../../../styles/typography';
import { Column, Divider, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { HalfWatches, WatchesSafeArea } from '../Watches';
import { animateFadeOut, fadeInOut, hideWatch, revealWatch } from '../../../helpers/animation';
import styled from '@emotion/styled';

const mobHalfImageMaxHeight = '375px'

const Caret = styled.i`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-top: 25px solid ${props => props.theme.borderColor};
  animation: glow 2s linear infinite;

  @keyframes glow {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    50% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0;
      transform: translateY(10px);
    }
  }

  &:before{
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
    border-top: 25px solid ${props => props.theme.bgColor};
    position: relative;
    top: -27px; 
    left: -35px;
  }
`

export default function TheSpaceview(props) {
  const { data: d } = props
  const slide1Ref = useRef(null)
  const slide2Ref = useRef(null)
  const slide2_5Ref = useRef(null)
  const slide3Ref = useRef(null)
  const slide4Ref = useRef(null)
  const slide5Ref = useRef(null)
  const slide6Ref = useRef(null)

  const animation = (el, props) => animateFadeOut(el, props, tl => {

    hideWatch(tl, slide1Ref.current)

    fadeInOut(tl, slide2Ref.current);
    slide2_5Ref.current && fadeInOut(tl, slide2_5Ref.current);
    fadeInOut(tl, slide3Ref.current);
    fadeInOut(tl, slide4Ref.current);
    slide5Ref.current && fadeInOut(tl, slide5Ref.current);

    revealWatch(tl, slide6Ref.current)
  })
  
  return (
    <>
      <BrowserView renderWithFragment>
        <Slide {...props} startVisible subslides={5} animate={animation}>
          <Row w="50%" h="100%">
            <WatchesSafeArea justify="flex-end">
              <HalfWatches {...d.images[0]} />
            </WatchesSafeArea>
          </Row>
          <Row w="50%" h="100%">
            <Layer>
              <Row h="100%">
                <WatchesSafeArea justify="flex-start">
                  <HalfWatches {...d.images[1]} right ref={slide1Ref} />
                </WatchesSafeArea>
              </Row>
            </Layer>
            
            <Layer ref={slide2Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="flex-start" justify="center">
                <P css={css`position: absolute; transform: translateY(-50%); max-width: 520px; padding: 20px 0; margin: 0 32px;`}>
                  {d.copy[0].text}
                </P>
                <P css={css`position: absolute; transform: translateY(50%); max-width: 520px; padding: 20px 0; margin: 0 32px;`}>
                {d.copy[1].text}
                </P>
              </Column>
            </Layer>

            <Layer ref={slide3Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="flex-start" justify="center">
                <P css={css`position: absolute; transform: translateY(-50%); max-width: 520px; padding: 20px 0; margin: 0 32px;`}>
                {d.copy[2].text}
                </P>
                <P css={css`position: absolute; transform: translateY(50%); max-width: 520px; padding: 20px 0; margin: 0 32px;`}>
                {d.copy[3].text}
                </P>
              </Column>
            </Layer>

            <Layer ref={slide4Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" align="flex-start" justify="center">
                <P css={css`position: absolute; transform: translateY(-50%); max-width: 520px; padding: 20px 0; margin: 0 32px;`}>
                {d.copy[4].text}
                </P>
              </Column>
            </Layer>

            <Layer>
              <Column w="100%" h="100%">
                <WatchesSafeArea justify="flex-start">
                  <HalfWatches ref={slide6Ref} {...d.images[2]} right isHidden />
                </WatchesSafeArea>
              </Column>
            </Layer>
          </Row>

          <Layer left="0">
            <Column w="100%" h="100%" justify="flex-end" align="center" css={css`padding-bottom: 60px;`}>
              <Caret />
            </Column>
          </Layer>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide {...props} startVisible subslides={6} animate={animation}>
          <Row h="100%" align="center" css={css`padding: 20px 0;`}>
            <Row w="50%" h="100%" justify="flex-end" align="center">
                <HalfWatches {...d.images[0]} maxHeight={mobHalfImageMaxHeight} />
            </Row>

            <Row w="50%" h="100%">
              <Layer>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <HalfWatches ref={slide1Ref} {...d.images[1]} right maxHeight={mobHalfImageMaxHeight} />
                </Column>
              </Layer>

              <Layer ref={slide2Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <P mobile css={css`margin-left: 8px; max-width: 165px;`}>
                    {d.copy[0].text}
                  </P>
                </Column>
              </Layer>

              <Layer ref={slide2_5Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <P mobile css={css`margin-left: 8px; max-width: 165px;`}>
                    {d.copy[1].text}
                  </P>
                </Column>
              </Layer>

              <Layer ref={slide3Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <P mobile css={css`margin-left: 8px; max-width: 165px;`}>
                    {d.copy[2].text}
                  </P>
                </Column>
              </Layer>

              <Layer ref={slide4Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <P mobile css={css`margin-left: 8px; max-width: 165px;`}>
                    {d.copy[3].text}
                  </P>
                </Column>
              </Layer>

              <Layer ref={slide5Ref} css={css`opacity: 0;`}>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <P mobile css={css`margin-left: 8px; max-width: 165px;`}>
                    {d.copy[4].text}
                  </P>
                </Column>
              </Layer>

              <Layer>
                <Column w="100%" h="100%" align="flex-start" justify="center">
                  <HalfWatches ref={slide6Ref} {...d.images[2]} right isHidden maxHeight={mobHalfImageMaxHeight} />
                </Column>
              </Layer>
            </Row>
          </Row>
        </Slide>
      </MobileView>
    </>
  );
};
