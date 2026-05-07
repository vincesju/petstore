import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log error to service
    // eslint-disable-next-line no-console
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-red-500">Something went wrong.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
