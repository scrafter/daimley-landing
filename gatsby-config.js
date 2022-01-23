module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  siteMetadata: {
    title: `Przyjazne rekrutacje, eksperckie szkolenia, consulting zarządczy.`,
    description: `Rekrutacje dla firm – atrakcyjne warunki współpracy. Szkolenia dla firm z dofinansowaniem.`,
    keywords: `szkolenie, szkolenia, rekrutacje, rekrutacja, consulting, rekrutacje stałe, szkolenia sprzedażowe, szkolenia handlowe, dotacje unijne, dofinansowanie szkoleń, praca, szukanie pracy, praca marzeń, wsparcie dla firm, curriculum vitae, życiorys zawodowy, budowanie zespołu, jak sprzedawać więcej, zarządzanie zespołem, motywowanie, zarządzanie, kierowanie, osiąganie celów, rekrutowanie, idealny pracownik, pracodawca.`,
    siteUrl: `https://daimley.pl`,
    author: `Andrzej Urbaniak`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daimley Polska | Agencja zatrudnienia oraz szkolenia sprzedażowe`,
        short_name: `Daimley`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#419d3e`,
        display: `standalone`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`pl`],
        defaultLanguage: `pl`,
        redirect: false,
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
