import React from 'react';
import JobOffersHeader from './JobOffersHeader/JobOffersHeader';
import JobOffersDescription from '@/components/JobOffers/JobOffersDescription/JobOffersDescription';
import JobOffersList from '@/components/JobOffers/JobOffersList/JobOffersList';

function JobOffers() {
  return (
    <main>
      <JobOffersHeader />
      <JobOffersDescription />
      <JobOffersList />
    </main>
  );
}

export default JobOffers;
