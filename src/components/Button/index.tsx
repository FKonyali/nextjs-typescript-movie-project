import React, { ReactNode } from 'react';
// styles
import { ButtonContainer } from './style';

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  return <ButtonContainer>{children}</ButtonContainer>;
}

export default Button;
