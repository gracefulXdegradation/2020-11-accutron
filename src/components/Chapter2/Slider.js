import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import NavBar from './NavBar';
import Slide from './Slide';
import SlideHeadingProvider from '../../providers/SlideHeadingProvider';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';

import AccutronSpaceviewAlphaImg from '../../assets/1961_Accutron-SpaceviewAlpha.png'
import HalfDisc from '../ImageHalfDisc';

gsap.registerPlugin(ScrollTrigger);


const SliderRoot = styled.div`
  position: relative;
`;

const Fixed = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
`;

const Half = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
`;

const RightHalf = styled(Half)`
  right: 0;
`;

const Divisor = styled.div`
  height: 1px;
  width: ${props => props.length || '100%'};
  background: ${props => props.theme.borderColor};
`;

const Layer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const headings = ['The spaceview', 'An Intemporal design', 'The legacy collection']

export default function Slider() {
  const pinSectionRef = useRef(null);
  const pinRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: pinSectionRef.current,
      pin: pinRef.current,
      start: 'top top',
      end: 'bottom bottom',
    });
  }, []);

  return (
    <SliderRoot ref={pinSectionRef}>
      <SlideHeadingProvider headings={headings}>
        <Fixed ref={pinRef}>
          <Half>
            <Layer>
              <Divisor />
            </Layer>
            <Layer>
              <HalfDisc size={536} img={AccutronSpaceviewAlphaImg} />
            </Layer>
          </Half>
          <RightHalf>
            <Layer>
              <Divisor length="200px" />
            </Layer>
          </RightHalf>
        </Fixed>


        <Slide index={0}>
          <Slide1 />
        </Slide>
        <Slide index={1}>
          <Slide2 />
        </Slide>
        <Slide index={2}>
          <Slide3 />
        </Slide>
        <NavBar sliderRef={pinSectionRef} />
      </SlideHeadingProvider>
    </SliderRoot>
  );
};
