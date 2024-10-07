import Button from './Button';
import { fireEvent, render, screen } from '@testing-library/react';
import { theme } from '../../core/theme';
import { ThemeProvider } from 'styled-components';

describe('Button', () => {
  const buttonText = 'Click Me';
  const onClickMock = jest.fn();

  it('renders button with text', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>{buttonText}</Button>
      </ThemeProvider>
    );
    expect(screen.getByText(buttonText)).toBeDefined();
  });

  it('triggers onClick when clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClickMock}>{buttonText}</Button>
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText(buttonText));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('does not trigger onClick when disabled', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClickMock} disabled>
          {buttonText}
        </Button>
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText(buttonText));
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it('applies aria-disabled attribute when disabled', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button disabled>{buttonText}</Button>
      </ThemeProvider>
    );
    expect(screen.getByText(buttonText)).toHaveAttribute(
      'aria-disabled',
      'true'
    );
  });
});
