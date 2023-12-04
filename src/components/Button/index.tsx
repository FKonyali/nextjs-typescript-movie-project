import React, { ReactNode, MouseEvent } from 'react';
// styles
import { ButtonContainer } from './style';

interface ButtonProps {
  children: ReactNode;
  inlineCss?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function Button({ children, inlineCss, onClick }: ButtonProps) {
  return <ButtonContainer inlineCss={inlineCss} onClick={onClick}>{children}</ButtonContainer>;
}

export default Button;
