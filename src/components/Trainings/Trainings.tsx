import React from 'react';
import TrainingsHeader from '@/components/Trainings/TrainingsHeader/TrainingsHeader';
import TrainingsBrief from '@/components/Trainings/TrainingsBrief/TrainingsBrief';
import TrainingsContact from '@/components/Trainings/TrainingsContact/TrainingsContact';

function Trainings() {
  return (
    <main>
      <TrainingsHeader />
      <TrainingsBrief />
      <TrainingsContact />
    </main>
  );
}

export default Trainings;
