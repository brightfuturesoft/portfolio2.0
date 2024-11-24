import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTitle = ({ title, description, keywords, author, ogTitle, ogDescription, ogImage, ogUrl }) => {
      return (
            <Helmet>
                  {/* Basic meta tags */}
                  <title>{`Bright Future Soft | ${title}`}</title>
                  <meta name="description" content={description || "Default description for Bright Future Soft"} />
                  <meta name="keywords" content={keywords || "software, development, technology, services"} />
                  <meta name="author" content={author || "Bright Future Soft"} />

                  {/* Open Graph meta tags for social media */}
                  <meta property="og:title" content={ogTitle || title} />
                  <meta property="og:description" content={ogDescription || description} />
                  <meta property="og:image" content={ogImage || "/default-image.jpg"} />
                  <meta property="og:url" content={ogUrl || window.location.href} />
                  <meta property="og:type" content="website" />

                  {/* Twitter Card meta tags */}
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:title" content={ogTitle || title} />
                  <meta name="twitter:description" content={ogDescription || description} />
                  <meta name="twitter:image" content={ogImage || "/default-image.jpg"} />

                  {/* Additional meta tags */}
                  <link rel="canonical" href={ogUrl || window.location.href} />
                  <meta property="article:published_time" content={new Date().toISOString()} />
                  <meta property="article:modified_time" content={new Date().toISOString()} />
            </Helmet>
      );
};

export default MetaTitle;


export const base_url = 'https://bright-server.vercel.app/api/v1'
