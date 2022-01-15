import React from 'react';
import useTranslation from '@/useTranslation';
import {
  HeaderTileTitle,
  HeaderTileWrapper,
  HeaderTileLink,
} from '@/components/MainPage/MainPageHeader/HeaderTile/HeaderTile.styles';

interface Props {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

function HeaderTile({ title, links }: Props) {
  const { translate } = useTranslation();

  return (
    <HeaderTileWrapper>
      <HeaderTileTitle>{translate(title)}</HeaderTileTitle>

      {links.map((link) => (
        <HeaderTileLink href={link.url}>{translate(link.text)}</HeaderTileLink>
      ))}
    </HeaderTileWrapper>
  );
}

export default HeaderTile;