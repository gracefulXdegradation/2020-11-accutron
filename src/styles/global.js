import React from "react";
import { Global, css } from '@emotion/core';
import GlobalFonts from './fonts';

const GlobalStyle = () => {
	return (
    <>
      <GlobalFonts />
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
          html,
          body {
            overflow-x: hidden;
          }
          #root {
            margin: 0;
            font-size: 16px;
            font-family: 'neue-haas-grotesk-text', sans-serif;
            line-height: 1.5em;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin: 0px;
          }

          button {
            &:hover,
            &:focus {
              outline: none;
            }
          }

          img {
            max-width: 100%;
            width: 100%;
          }
        `}
      />
    </>
	);
};

export default GlobalStyle;
