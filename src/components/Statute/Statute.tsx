import React from 'react';
import { StatuteStyled, Title, Link } from './Statute.styles';
import useTranslation from '@/useTranslation';
import statute from '@/assets/statute.pdf';

function Statute() {
  const { translate } = useTranslation();
  return (
    <main>
      <StatuteStyled>
        <Title>{translate(`statute.title`)}</Title>

        <Link download href={statute}>
          {translate(`statute.download`)}
        </Link>
      </StatuteStyled>
    </main>
  );
}

export default Statute;
