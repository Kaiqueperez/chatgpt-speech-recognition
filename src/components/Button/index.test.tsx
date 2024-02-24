import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '.';

test('renders button component', () => {
  const starRecord = jest.fn();
  const buttonText = 'Button test suite';
  const { baseElement } = render(<Button text={buttonText} buttonstyle="start" data-testid="button-start" onClick={starRecord} />);

  expect(baseElement).toBeInTheDocument();

  expect(baseElement.textContent).toBe(buttonText);

  fireEvent.click(screen.getByTestId('button-start'));

  expect(starRecord).toBeCalledTimes(1);
});
