import React from 'react';
import MainMenu from '@/components/MainMenu/MainMenu';
import emotionReset from 'emotion-reset';
import { Global, css, ThemeProvider } from '@emotion/react';
import SEO from '@/components/SEO/SEO';
import useTranslation from '@/useTranslation';
import Footer from '@/components/Footer/Footer';
import MainPage from '@/components/MainPage/MainPage';

import '@fontsource/lato';
import { theme } from '../theme';

export default function Home() {
  const { lang, translate } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <SEO title={translate(`pageTitle`)} lang={lang} />

      <MainMenu />
      <MainPage />
      <Footer />

      <Global
        styles={css`
          ${emotionReset}
          body {
            font-family: 'lato';
          }

          *,
          *::after,
          *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
        `}
      />
    </ThemeProvider>
  );
}
