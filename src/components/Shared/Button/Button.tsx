import React from 'react';
import { StyledButton } from './Button.styles';

interface Props {
  label: string;
}

function Button({ label }: Props) {
  return <StyledButton>{label}</StyledButton>;
}

export default Button;
