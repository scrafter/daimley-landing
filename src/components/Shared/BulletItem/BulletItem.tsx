import React from 'react';
import useTranslation from '@/useTranslation';
import {
  BulletItemStyled,
  Text,
} from '@/components/Shared/BulletItem/BulletItem.styles';
import { CheckIcon } from '@/assets/icons/CheckIcon';

interface Props {
  text: string;
}

function BulletItem({ text }: Props) {
  const { translate } = useTranslation();
  return (
    <BulletItemStyled>
      <CheckIcon color="green" height={20} width={20} />
      <Text>{translate(text)}</Text>
    </BulletItemStyled>
  );
}

export default BulletItem;
