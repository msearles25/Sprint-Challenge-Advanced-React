import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />)
});

test('darkmode is rendered', () => {
  const {getByText} = render(<App />);

  getByText(/dark mode/i)
});

test('main div is rendered', () => {
  const {getByTestId} = render(<App />);

  getByTestId(/main/i)
});