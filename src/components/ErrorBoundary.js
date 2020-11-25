import styled from "@emotion/styled";
import React from "react";
import { H2 } from "../styles/typography";
import { Row } from "./UIKit";

const Error = styled(Row)`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.bgColor};
`

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error(error, info); // eslint-disable-line no-console
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    return hasError ? <Error>
      <H2 align="center">Something went wrong</H2>
    </Error> : children;
  }
}