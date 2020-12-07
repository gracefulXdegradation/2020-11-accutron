import { css } from '@emotion/core';
import React, { useEffect } from 'react';
import { preloadAll } from '../helpers/image';
import { Background, Block, Circle, Column } from './UIKit';

function Preloader({ images, onLoad }) {
  useEffect(() => {
    async function preloadImages() {
      await preloadAll(images)
      onLoad()
    }
    
    preloadImages()
  }, [images, onLoad])

  const size = 120
  const a = size / (2 * Math.cos(Math.PI / 6))
  const duration = 6

  return (
    <Background css={css`height: 100vh; position: absolute; z-index: 2;`}>
      <Column h="100%" w="100%" align="center" justify="center" css={css`margin-top: 100px;`}>
        <Block css={css`
          width: ${size}px;
          height: ${size}px;
          align-items: center;
          justify-content: center;

          animation: rotate ${duration}s ease-in-out infinite;

          @keyframes rotate {
              0% {
                animation-timing-function: ease-in-out;
                transform: rotate(0deg);
              }
              33% {
                animation-timing-function: ease-in-out;
                transform: rotate(120deg);
              }
              67% {
                animation-timing-function: ease-in-out;
                transform: rotate(240deg);
              }
              100% {
                animation-timing-function: ease-in-out;
                transform: rotate(360deg);
              }
            }
        `}>
          <Circle size="l" css={css`
            @keyframes spin {
              0% {
                transform: translate(0px, ${-a}px) rotate(0deg);
              }
              100% {
                transform: translate(0px, ${-a}px) rotate(180deg);
              }
            }
            position: absolute;
            animation: spin ${duration / 3}s ease-in-out infinite;
          `} />
          <Circle size="l" css={css`
            @keyframes spin2 {
              0% {
                transform: translate(${size / 2}px, ${a * Math.sin(Math.PI / 6)}px) rotate(120deg);
              }
              100% {
                transform: translate(${size / 2}px, ${a * Math.sin(Math.PI / 6)}px) rotate(300deg);
              }
            }
            position: absolute;
            animation: spin2 ${duration / 3}s ease-in-out infinite;

          `} />
          <Circle size="l" css={css`
            @keyframes spin3 {
              0% {
                transform: translate(${-size / 2}px, ${a * Math.sin(Math.PI / 6)}px) rotate(-120deg);
              }
              100% {
                transform: translate(${-size / 2}px, ${a * Math.sin(Math.PI / 6)}px) rotate(60deg);
              }
            }
            position: absolute;
            animation: spin3 ${duration / 3}s ease-in-out infinite;
          `} />
        </Block>
      </Column>
    </Background>
  );
}

export default Preloader;
