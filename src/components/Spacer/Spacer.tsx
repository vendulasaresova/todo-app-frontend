import { FC } from 'react';
import { StyledSpacer } from './Spacer.styles';
import { Spacing } from '../../core/theme/spacing';

export interface ISpacerProps {
  size: keyof typeof Spacing;
  direction?: 'horizontal' | 'vertical';
}

export const Spacer: FC<ISpacerProps> = ({ size, direction = 'vertical' }) => {
  return <StyledSpacer size={size} direction={direction} />;
};
