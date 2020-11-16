import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H3, H4 } from '../../styles/typography';
import { useNavBar } from '../../providers/NavBarProvider';
import { Circle, Layer, Divider, Row, Column, Block, Camouflage } from '../UIKit';

gsap.registerPlugin(ScrollTrigger);

export default function NavBar({ sliderRef }) {
  const { slideHeading } = useNavBar();
  const pinRef = useRef(null);
  const logoRef = useRef(null);
  const dividerContainerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: sliderRef.current,
        pin: pinRef.current,
        scrub: true,
        start: 'top top',
        end:'bottom bottom',
      }
    })
    .to(logoRef.current, {
      rotation: 90,
      duration: 1,
      ease: 'none',
    })

    return () => tl.kill()
  }, [sliderRef])

  return (
    <Layer ref={pinRef} fullScreen css={css`pointer-events: none;`}>
      <BrowserView>
        <Layer>
          <Row h="100%" justify="center">
            <Divider vertical />
          </Row>
        </Layer>

        <Layer>
          <Column w="100%" h="100%" justify="center" align="center">
            <Block css={css`padding: 19px 0 13px;`}>
              <Camouflage />
              <H3>{slideHeading}</H3>
            </Block>
          </Column>
        </Layer>
        <Layer>
          <Column h="100%" w="100%" justify="space-between" align="center">
            <Column align="center" css={css`padding: 50px 0 20px;`}>
              <Camouflage />
              <Circle ref={logoRef} size="m" />
              <H4 css={css`margin-top: 20px;`}>Chapter 1</H4>
            </Column>
            <Column align="center" css={css`padding: 30px 0 50px;`}>
              <Camouflage />
              <Circle size="m" />
              <H4 css={css`margin-top: 20px;`}>Chapter 2</H4>
            </Column>
          </Column>
        </Layer>
      </BrowserView>

      <MobileView>
        <Layer>
          <Column w="100%" h="100%">
            <Column align="center" css={css`padding-bottom: 20px;`}>
              <Block css={css`padding-top: 50px;`}>
                <Circle ref={logoRef} size="s" />
                <Layer top="0">
                  <Row h="100%" justify="center">
                    <Divider vertical length="35px" />
                  </Row>
                </Layer>
              </Block>
              <H4 alternative mobile css={css`margin: 12px 0; white-space: nowrap;`}>Chapter 1</H4>
              <H3 css={css`font-size: 35px; line-height: 40px; white-space: nowrap;`}>{slideHeading}</H3>
            </Column>
            <Column ref={dividerContainerRef} align="flex-end" css={css`flex: 1;`} w="35px">
              <Divider vertical />
            </Column>
            <Row justify="center">
              <H4 mobile css={css`margin: 25px 0 29px; white-space: nowrap;`}>Chapter 2</H4>
            </Row>
          </Column>
        </Layer>
      </MobileView>
    </Layer>
  );
};