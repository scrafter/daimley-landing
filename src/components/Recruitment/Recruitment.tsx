import React from 'react';
import RecruitmentHeader from '@/components/Recruitment/RecruitmentHeader/RecruitmentHeader';
import RecruitmentSpeciality from '@/components/Recruitment/RecruitmentSpeciality/RecruitmentSpeciality';
import RecruitmentDelegate from '@/components/Recruitment/RecruitmentDelegate/RecruitmentDelegate';
import RecruitmentProcess from '@/components/Recruitment/RecruitmentProcess/RecruitmentProcess';
import RecruitmentBenefits from '@/components/Recruitment/RecruitmentBenefits/RecruitmentBenefits';

function Recruitment() {
  return (
    <main>
      <RecruitmentHeader />
      <RecruitmentSpeciality />
      <RecruitmentDelegate />
      <RecruitmentProcess />
      <RecruitmentBenefits />
    </main>
  );
}

export default Recruitment;
