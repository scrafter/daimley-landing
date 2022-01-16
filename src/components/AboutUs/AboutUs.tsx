import React from 'react';
import AboutUsHeader from '@/components/AboutUs/AboutUsHeader/AboutUsHeader';
import AboutUsTeam from '@/components/AboutUs/AboutUsTeam/AboutUsTeam';
import AboutUsArticles from '@/components/AboutUs/AboutUsArticles/AboutUsArticles';
import AboutUsConsulting from '@/components/AboutUs/AboutUsConsulting/AboutUsConsulting';
import AboutUsServices from '@/components/AboutUs/AboutUsServices/AboutUsServices';
import AboutUsKnowLedge from '@/components/AboutUs/AboutUsKnowLedge/AboutUsKnowLedge';
import AboutUsDaimleyWorld from '@/components/AboutUs/AboutUsDaimleyWorld/AboutUsDaimleyWorld';

function AboutUs() {
  return (
    <main>
      <AboutUsHeader />
      <AboutUsTeam />
      <AboutUsArticles />
      <AboutUsConsulting />
      <AboutUsServices />
      <AboutUsKnowLedge />
      <AboutUsDaimleyWorld />
    </main>
  );
}

export default AboutUs;
