import React from 'react';
import {
  WeAreDaimleyStyled,
  WeAreDaimleySubTitle,
  WeAreDaimleyTitle,
  WeAreDaimleyTilesWrapper,
  WeAreDaimleyTile,
  WeAreDaimleyFooter,
  WeAreDaimleyDescription,
  WeAreDaimleyWrapper,
} from './WeAreDaimley.styles';
import useTranslation from '@/useTranslation';
import UnderlinedText from '@/components/Shared/UnderlinedText/UnderlinedText';
import Button from '@/components/Shared/Button/Button';
import FindIcon from '@/assets/icons/FindIcon';
import TrainingsIcon from '@/assets/icons/TrainingsIcon';
import SupportIcon from '@/assets/icons/SupportIcon';

function WeAreDaimley() {
  const { translate } = useTranslation();
  return (
    <WeAreDaimleyStyled>
      <WeAreDaimleyWrapper>
        <WeAreDaimleySubTitle id="we-are-daimley">
          {translate(`weAreDaimley.subTitle`)}
        </WeAreDaimleySubTitle>

        <WeAreDaimleyTitle>
          <div>
            {translate(`weAreDaimley.title1`)}

            <UnderlinedText text={translate(`weAreDaimley.title2`)} />
          </div>
          {translate(`weAreDaimley.title3`)}
        </WeAreDaimleyTitle>

        <WeAreDaimleyTilesWrapper>
          <WeAreDaimleyTile>
            <FindIcon />

            <p>{translate(`weAreDaimley.tile1`)}</p>
          </WeAreDaimleyTile>

          <WeAreDaimleyTile>
            <TrainingsIcon />

            <p>{translate(`weAreDaimley.tile2`)}</p>
          </WeAreDaimleyTile>

          <WeAreDaimleyTile>
            <SupportIcon />

            <p>{translate(`weAreDaimley.tile3`)}</p>
          </WeAreDaimleyTile>
        </WeAreDaimleyTilesWrapper>

        <WeAreDaimleyFooter>
          <WeAreDaimleyDescription>
            {translate(`weAreDaimley.footerDescription`)}
          </WeAreDaimleyDescription>

          <Button
            link="/about-us#our-services"
            label={translate(`weAreDaimley.button`)}
          />
        </WeAreDaimleyFooter>
      </WeAreDaimleyWrapper>
    </WeAreDaimleyStyled>
  );
}

export default WeAreDaimley;
