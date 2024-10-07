import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { StyledButton } from './Button.styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children: ReactNode;
}

const Button: FC<IButtonProps> = ({
  children,
  onClick,
  disabled = false,
  ...rest
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
