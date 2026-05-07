import React from 'react';
import { render } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders children when no error', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <div>Child</div>
      </ErrorBoundary>
    );
    expect(getByText('Child')).toBeInTheDocument();
  });

  it('renders error message on error', () => {
    // Simulate error by throwing in child
    const ProblemChild = () => { throw new Error('Oops'); };
    const { getByText } = render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );
    expect(getByText(/something went wrong/i)).toBeInTheDocument();
  });
});
