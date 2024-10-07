import { ListItem, ListItemText, TextField, Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledListItem = styled(ListItem)<{ completed: boolean }>`
  margin: ${({ theme }) => theme.spacing.xs} 0;
  border-radius: ${({ theme }) => theme.radius.xs};
  transition: 200ms ease-in-out background-color;
  background-color: ${({ completed, theme }) =>
    completed ? theme.colors.secondary.light : theme.colors.primary.light};
  overflow: hidden;
`;

export const StyledTextField = styled(TextField)`
  flex-grow: 1;
`;

export const StyledListItemText = styled(ListItemText)`
  flex-grow: 1;
`;

export const StyledTypography = styled(Typography)<{ completed: boolean }>`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;
