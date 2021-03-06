import React, { useRef } from 'react';
import { css } from '@emotion/core';
import { BrowserView, MobileView } from "react-device-detect";
import { P } from '../../../styles/typography';
import { Column, Layer, Row } from '../../UIKit';
import Slide from '../Slide';
import { Watches, WatchesSafeArea } from '../Watches';
import { animateFadeInOut, fadeIn } from '../../../helpers/animation';

export default function Legacy11(props) {
  const { data: d } = props
  const watches = d.images

  const copy2Ref = useRef(null);

  const animation = (el, props) => animateFadeInOut(el, props, tl => {
    fadeIn(tl, copy2Ref.current)
  })

  return (
    <>
      <BrowserView renderWithFragment>
        <Slide {...props} subslides={2.5} animate={animation}>
          <WatchesSafeArea justify="center">
            {watches.map((img, i) => (
              <Column key={img.src} h="100%" css={css`margin: 0 10px;`}>
                <Watches {...img} />
              </Column>
            ))}

            <Layer ref={copy2Ref} css={css`opacity: 0;`}>
              <Column w="100%" h="100%" justify="flex-end">
                <Column h="200px" align="center" justify="center" css={css`margin: 50px 0;`}>
                  <P css={css`text-align: center; max-width: 350px;`}>
                    {d.copy[0].text}
                  </P>
                </Column>
              </Column>
            </Layer>
          </WatchesSafeArea>
        </Slide>
      </BrowserView>

      <MobileView renderWithFragment>
        <Slide {...props} subslides={2.5} animate={animation}>
        <Column w="100%" h="100%">
          <Layer>
            <Column w="100%" h="100%">
              <Column h="100%" css={css`flex: 1; max-height: calc(100% - 2 * 40px);`}>
                <Row h="50%" w="100%" justify="center" align="center" css={css`max-height: 50%;`}>
                  {[...watches.slice(0, 3), ...watches.slice(6)].map((img, i) => (
                    <Column h="100%" w="25%" key={`${img.src}${i}`}>
                      <Watches {...img} />
                    </Column>
                  ))}
                </Row>
                <Row h="50%" w="100%" justify="center" align="center" css={css`max-height: 50%;`}>
                {watches.slice(3, 6).map((img, i) => (
                  <Column h="100%" w="25%" key={`${img.src}${i}`}>
                    <Watches {...img} />
                  </Column>
                ))}
                </Row>
              </Column>

              <Row justify="center" ref={copy2Ref} css={css`opacity: 0;`}>
                <P mobile css={css`text-align: center; margin: 30px 20px;`}>
                  {d.copy[0].text}
                </P>
              </Row>
            </Column>
          </Layer>
          </Column>
        </Slide>
      </MobileView>
    </>
  );
};
