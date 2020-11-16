import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { H4, P } from '../../../styles/typography';
import LeftImage from '../../../assets/ch1-s2-l.png'
import RightImage from '../../../assets/ch1-s2-r.png'
import { Column, LeftHalf, RightHalf, Row } from '../../UIKit';
import Slide from '../Slide';

const Image = styled.img`
  ${({ greedy }) => greedy && css`
    width: 100%;
    height: 100%;
  `}
  object-fit: cover;
`;

export default function Slide1({ index, first, last }) {

  
  return (
    <>
      <BrowserView>
        <Slide index={index} first={first} last={last}>
          <Row h="100%">
            <LeftHalf>
              <Column w="50%" h="100%" css={css`max-width: 585px;`} justify="center">
                <Image src={LeftImage} alt="Accutron watches" />
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
                  <Image src={RightImage} css={css`max-width: 438px;`} alt="Male and female hands" />
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
