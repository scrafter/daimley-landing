import React from 'react';
import {
  RecruitmentProcessStyled,
  Stage,
  StageDescription,
  Description,
  StageTitle,
  SubTitle,
  Title,
  StagesWrapper,
} from '@/components/Recruitment/RecruitmentProcess/RecruitmentProcess.styles';
import useTranslation from '@/useTranslation';
import Etap1 from '@/assets/icons/Etap1';
import Etap2 from '@/assets/icons/Etap2';
import Etap3 from '@/assets/icons/Etap3';
import Etap4 from '@/assets/icons/Etap4';

function RecruitmentProcess() {
  const { translate } = useTranslation();

  return (
    <RecruitmentProcessStyled id="process">
      <SubTitle>{translate(`recruitment.process.subtitle`)}</SubTitle>
      <Title>{translate(`recruitment.process.title`)}</Title>
      <Description>{translate(`recruitment.process.description`)}</Description>

      <StagesWrapper>
        <Stage>
          <Etap1 />
          <StageTitle>
            {translate(`recruitment.process.stage1Title`)}
          </StageTitle>
          <StageDescription>
            {translate(`recruitment.process.stage1`)}
          </StageDescription>
        </Stage>

        <Stage>
          <Etap2 />
          <StageTitle>
            {translate(`recruitment.process.stage2Title`)}
          </StageTitle>
          <StageDescription>
            {translate(`recruitment.process.stage2`)}
          </StageDescription>
        </Stage>

        <Stage>
          <Etap3 />
          <StageTitle>
            {translate(`recruitment.process.stage3Title`)}
          </StageTitle>
          <StageDescription>
            {translate(`recruitment.process.stage3`)}
          </StageDescription>
        </Stage>

        <Stage>
          <Etap4 />
          <StageTitle>
            {translate(`recruitment.process.stage4Title`)}
          </StageTitle>
          <StageDescription>
            {translate(`recruitment.process.stage4`)}
          </StageDescription>
        </Stage>
      </StagesWrapper>
    </RecruitmentProcessStyled>
  );
}

export default RecruitmentProcess;
