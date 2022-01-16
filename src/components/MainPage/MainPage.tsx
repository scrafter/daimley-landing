import React from 'react';
import MainPageHeader from '@/components/MainPage/MainPageHeader/MainPageHeader';
import WeAreDaimley from '@/components/MainPage/WeAreDaimley/WeAreDaimley';
import KnowUsBetter from '@/components/MainPage/KnowUsBetter/KnowUsBetter';

function MainPage() {
  return (
    <main>
      <MainPageHeader />
      <WeAreDaimley />
      <KnowUsBetter />
    </main>
  );
}

export default MainPage;
