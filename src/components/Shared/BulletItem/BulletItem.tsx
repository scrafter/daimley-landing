import React from 'react';
import useTranslation from '@/useTranslation';
import {
  BulletItemStyled,
  Text,
} from '@/components/Shared/BulletItem/BulletItem.styles';
import { CheckIcon } from '@/assets/icons/CheckIcon';

interface Props {
  text: string;
  doNotTranslate?: boolean;
}

function BulletItem({ text, doNotTranslate }: Props) {
  const { translate } = useTranslation();
  const label = doNotTranslate ? text : translate(text);

  return (
    <BulletItemStyled>
      <CheckIcon color="green" height={20} width={20} />
      <Text>{label}</Text>
    </BulletItemStyled>
  );
}

export default BulletItem;
