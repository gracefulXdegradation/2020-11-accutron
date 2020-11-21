import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { gsap, ScrollTrigger } from 'gsap/all';
import { BrowserView, MobileView } from "react-device-detect";
import { Layer } from "../UIKit";
import { useStoryState } from "../../providers/StoryStateProvider";

gsap.registerPlugin(ScrollTrigger);

const FixedBackground = styled(Layer)`
  z-index: -1;
  transition: opacity .2s ease;
`;

const Ch1BrowserFixedBG = styled(FixedBackground)`
  background: radial-gradient(ellipse farthest-corner, ${({ theme }) => theme.gradientColor}, #030302 30%, #000000 100%);
  transform: rotateZ(23deg);
`;

const Ch1MobileFixedBG = styled(FixedBackground)`
  background: linear-gradient(to bottom, ${({ theme }) => theme.gradientColor}, #030302 40%, #000000 100%);
`;

export const BrandBackground = ({ sliderRef }) => {
  const { hasChapterInit } = useStoryState();
  const pinRef = useRef(null);
  const bgRef = useRef(null);
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    if (hasChapterInit) {
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger: sliderRef.current,
          pin: pinRef.current,
          scrub: true,
          start: 'top top',
          end:'bottom bottom',
          onEnter: () => setOpacity(1),
          onEnterBack: () => setOpacity(1),
          onLeave: () => setOpacity(0),
          onLeaveBack: () => setOpacity(0),
        }
      })
      
      if (bgRef.current) {
        tl.to(bgRef.current, {
          rotation: 113,
          duration: 1,
          ease: 'none',
        })
      }

      return () => tl.kill()
    }
  }, [sliderRef, hasChapterInit])

  return (
    <Layer ref={pinRef} fullScreen css={css`pointer-events: none;`}>
      <BrowserView style={{}}>
        <Ch1BrowserFixedBG ref={bgRef} css={css`opacity: ${opacity};`} />
      </BrowserView>
      <MobileView>
        <Ch1MobileFixedBG css={css`opacity: ${opacity};`} />
      </MobileView>
    </Layer>
  )
}