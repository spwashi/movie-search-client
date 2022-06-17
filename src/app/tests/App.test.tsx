import React from 'react';
import {render, screen} from '@testing-library/react';
import {ConnectedApp} from '../ConnectedApp';

test('Renders ABR logo and link', () => {
  render(<ConnectedApp/>);
  const logo = screen.getByAltText(/abr logo/i);
  expect(logo).toBeInTheDocument();
  // eslint-disable-next-line testing-library/no-node-access
  expect(logo.closest('a')).toHaveAttribute('href', 'https://theabr.org')
});

test('Has a search input', () => {
  render(<ConnectedApp/>);
  const logoLabel = screen.getByLabelText(/Search/i);
  expect(logoLabel).toBeInTheDocument();
});
