import React from "react";
import { Global, css } from "@emotion/core";
import PlantinMTPro from "./PlantinMTProRg.ttf";
import UniversLTProCondensed from './UniversLTPro-Condensed.otf'

const GlobalFonts = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Plantin MT Pro";
        src: url(${PlantinMTPro}) format("truetype");
      }

      @font-face {
        font-family: "Univers LT Pro";
        src: url(${UniversLTProCondensed}) format("opentype");
      }
    `}
  />
);

export default GlobalFonts;
