import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
}) => {
  const siteTitle = 'Mystical Construction';
  const siteDescription = 'Premium construction, renovation, and maintenance services across South Africa.';
  const siteUrl = 'https://mysticalbuild.co.za'; // Replace with actual URL
  const siteImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0q8gOBqL4YIhM75f1rHoE4wylZVlBzWgJO1mowr3vtSyMV_CW052iuc8eFKCV7X4mMgctg-7aeWUCzUJX2YhftRjGkJEaeRfVV4OBfc5wCJFFQAPTNN-YSz2SkIJbhi-dIje4i3vVJMBjxqnuPngXsv7fOeGIr4JLAuhC8BrcNcvKDSSmojnvsP83w_9JsgFcVWAB1e3lZwJgY6i4cRo47vK_3EtiYavRce_vesaZyUa529gSkuLAjxwRad5CkkVZhlgmnAnB6Q'; // Using the hero image as default OG image

  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || siteDescription;
  const metaImage = image || siteImage;
  const metaUrl = url || siteUrl;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{metaTitle}</title>
      <meta name='description' content={metaDescription} />
      {keywords && <meta name='keywords' content={keywords} />}

      {/* Open Graph tags (Facebook, LinkedIn, etc.) */}
      <meta property='og:title' content={metaTitle} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:image' content={metaImage} />
      <meta property='og:url' content={metaUrl} />
      <meta property='og:type' content={type} />

      {/* Twitter tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={metaTitle} />
      <meta name='twitter:description' content={metaDescription} />
      <meta name='twitter:image' content={metaImage} />
    </Helmet>
  );
};

export default SEO;
