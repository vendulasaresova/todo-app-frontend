import { FC, ReactNode } from 'react';
import { LayoutContainer, Content } from './Layout.styles';

interface ILayoutProps {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => (
  <LayoutContainer>
    <Content>{children}</Content>
  </LayoutContainer>
);
