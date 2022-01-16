import React from 'react';
import { UnderlinedTextStyled } from '@/components/Shared/UnderlinedText/UnderlinedText.styles';

interface Props {
  text: string;
}

function UnderlinedText({ text }: Props) {
  return <UnderlinedTextStyled>{text}</UnderlinedTextStyled>;
}

export default UnderlinedText;
