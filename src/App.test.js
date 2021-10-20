import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// "eslint-config-prettier": "^8.3.0",
// "eslint-plugin-react-hooks": "^4.2.0",
