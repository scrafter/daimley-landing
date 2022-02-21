import React from 'react';
import JobOffersHeader from './JobOffersHeader/JobOffersHeader';
import JobOffersDescription from '@/components/JobOffers/JobOffersDescription/JobOffersDescription';

function JobOffers() {
  return (
    <main>
      <JobOffersHeader />
      <JobOffersDescription />
    </main>
  );
}

export default JobOffers;
