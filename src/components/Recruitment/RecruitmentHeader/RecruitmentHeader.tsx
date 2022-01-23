import React from 'react';
import {
  RecruitmentHeaderStyled,
  Title,
  SubTitle,
} from './RecruitmentHeader.styles';
import useTranslation from '@/useTranslation';
import Button from '@/components/Shared/Button/Button';

function RecruitmentHeader() {
  const { translate } = useTranslation();
  return (
    <RecruitmentHeaderStyled>
      <SubTitle>{translate(`recruitment.header.subTitle`)}</SubTitle>
      <Title>{translate(`recruitment.header.title`)}</Title>
      <Button link="/form" label={translate(`recruitment.header.button`)} />
    </RecruitmentHeaderStyled>
  );
}

export default RecruitmentHeader;
