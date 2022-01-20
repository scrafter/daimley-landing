import '@fontsource/lato';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { theme } from '@/theme';
import SEO from '@/components/SEO/SEO';
import MainMenu from '@/components/MainMenu/MainMenu';
import Footer from '@/components/Footer/Footer';
import { css, Global, ThemeProvider } from '@emotion/react';
import emotionReset from 'emotion-reset';
import useTranslation from '@/useTranslation';
import { ToastContainer } from 'react-toastify';

interface Props {
  children: JSX.Element;
  darkMenu?: boolean;
}

function PageWrapper({ children, darkMenu }: Props) {
  const { translate, lang } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <SEO title={translate(`pageTitle`)} lang={lang} />
      <ToastContainer
        position="bottom-right"
        theme="colored"
        hideProgressBar
        draggable={false}
      />

      <MainMenu darkMenu={darkMenu} />
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
