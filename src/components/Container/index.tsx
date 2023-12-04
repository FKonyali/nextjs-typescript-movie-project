import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import theme, { ThemeColors } from 'styles/theme';

interface ContainerProps {
  children: ReactNode;
  backgroundColor?: string | ThemeColors;
}

const Wrapper = styled.div<{ backgroundColor?: string | ThemeColors }>`
  background-color: ${(props) => props.backgroundColor || theme.colors.background};
`;

function Container({ children, backgroundColor = theme.colors.background }: ContainerProps) {
  return <Wrapper backgroundColor={backgroundColor}>{children}</Wrapper>;
}

export default Container;
