import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders search bar component', () => {
  render(<App />);
  const searchBar = screen.getByTestId('search-bar');
  expect(searchBar).toBeInTheDocument();
});
