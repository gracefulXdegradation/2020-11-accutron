import React from "react";
import { Global, css } from "@emotion/core";
import { fonts } from '../../data/assets'

const GlobalFonts = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Plantin MT Pro";
        src: local("Plantin MT Pro"), url(${fonts.PlantinMTPro}) format("truetype");
      }

      @font-face {
        font-family: "Univers LT Pro";
        src:  local("Univers LT Pro 57 Condensed"), url(${fonts.UniversLTProCondensed}) format("opentype");
      }
    `}
  />
);

export default GlobalFonts;
