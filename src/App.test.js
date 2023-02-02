import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/components/App.js';

test('renders cleanup react app message', () => {
  const { getByText } = render(<App />);
  const cleanupMessage = getByText(/Cleanedup React App/i);
  expect(cleanupMessage).toBeInTheDocument();
});
