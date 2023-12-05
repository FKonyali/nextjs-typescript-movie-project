import React, { ReactNode, MouseEvent } from 'react';
// styles
import { ButtonContainer } from './style';

interface ButtonProps {
  children: ReactNode;
  inlineCss?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

function Button({ children, inlineCss, onClick, disabled = false }: ButtonProps) {
  return <ButtonContainer inlineCss={inlineCss} onClick={onClick} disabled={disabled}>{children}</ButtonContainer>;
}

export default Button;
