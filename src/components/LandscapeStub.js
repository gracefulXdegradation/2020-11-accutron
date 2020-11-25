import React from 'react';
import { Background, Column } from './UIKit';
import { H3, H4 } from '../styles/typography';

function LandscapeStub() {
  return (
    <Background>
      <Column w="100%" h="100vh" align="center" justify="center">
        <H3 mobile align="center">Please turn device</H3>
        <H4 alternative mobile align="center">to a portrait mode</H4>
      </Column>
    </Background>
  )
}

export default LandscapeStub
