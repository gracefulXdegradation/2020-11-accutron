import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H2, H4, P } from '../../../styles/typography';
import TunerImage from '../../../assets/ch1-s3-tuner.png'
import { Column, Layer, LeftHalf, SlideImage, Row } from '../../UIKit';
import Slide from '../Slide';

export default function Slide1({ index, first, last }) {
  return (
    <>
      <BrowserView>
        <Slide index={index}>
          <LeftHalf>
            <Column css={css`max-width: 540px;`} h="100%" justify="center">
              <H2 alternative>
                The tuning fork
              </H2>
              <H4 css={css`margin: 20px 0 60px;`}>
                A revolutionary invention for timekeeper precision.
              </H4>
              <P css={css`margin-bottom: 20px;`}>
                Invented by Swiss engineer Max Hetzel, the secret to Accutron’s precision lies in the watch’s tuning fork
              </P>
              <P>
              a small fork-shaped piece typically used as an acoustic resonator for musical instruments. Instead of the traditional balance wheel and spring, this new transistor movement divided each second into 360 equal parts and achieved unprecedented precision.
              </P>
            </Column>
          </LeftHalf>
          <Layer css={css`right: -10%; z-index: -1; width: 72%;`}>
            <SlideImage src={TunerImage} alt="Tuning fork" css={css`position: absolute; top: 35%;`} />
          </Layer>
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
