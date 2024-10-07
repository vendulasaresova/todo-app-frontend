import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  display: inline-block;
  border: none;
  border-radius: ${({ theme }) => theme.radius.xs};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.background.paper};
  background-color: ${({ theme }) => theme.colors.primary.main};
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
      pointer-events: none;
    `}
`;
