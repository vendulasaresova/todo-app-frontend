import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.colors.primary.main};
`;

export const StyledBox = styled(Box)`
  padding: ${({ theme }) => theme.spacing.xxl};
  margin: ${({ theme }) => theme.spacing.md} 0;
`;
