// Single source for the site's public URL and profile facts used in SEO metadata.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://faisalmehmood.tech';

export const SITE_TITLE = 'Faisal Mehmood - Senior Backend Engineer';

export const SITE_DESCRIPTION =
  'Senior Backend Engineer building APIs, data sync engines and CMS platforms with Node.js, NestJS, Next.js, Python and WordPress. Remote, all time zones.';

// schema.org structured data: tells search engines this page is a profile of one person.
export const personJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Faisal Mehmood',
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: SITE_TITLE,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      mainEntity: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Faisal Mehmood',
      jobTitle: 'Senior Backend Engineer',
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      image: `${SITE_URL}/profile.png`,
      email: 'mailto:faisalmehmooddev@gmail.com',
      worksFor: { '@type': 'Organization', name: 'Revnix' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Virtual University of Pakistan' },
      address: { '@type': 'PostalAddress', addressLocality: 'Haripur', addressCountry: 'PK' },
      knowsAbout: ['Node.js', 'NestJS', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'WordPress', 'TypeScript', 'Headless CMS'],
      sameAs: ['https://github.com/ifaisaldev', 'https://linkedin.com/in/faisal-mehmood-dev'],
    },
  ],
};
