import React from 'react';
import TrainingsHeader from '@/components/Trainings/TrainingsHeader/TrainingsHeader';
import TrainingsBrief from '@/components/Trainings/TrainingsBrief/TrainingsBrief';
import TrainingsContact from '@/components/Trainings/TrainingsContact/TrainingsContact';
import AboutTrainings from '@/components/Trainings/AboutTrainings/AboutTrainings';

function Trainings() {
  return (
    <main>
      <TrainingsHeader />
      <TrainingsBrief />
      <AboutTrainings />
      <TrainingsContact />
    </main>
  );
}

export default Trainings;
