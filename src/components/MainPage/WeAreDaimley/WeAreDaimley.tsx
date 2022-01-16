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
import PhotoMock from '@/components/PhotoMock/PhotoMock';
import Button from '@/components/Shared/Button/Button';

function WeAreDaimley() {
  const { translate } = useTranslation();
  return (
    <WeAreDaimleyStyled>
      <WeAreDaimleyWrapper>
        <WeAreDaimleySubTitle>
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
            <PhotoMock width={80} height={80} />

            <p>{translate(`weAreDaimley.tile1`)}</p>
          </WeAreDaimleyTile>

          <WeAreDaimleyTile>
            <PhotoMock width={80} height={80} />

            <p>{translate(`weAreDaimley.tile2`)}</p>
          </WeAreDaimleyTile>

          <WeAreDaimleyTile>
            <PhotoMock width={80} height={80} />

            <p>{translate(`weAreDaimley.tile3`)}</p>
          </WeAreDaimleyTile>
        </WeAreDaimleyTilesWrapper>

        <WeAreDaimleyFooter>
          <WeAreDaimleyDescription>
            {translate(`weAreDaimley.footerDescription`)}
          </WeAreDaimleyDescription>

          <Button label={translate(`weAreDaimley.button`)} />
        </WeAreDaimleyFooter>
      </WeAreDaimleyWrapper>
    </WeAreDaimleyStyled>
  );
}

export default WeAreDaimley;
