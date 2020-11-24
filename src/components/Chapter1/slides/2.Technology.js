import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { P } from '../../../styles/typography';
import { Column, Layer, LeftHalf, RightHalf, Row, SlideImage } from '../../UIKit';
import Slide from '../Slide';
import data from '../../../data/story';
import { animateFadeInOut, fadeIn, fadeInOut, fadeOut } from '../../../helpers/animation';

const d = data.chapters[0].slides[1]

const ImageHolder = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
`;

export default function Technology2({ index }) {
  const leftImg1Ref = useRef(null)
  const leftImg2Ref = useRef(null)
  const leftImg3Ref = useRef(null)
  const rightImg1Ref = useRef(null)
  const rightImg2Ref = useRef(null)
  const rightImg3Ref = useRef(null)
  const p1Ref = useRef(null)
  const p2Ref = useRef(null)
  const p3Ref = useRef(null)
  const galleryRef = useRef(null)

  const desktopAnimation = (el, props) => animateFadeInOut(el, props, tl => {
    fadeOut(tl, [leftImg1Ref.current, rightImg1Ref.current])
    fadeInOut(tl, [leftImg2Ref.current, rightImg2Ref.current])
    fadeIn(tl, [leftImg3Ref.current, rightImg3Ref.current])
  })

  const mobileAnimation = (el, props) => animateFadeInOut(el, props, tl => {
    tl.to(galleryRef.current, {
      duration: 1,
      top: 0,
      ease: 'none'
    });
    fadeIn(tl, p1Ref.current);
    fadeOut(tl, leftImg1Ref.current);
    fadeIn(tl, rightImg1Ref.current);
    fadeOut(tl, [rightImg1Ref.current, p1Ref.current]);
    fadeIn(tl, [leftImg2Ref.current, p2Ref.current]);
    fadeOut(tl, leftImg2Ref.current);
    fadeIn(tl, rightImg2Ref.current);
    fadeOut(tl, [rightImg2Ref.current, p2Ref.current]);
    fadeIn(tl, [leftImg3Ref.current, p3Ref.current]);
    fadeOut(tl, leftImg3Ref.current);
    fadeIn(tl, rightImg3Ref.current);
  })

  return (
    <>
      <BrowserView renderWithFragment>
        <Slide index={index} subslides={3} animate={desktopAnimation}>
          <Row h="100%">
            <LeftHalf>
              <Column w="100%" h="100%" css={css`max-width: 585px;`} justify="center" align="center">
                <Column w="70%">
                  <div css={css`position: relative; padding-bottom: 114.7%; height: 0; width: 100%;`}>
                    <ImageHolder ref={leftImg1Ref}>
                      <SlideImage {...d.images[0]} css={css`width: auto; height: 100%;`} />
                    </ImageHolder>
                    <ImageHolder ref={leftImg2Ref} css={css`opacity: 0;`}>
                      <SlideImage {...d.images[1]} css={css`width: auto; height: 100%;`} />
                    </ImageHolder>
                    <ImageHolder ref={leftImg3Ref} css={css`opacity: 0;`}>
                      <SlideImage {...d.images[2]} css={css`width: auto; height: 100%;`} />
                    </ImageHolder>
                  </div>
                </Column>
                <P css={css`margin-top: 60px;`}>
                  {d.copy[0].text}
                </P>
              </Column>
            </LeftHalf>
            <RightHalf>
              <Column css={css`max-width: 540px;`} h="100%" justify="center">
                <Column css={css`align-items: flex-end;`}>
                  <P css={css`margin-bottom: 30px;`}>
                    {d.copy[1].text}
                  </P>
                  <div css={css`position: relative; padding-bottom: 80%; height: 0; width: 100%;`}>
                    <ImageHolder ref={rightImg1Ref} css={css`justify-content: flex-end;`}>
                      <SlideImage {...d.images[3]} css={css`width: auto; height: 100%;`} />
                    </ImageHolder>
                    <ImageHolder ref={rightImg2Ref} css={css`opacity: 0; align-items: flex-end;`}>
                      <SlideImage {...d.images[4]} css={css`width: auto; height: 80%; position: relative; left: 7%;`} />
                      <SlideImage {...d.images[5]} css={css`width: auto; height: 60%; position: relative; right: 7%;`} />
                    </ImageHolder>
                    <ImageHolder ref={rightImg3Ref} css={css`opacity: 0;`}>
                      <SlideImage {...d.images[6]} css={css`width: auto; height: 100%;`} />
                    </ImageHolder>
                  </div>
                  <P css={css`margin-top: 60px;`}>
                    {d.copy[2].text}
                  </P>
                </Column>
              </Column>
            </RightHalf>
          </Row>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide index={index} subslides={7} animate={mobileAnimation}>
          <Column h="100%" justify="space-evenly">
            <div css={css`position: relative; padding-bottom: 80%; height: 0; width: 100%; top: 20%;`} ref={galleryRef}>
              <ImageHolder ref={leftImg1Ref}>
                <SlideImage {...d.images[0]} css={css`width: auto; height: 100%;`} />
              </ImageHolder>
              <ImageHolder ref={rightImg1Ref} css={css`opacity: 0;`}>
                <SlideImage {...d.images[1]} css={css`width: auto; height: 100%;`} />
              </ImageHolder>
              <ImageHolder ref={leftImg2Ref} css={css`opacity: 0;`}>
                <SlideImage {...d.images[2]} css={css`width: auto; height: 100%;`} />
              </ImageHolder>
              <ImageHolder ref={rightImg2Ref} css={css`opacity: 0; align-items: flex-end;`}>
                <SlideImage {...d.images[4]} css={css`width: auto; height: 100%; position: relative; left: 7%;`} />
                <SlideImage {...d.images[5]} css={css`width: auto; height: 80%; position: relative; right: 7%;`} />
              </ImageHolder>
              <ImageHolder ref={leftImg3Ref} css={css`opacity: 0;`}>
                <SlideImage {...d.images[3]} css={css`width: auto; height: 100%;`} />
              </ImageHolder>
              <ImageHolder ref={rightImg3Ref} css={css`opacity: 0;`}>
                <SlideImage {...d.images[6]} css={css`width: auto; height: 100%;`} />
              </ImageHolder>
            </div>
            <div css={css`position: relative; flex: 1;`}>
              <Layer ref={p1Ref} css={css`opacity: 0;`}>
                <P mobile css={css`margin-top: 16px;`}>
                  {d.copy[0].text}
                </P>
              </Layer>
              <Layer ref={p2Ref} css={css`opacity: 0;`}>
                <P mobile css={css`margin-top: 16px;`}>
                  {d.copy[1].text}
                </P>
              </Layer>
              <Layer ref={p3Ref} css={css`opacity: 0;`}>
                <P mobile css={css`margin-top: 32px;`}>
                  {d.copy[2].text}
                </P>
              </Layer>
            </div>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
