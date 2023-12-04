import React, { ReactNode } from 'react';
//styles
import { MovieBox } from './style';

interface MovieBoxProps {
  children: ReactNode;
}

function MovieBoxContainer({ children }: MovieBoxProps) {
  return (
    <MovieBox>
      {children}
    </MovieBox>
  );
}

export default MovieBoxContainer;
