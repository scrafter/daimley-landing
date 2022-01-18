import React from 'react';
import {
  RecruitmentDelegateStyled,
  Description,
} from '@/components/Recruitment/RecruitmentDelegate/RecruitmentDelegate.styles';
import Button from '@/components/Shared/Button/Button';
import useTranslation from '@/useTranslation';

function RecruitmentDelegate() {
  const { translate } = useTranslation();
  return (
    <RecruitmentDelegateStyled>
      <Button label={translate(`recruitment.delegate.button`)} />
      <Description>{translate(`recruitment.delegate.description`)}</Description>
    </RecruitmentDelegateStyled>
  );
}

export default RecruitmentDelegate;
