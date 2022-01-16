import React from 'react';
import MainPageHeader from '@/components/MainPage/MainPageHeader/MainPageHeader';
import WeAreDaimley from '@/components/MainPage/WeAreDaimley/WeAreDaimley';
import KnowUsBetter from '@/components/MainPage/KnowUsBetter/KnowUsBetter';
import References from '@/components/MainPage/References/References';

function MainPage() {
  return (
    <main>
      <MainPageHeader />
      <WeAreDaimley />
      <KnowUsBetter />
      <References />
    </main>
  );
}

export default MainPage;
