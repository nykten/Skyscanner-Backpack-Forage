import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('@skyscanner/backpack-web/bpk-component-calendar', () => {
  return {
    __esModule: true,
    default: () => <div>MockCalendar</div>,
    CALENDAR_SELECTION_TYPE: {
      single: 'single',
      range: 'range',
    },
  };
});
jest.mock('@skyscanner/backpack-web/bpk-component-input', () => {
  return {
    __esModule: true,
    default: () => <input />,
    INPUT_TYPES: {
      text: 'text',
    },
  };
});

jest.mock('date-fns/format', () => () => 'mocked-date');


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
