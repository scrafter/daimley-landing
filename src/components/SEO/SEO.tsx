import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

interface Props {
  title: string;
  lang: string;
  description?: string;
}

function Seo({ title, description, lang }: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${title} - ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    >
      <script
        src="https://cdn.jsdelivr.net/gh/scrafter/bontande-partner-script@14072022-test1/script.min.js"
        data-website="https://bontande.com"
        data-button-text="Kup naszą Kartę podarunkową"
        data-seo-text="Bontande.com - Karty podarunkowe!"
      />
    </Helmet>
  );
}

export default Seo;
