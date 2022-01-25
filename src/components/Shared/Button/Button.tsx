import React from 'react';
import { StyledButton } from './Button.styles';
import { navigate } from 'gatsby';

interface Props {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  isEmail?: boolean;
  link?: string;
}

function Button({ label, type, link, isEmail }: Props) {
  const onClick = () => {
    if (isEmail) {
      window.location.href = link;
    } else if (link) {
      navigate(link);
    }
  };
  return (
    <StyledButton type={type} onClick={onClick}>
      {label}
    </StyledButton>
  );
}

export default Button;
