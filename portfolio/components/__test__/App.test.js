import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../../App';

test('App renders correctly', () => {
    render(<App />);
    const appElement = screen.getByTestId('App');
    expect(appElement).toBeInTheDocument();
  });