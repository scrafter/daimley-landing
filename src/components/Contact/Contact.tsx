import React from 'react';
import ContactHeader from '@/components/Contact/ContactHeader/ContactHeader';
import ContactYourOpinion from '@/components/Contact/ContactYourOpinion/ContactYourOpinion';
import ContactData from '@/components/Contact/ContactData/ContactData';

function Contact() {
  return (
    <main>
      <ContactHeader />
      <ContactData />
      <ContactYourOpinion />
    </main>
  );
}

export default Contact;
