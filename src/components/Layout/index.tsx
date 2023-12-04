import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

const Container = styled.div``;

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <Container>{children}</Container>;
}

export default Layout;
