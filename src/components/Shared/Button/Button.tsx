import React from 'react';
import { StyledButton } from './Button.styles';

interface Props {
  label: string;
  type?: 'button' | 'submit' | 'reset';
}

function Button({ label, type }: Props) {
  return <StyledButton type={type}>{label}</StyledButton>;
}

export default Button;
