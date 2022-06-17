import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Renders ABR logo and link', () => {
  render(<App />);
  const logo = screen.getByAltText(/abr logo/i);
  expect(logo).toBeInTheDocument();
  // eslint-disable-next-line testing-library/no-node-access
  expect(logo.closest('a')).toHaveAttribute('href', 'https://theabr.org')
});
