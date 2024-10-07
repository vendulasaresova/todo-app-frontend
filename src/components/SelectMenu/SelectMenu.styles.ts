import styled from 'styled-components';

export const StyledSelectMenu = styled.div`
  margin: ${({ theme }) => theme.spacing.xs} 0;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.xs};
  background-color: ${({ theme }) => theme.colors.background.paper};
  overflow: hidden;
  transition: 200ms ease-in-out background-color;
`;
