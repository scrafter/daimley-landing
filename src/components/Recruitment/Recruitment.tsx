import React from 'react';
import RecruitmentHeader from '@/components/Recruitment/RecruitmentHeader/RecruitmentHeader';
import RecruitmentSpeciality from '@/components/Recruitment/RecruitmentSpeciality/RecruitmentSpeciality';
import RecruitmentDelegate from '@/components/Recruitment/RecruitmentDelegate/RecruitmentDelegate';
import RecruitmentProcess from '@/components/Recruitment/RecruitmentProcess/RecruitmentProcess';

function Recruitment() {
  return (
    <main>
      <RecruitmentHeader />
      <RecruitmentSpeciality />
      <RecruitmentDelegate />
      <RecruitmentProcess />
    </main>
  );
}

export default Recruitment;
