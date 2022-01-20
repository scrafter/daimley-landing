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
  icon: JSX.Element;
}

function HeaderTile({ title, links, icon }: Props) {
  const { translate } = useTranslation();

  return (
    <HeaderTileWrapper>
      {icon}
      <HeaderTileTitle>{translate(title)}</HeaderTileTitle>

      {links.map((link) => (
        <HeaderTileLink href={link.url}>{translate(link.text)}</HeaderTileLink>
      ))}
    </HeaderTileWrapper>
  );
}

export default HeaderTile;
