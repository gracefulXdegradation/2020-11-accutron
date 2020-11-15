import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { BrowserView, MobileView } from "react-device-detect";
import ReactVisibilitySensor from 'react-visibility-sensor';
import { H2, H4 } from '../../styles/typography';
import { Circle, Divider, Layer, Block, Row, Column, Camouflage } from '../UIKit';

const Em = styled.em`
  font-style: normal;
  color: ${props => props.theme.fontParagraph};
`;

export default function Preamble() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const mobChapterCaptionRef = useRef(null)
  const mobPaddingTop = useRef(null)

  useEffect(() => {
    if (mobChapterCaptionRef.current) {
      mobPaddingTop.current = mobChapterCaptionRef.current.getBoundingClientRect().height * 2;
    }
  }, [])

  const onAppear = isVisible =>
    !hasAnimated && isVisible && setHasAnimated(true)

  return (
    <>
      <BrowserView>
        <Column h="100vh" w="100%" align="center" justify="center">
          <Layer>
              <Row h="100%" justify="center">
                <Divider length={hasAnimated ? '100%' : '0'} vertical />
              </Row>
          </Layer>
          
          <Layer>
            <Column w="100%" h="100%">
              <Column w="100%" h="50%" justify="flex-end" align="center">
                <ReactVisibilitySensor
                  partialVisibility={true}
                  minTopValue={300}
                  onChange={onAppear}
                >
                  <Column align="center" css={css`padding: 32px 0 12px;`}>
                    <Camouflage />
                    <Circle size="xl" />
                    <H4 css={css`margin-top: 16px;`}>Chapter 1</H4>
                    <Camouflage w="100%" length={hasAnimated ? '0' : '100%'} />
                  </Column>
                </ReactVisibilitySensor>
              </Column>
              <Column w="100%" h="50%" align="center">
                <Block css={css`margin-top: 28px;`}>
                  <Camouflage />
                  <H2 css={css`padding: 12px 0 6px;`}>
                    <Em>Accu</Em>racy through elec<Em>tron</Em>ics
                  </H2>
                </Block>
                <Column justify="center" align="center" css={css`flex: 1;`}>
                  <Block css={css`padding: 14px 0 6px;`}>
                    <Camouflage />
                    <H4 alternative align="center">
                      That’s the simple meaning behind Accutron’s name,<br />
                      but the technology that powered the brand’s iconic timepieces<br />
                      are anything but.
                    </H4>
                  </Block>
                </Column>
              </Column>
            </Column>
          </Layer>
        </Column>
      </BrowserView>

      <MobileView>
        <Column h="100vh" w="100%" align="center" justify="center">
          <Layer>
              <Row h="100%" justify="center">
                <Divider length={hasAnimated ? '100%' : '0'} vertical />
              </Row>
          </Layer>

          <Layer>
            <Column w="100%" h="100%" css={css`padding-top: ${mobPaddingTop.current}px;`}>
              <Column w="100%" h="50%" justify="flex-end" align="center"> 
                <ReactVisibilitySensor
                  partialVisibility={true}
                  minTopValue={300}
                  onChange={onAppear}
                >
                  <Column align="center" css={css`padding-top: 32px;`}>
                    <Camouflage />
                    <Circle size="xl" />
                    <Block ref={mobChapterCaptionRef}>
                      <H4 css={css`margin: 16px 0 12px;`}>Chapter 1</H4>
                    </Block>
                    <Camouflage w="100%" length={hasAnimated ? '0' : '100%'} />
                  </Column>
                </ReactVisibilitySensor>
              </Column>

              <Column w="100%" h="50%" align="center">
                <Block css={css`margin-top: 28px;`}>
                  <Camouflage />
                  <H2 mobile css={css`padding: 12px 0 6px;`} align="center">
                    <Em>Accu</Em>racy through elec<Em>tron</Em>ics
                  </H2>
                </Block>
              </Column>
            </Column>
          </Layer>
        </Column>
      </MobileView>
    </>
  )
}
