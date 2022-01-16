import React from 'react';
import AboutUsHeader from '@/components/AboutUs/AboutUsHeader/AboutUsHeader';
import AboutUsTeam from '@/components/AboutUs/AboutUsTeam/AboutUsTeam';
import AboutUsArticles from '@/components/AboutUs/AboutUsArticles/AboutUsArticles';
import AboutUsConsulting from '@/components/AboutUs/AboutUsConsulting/AboutUsConsulting';

function AboutUs() {
  return (
    <main>
      <AboutUsHeader />
      <AboutUsTeam />
      <AboutUsArticles />
      <AboutUsConsulting />
    </main>
  );
}

export default AboutUs;
