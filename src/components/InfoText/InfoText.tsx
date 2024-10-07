import { TypographyProps } from '@mui/material/Typography';
import React, { FC } from 'react';
import { StyledBox, StyledTypography } from './InfoText.styles';

export interface ISpacerProps extends TypographyProps {
  children: string;
}

export const InfoText: FC<ISpacerProps> = ({ children }) => {
  return (
    <StyledBox display="flex" justifyContent="center">
      <StyledTypography variant="h5">{children}</StyledTypography>
    </StyledBox>
  );
};
