import React, { FC, ReactNode } from 'react';

import { StyledSelectMenu } from './SelectMenu.styles';

interface ISelectMenuProps {
  children: ReactNode;
}

export const SelectMenu: FC<ISelectMenuProps> = ({ children }) => {
  return <StyledSelectMenu>{children}</StyledSelectMenu>;
};
