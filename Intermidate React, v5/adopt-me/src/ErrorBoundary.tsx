// eslint-disable-next-line import/default
import React, { Component, ErrorInfo, ReactElement } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component<{ children: ReactElement }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary  component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with thislisting.
          <Link to="/">CLick here to the go back to the home page</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
