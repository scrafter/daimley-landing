import React from 'react';
import AboutUsHeader from '@/components/AboutUs/AboutUsHeader/AboutUsHeader';
import AboutUsTeam from '@/components/AboutUs/AboutUsTeam/AboutUsTeam';
import AboutUsArticles from '@/components/AboutUs/AboutUsArticles/AboutUsArticles';

function AboutUs() {
  return (
    <main>
      <AboutUsHeader />
      <AboutUsTeam />
      <AboutUsArticles />
    </main>
  );
}

export default AboutUs;
