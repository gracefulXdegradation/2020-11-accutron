import React, { useCallback, useEffect, useRef, useState } from "react";
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

  const createTimeline = useCallback(() => {
    return gsap.timeline({
      scrollTrigger:{
        trigger: sliderRef.current,
        pin: pinRef.current,
        scrub: true,
        start: 'top top',
        end:'bottom bottom',
        onToggle: ({ isActive }) => setOpacity(!!isActive),
      }
    });
  }, [sliderRef])

  const mobileAnimation = useCallback(() => {
    const tl = createTimeline()

    tl.to(bgRef.current, {
      duration: 0.01,
      scaleY: 1,
      ease: 'none'
    })
    .to(bgRef.current, {
      duration: 0.99,
      scaleY: 1,
      ease: 'none'
    });

    return () => {
      tl.scrollTrigger.kill()
      tl.kill()
    };
  }, [createTimeline])

  const resizeBackground = useCallback(() => {
    const scale = calcBgScale({
      width: window.innerWidth,
      height: window.innerHeight
    });
    gsap.set(bgRef.current, { scale })
  }, [])

  const desktopAnimation = useCallback(() => {
    const tl = createTimeline()

    tl.to(bgRef.current, {
      rotation: 360,
      duration: 1,
      ease: 'none',
    });

    return () => {
      tl.scrollTrigger.kill()
      tl.kill()
    }
  }, [createTimeline])

  useEffect(() => {
    if (!hasChapterInit) return;
    
    if (isMobile) {
      return mobileAnimation()
    } else {
      resizeBackground();
      const cleanup = desktopAnimation();

      window.addEventListener('resize', resizeBackground);

      return () => {
        window.removeEventListener('resize', resizeBackground);
        cleanup();
      }
    }
  }, [mobileAnimation, desktopAnimation, resizeBackground, hasChapterInit])

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
