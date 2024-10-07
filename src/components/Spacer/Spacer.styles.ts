import styled from 'styled-components';
import { ISpacerProps } from './Spacer';
import { Spacing } from '../../core/theme/spacing';

export const StyledSpacer = styled.div<ISpacerProps>`
  ${({ size, direction }) => `
        ${direction === 'horizontal' ? `width: ${Spacing[size]};` : `height: ${Spacing[size]};`}
    `}
`;
