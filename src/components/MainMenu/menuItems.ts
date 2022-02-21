import { CV_EMAIL } from '@/components/MainPage/MainPageHeader/MainPageHeader';

export const MENU_ITEMS = [
  {
    label: `menu.trainings`,
    subItems: [
      {
        label: `menu.trainings.howDoWeTrain`,
        link: `/trainings#how-do-we-train`,
      },
      { label: `menu.trainings.types`, link: `/trainings#types` },
    ],
  },
  {
    label: `menu.jobOffers`,
    subItems: [
      { label: `O ofertach`, link: `/job-offers` },
      { label: `Lista`, link: `/job-offers#list` },
    ],
  },
  {
    label: `menu.recruitment`,
    subItems: [
      {
        label: `menu.recruitment.positions`,
        link: `/recruitment#positions`,
      },
      {
        label: `menu.recruitment.businesses`,
        link: `/recruitment#positions`,
      },
      { label: `menu.recruitment.process`, link: `/recruitment#process` },
      { label: `menu.recruitment.whyWe`, link: `/recruitment#why-we` },
    ],
  },
  {
    label: `menu.aboutUs`,
    subItems: [
      {
        label: `menu.aboutUs.getKnowDaimley`,
        link: `/about-us#get-know-daimley`,
      },
      {
        label: `menu.aboutUs.ourServices`,
        link: `/about-us#our-services`,
      },
      { label: `menu.aboutUs.ourTeam`, link: `/about-us#our-team` },
      { label: `menu.aboutUs.ourValues`, link: `/about-us#our-values` },
    ],
  },
  {
    label: `menu.contact`,
    subItems: [
      { label: `menu.contact.delegateForm`, link: `/form` },
      { label: `menu.contact.form`, link: `/contact#form` },
      { label: `menu.contact.sendCV`, link: CV_EMAIL },
    ],
  },
];
