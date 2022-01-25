import { useCallback } from 'react';
import useTranslation from '@/useTranslation';
import { toast } from 'react-toastify';

export interface FormData {
  topic?: string;
  firstName: string;
  lastName: string;
  companyName: string;
  phone: string;
  email: string;
  message: string;
}

const getData = (data: FormData) => {
  const formData = new FormData();
  if (data.topic) {
    formData.append(`topic`, data.topic);
  }
  formData.append(`name`, `Ze strony Daimley.pl`);
  formData.append(`Imię`, data.firstName);
  formData.append(`Nazwisko`, data.lastName);
  formData.append(`Firma`, data.companyName || `-`);
  formData.append(`email`, data.email);
  formData.append(`phone`, data.phone || `-`);
  formData.append(`Wiadomość`, data.message);
  return formData;
};

const useContactForm = () => {
  const { translate } = useTranslation();

  const onSubmit = useCallback((body: FormData, reset: () => void) => {
    fetch(`https://getform.io/f/a34a8a8b-f1e1-4d67-b55b-ba6c29b57ef7`, {
      method: `POST`,
      body: getData(body),
    }).then(() => {
      reset();
      toast.success(translate(`general.formSent`));
    });
  }, []);

  return { onSubmit };
};

export default useContactForm;
