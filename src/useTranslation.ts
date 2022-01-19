import { useIntl } from 'gatsby-plugin-intl';
import { useCallback } from 'react';

const useTranslation = () => {
  const intl = useIntl();

  const translate = useCallback(
    (message: string, parameter?: Record<string, number>) =>
      intl.formatMessage({ id: message }, parameter),
    [intl.formatMessage],
  );

  return { translate, lang: intl.locale };
};

export default useTranslation;
