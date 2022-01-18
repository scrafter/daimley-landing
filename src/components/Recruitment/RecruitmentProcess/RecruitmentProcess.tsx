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

function RecruitmentProcess() {
  const { translate } = useTranslation();

  return (
    <RecruitmentProcessStyled>
      <SubTitle>{translate(`recruitment.process.subtitle`)}</SubTitle>
      <Title>{translate(`recruitment.process.title`)}</Title>
      <Description>{translate(`recruitment.process.description`)}</Description>

      <StagesWrapper>
        <Stage>
          <StageTitle>
            {translate(`recruitment.process.stage1Title`)}
          </StageTitle>
          <StageDescription>
            {translate(`recruitment.process.stage1`)}
          </StageDescription>
        </Stage>

        <Stage>
          <StageTitle>
            {translate(`recruitment.process.stage2Title`)}
          </StageTitle>
          <StageDescription>
            {translate(`recruitment.process.stage2`)}
          </StageDescription>
        </Stage>

        <Stage>
          <StageTitle>
            {translate(`recruitment.process.stage3Title`)}
          </StageTitle>
          <StageDescription>
            {translate(`recruitment.process.stage3`)}
          </StageDescription>
        </Stage>

        <Stage>
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
