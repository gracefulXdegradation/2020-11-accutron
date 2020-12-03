import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { gsap, ScrollTrigger } from 'gsap/all';
import { Layer } from "../UIKit";
import { BrowserView, isMobile, MobileView } from "react-device-detect";
import { useStoryState } from "../../providers/StoryStateProvider";

gsap.registerPlugin(ScrollTrigger);

const FixedBackground = styled(Layer)`
  z-index: -1;
  transition: opacity .2s ease;
`;

const Ch2BrowserFixedBG = styled(FixedBackground)`
  background: radial-gradient(ellipse farthest-corner, transparent, transparent 40%, ${({ theme }) => theme.gradientColor} 100%);
`;

const Ch2MobileFixedBG = styled(FixedBackground)`
  background: linear-gradient(to bottom, #000000, #030302 80%, ${({ theme }) => theme.gradientColor} 100%);
  transform-origin: bottom;
  transform: scaleY(0);
`;

const calcBgScale = ({ width, height }) => {
  const hypotenuse = Math.sqrt(width * width + height * height);
  return hypotenuse / Math.min(width, height);
}

export const BrandBackground = ({ sliderRef }) => {
  const { hasChapterInit } = useStoryState();
  const pinRef = useRef(null);
  const bgRef = useRef(null);
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    if (!hasChapterInit) return;

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
    
    if (isMobile) {
      tl.to(bgRef.current, {
        duration: 0.01,
        scaleY: 1,
        ease: 'none'
      })
      .to(bgRef.current, {
        duration: 0.99,
        scaleY: 1,
        ease: 'none'
      })

    } else {
      const scale = calcBgScale(bgRef.current.getBoundingClientRect());

      tl.set(bgRef.current, { scale });

      tl.to(bgRef.current, {
        rotation: 360,
        duration: 1,
        ease: 'none',
      });
    }

    return () => {
      tl.scrollTrigger.kill()
      tl.kill()
    }
  }, [sliderRef, hasChapterInit])

  return (
    <Layer ref={pinRef} fullScreen css={css`pointer-events: none;`}>
      <BrowserView>
        <Ch2BrowserFixedBG ref={bgRef} css={css`opacity: ${opacity};`} />
      </BrowserView>
      <MobileView>
        <Ch2MobileFixedBG ref={bgRef} css={css`opacity: ${opacity};`} />
      </MobileView>
    </Layer>
  )
}
