import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 2 * ${({ theme }) => theme.spacing.md});
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.background.default};
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1000px;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.radius.xs};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;
