import React from 'react';
import ContactHeader from '@/components/Contact/ContactHeader/ContactHeader';
import ContactYourOpinion from '@/components/Contact/ContactYourOpinion/ContactYourOpinion';
import ContactData from '@/components/Contact/ContactData/ContactData';
import ContactOffers from '@/components/Contact/ContactOffers/ContactOffers';

function Contact() {
  return (
    <main>
      <ContactHeader />
      <ContactData />
      <ContactOffers />
      <ContactYourOpinion />
    </main>
  );
}

export default Contact;
