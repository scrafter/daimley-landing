import React from 'react';
import { StyledButton } from './Button.styles';

interface Props {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  link?: string;
}

function Button({ label, type, link }: Props) {
  const onClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <StyledButton type={type} onClick={onClick}>
      {label}
    </StyledButton>
  );
}

export default Button;
