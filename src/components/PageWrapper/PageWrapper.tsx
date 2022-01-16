import React from 'react';
import { theme } from '@/theme';
import SEO from '@/components/SEO/SEO';
import MainMenu from '@/components/MainMenu/MainMenu';
import Footer from '@/components/Footer/Footer';
import { css, Global, ThemeProvider } from '@emotion/react';
import emotionReset from 'emotion-reset';
import useTranslation from '@/useTranslation';

interface Props {
  children: JSX.Element;
}

function PageWrapper({ children }: Props) {
  const { translate, lang } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <SEO title={translate(`pageTitle`)} lang={lang} />

      <MainMenu />
      {children}
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

export default PageWrapper;
