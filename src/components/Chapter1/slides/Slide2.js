import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import Sl1LImg from '../../../assets/ch1-s2-l1.png'
import Sl2LImg from '../../../assets/ch1-s2-l2.png'
import Sl3LImg from '../../../assets/ch1-s2-l3.png'
import Sl1RImg from '../../../assets/ch1-s2-r1.png'
import Sl2RaImg from '../../../assets/ch1-s2-r2a.png'
import Sl2RbImg from '../../../assets/ch1-s2-r2b.png'
import Sl3RImg from '../../../assets/ch1-s2-r3.png'
import { Column, LeftHalf, RightHalf, Row, SlideImage } from '../../UIKit';
import Slide from '../Slide';
import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const ImageHolder = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
`;

export default function Slide1({ index }) {
  const leftImg1Ref = useRef(null)
  const leftImg2Ref = useRef(null)
  const leftImg3Ref = useRef(null)
  const rightImg1Ref = useRef(null)
  const rightImg2Ref = useRef(null)
  const rightImg3Ref = useRef(null)

  const desktopAnimation = (el) => {
    return gsap.timeline({
      scrollTrigger: {
        trigger: el,
        pin: el,
        pinSpacing: false,
        scrub: true,
      }
    })
    .to(el, {
      opacity: 1,
      duration: 1/6,
      ease: 'none',
    })
    .to([leftImg1Ref.current, rightImg1Ref.current], {
      duration: 1/6,
      opacity: 0,
      ease: 'none'
    })
    .to([leftImg2Ref.current, rightImg2Ref.current], {
      duration: 1/6,
      opacity: 1,
      ease: 'none'
    })
    .to([leftImg2Ref.current, rightImg2Ref.current], {
      duration: 1/6,
      opacity: 0,
      ease: 'none'
    })
    .to([leftImg3Ref.current, rightImg3Ref.current], {
      duration: 1/6,
      opacity: 1,
      ease: 'none'
    })
    .to(el, {
      opacity: 0,
      duration: 1/6,
      ease: 'none',
    })
  }

  return (
    <>
      <BrowserView style={{height: "300vh"}}>
        <Slide index={index} subslides={3} visible animate={desktopAnimation}>
          <Row h="100%">
            <LeftHalf>
              <Column w="50%" h="100%" css={css`max-width: 585px;`} justify="center">
                <div css={css`position: relative; padding-bottom: 114.7%; height: 0; width: 100%;`}>
                  <ImageHolder ref={leftImg1Ref}>
                    <SlideImage src={Sl1LImg} alt="Accutron watches" css={css`width: auto; height: 100%;`} />
                  </ImageHolder>
                  <ImageHolder ref={leftImg2Ref} css={css`opacity: 0;`}>
                    <SlideImage src={Sl2LImg} alt="Accutron watches" css={css`width: auto; height: 100%;`} />
                  </ImageHolder>
                  <ImageHolder ref={leftImg3Ref} css={css`opacity: 0;`}>
                    <SlideImage src={Sl3LImg} alt="Accutron watches" css={css`width: auto; height: 100%;`} />
                  </ImageHolder>
                </div>
                <P css={css`margin-top: 60px;`}>
                  Before the quartz movement swept the horological world by storm during the 1970s and early-80s, Bulova began developing its electronic Accutron watch in 1952.
                </P>
              </Column>
            </LeftHalf>
            <RightHalf>
              <Column css={css`max-width: 540px;`} h="100%" justify="center">
                <Column css={css`align-items: flex-end;`}>
                  <P css={css`margin-bottom: 30px;`}>
                    which guaranteed accuracy to within one minute per month, or 
                    two seconds per day. This was unheard of at that time.
                  </P>
                  <div css={css`position: relative; padding-bottom: 80%; height: 0; width: 100%;`}>
                    <ImageHolder ref={rightImg1Ref} css={css`justify-content: flex-end;`}>
                      <SlideImage src={Sl1RImg} css={css`width: auto; height: 100%;`} alt="Male and female hands" />
                    </ImageHolder>
                    <ImageHolder ref={rightImg2Ref} css={css`opacity: 0; align-items: flex-end;`}>
                      <SlideImage src={Sl2RaImg} alt="Accutron watches" css={css`width: auto; height: 80%; position: relative; left: 7%;`} />
                      <SlideImage src={Sl2RbImg} alt="Accutron watches" css={css`width: auto; height: 60%; position: relative; right: 7%;`} />
                    </ImageHolder>
                    <ImageHolder ref={rightImg3Ref} css={css`opacity: 0;`}>
                      <SlideImage src={Sl3RImg} alt="Accutron watches" css={css`width: auto; height: 100%;`} />
                    </ImageHolder>
                  </div>
                  <H4 css={css`margin-top: 60px;`}>
                    that level of accuracy was far better than any mechanical watch could reproduce.
                  </H4>
                </Column>
              </Column>
            </RightHalf>
          </Row>
        </Slide>
      </BrowserView>

      {/* <MobileView style={{height: "100vh"}}>
        <Slide index={index}>
          <Column h="100vh">
            <P>
              Long before American watchmaker Bulova introduced its legendary Accutron watch in October 1960,
            </P>
            <H4 css={css`margin-top: 32px;`}>
              the company was founded in 1875 by Joseph Bulova in New York City.
            </H4>
          </Column>
        </Slide>
      </MobileView> */}
    </>
  );
};
