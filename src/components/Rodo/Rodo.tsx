import React from 'react';
import { RodoStyled, Title, Content } from './Rodo.styles';
import useTranslation from '@/useTranslation';

function Rodo() {
  const { translate } = useTranslation();

  return (
    <RodoStyled>
      <Title>{translate(`rodo.title`)}</Title>
      <Content>{translate(`rodo.content`)}</Content>
    </RodoStyled>
  );
}

export default Rodo;
