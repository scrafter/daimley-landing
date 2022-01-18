import React from 'react';
import RecruitmentHeader from '@/components/Recruitment/RecruitmentHeader/RecruitmentHeader';
import RecruitmentSpeciality from '@/components/Recruitment/RecruitmentSpeciality/RecruitmentSpeciality';
import RecruitmentDelegate from '@/components/Recruitment/RecruitmentDelegate/RecruitmentDelegate';

function Recruitment() {
  return (
    <main>
      <RecruitmentHeader />
      <RecruitmentSpeciality />
      <RecruitmentDelegate />
    </main>
  );
}

export default Recruitment;
