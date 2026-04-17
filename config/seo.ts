export const SITE_URL = 'https://steveenquiroz.vercel.app';
export const BLOG_URL = 'https://steveenquiroz.vercel.app';
export const SITE_NAME = 'Steveen Quiroz';
export const SITE_TITLE = 'Steveen Quiroz | Ingeniero en Telemática';
export const SITE_DESCRIPTION = 'Portfolio de Steveen Quiroz, Ingeniero en Telemática de Cuenca, Ecuador, especializado en IoT, análisis de datos, Machine Learning e IA.';
export const SITE_TWITTER = '';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/Profile.png`;
export const DEFAULT_OG_IMAGE_ALT = 'Foto de perfil de Steveen Quiroz, Ingeniero en Telemática';

export const DEFAULT_KEYWORDS = [
  'Steveen Quiroz',
  'Steveen Quiroz portfolio',
  'Ingeniero en Telemática',
  'IoT engineer',
  'data analysis',
  'machine learning',
  'AI engineer',
  'Python developer',
  'ingeniero Ecuador',
  'Cuenca Ecuador engineer',
];

export const BLOG_KEYWORDS = [
  'IoT blog',
  'Machine Learning blog',
  'data analysis',
  'AI engineering',
];

export function absoluteUrl(path = '/') {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

export function blogAbsoluteUrl(path = '/') {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${BLOG_URL}${normalizedPath}`;
}

export function getLocale(language: 'en' | 'es' = 'en') {
  return language === 'es' ? 'es_CO' : 'en_US';
}

export function buildBreadcrumbSchema(items: Array<{ name: string; item: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

export function buildPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Steveen Quiroz',
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    jobTitle: 'Ingeniero en Telemática',
    description: SITE_DESCRIPTION,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cuenca',
      addressCountry: 'Ecuador',
    },
    sameAs: [
      'https://www.linkedin.com/in/steveeaz/',
      'https://github.com/SteveeAX',
    ],
    knowsAbout: [
      'IoT',
      'Python',
      'Machine Learning',
      'Data Analysis',
      'AWS',
      'Google Cloud',
      'Firebase',
      'MQTT',
      'PyTorch',
      'YOLO',
      'Gemini API',
      'C/C++',
      'SQL',
    ],
  };
}

export function buildJobPostingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Ingeniero en Telemática',
    description: SITE_DESCRIPTION,
    datePosted: '2024-01-01',
    validThrough: '2026-12-31',
    hiringOrganization: {
      '@type': 'Organization',
      name: SITE_NAME,
      sameAs: SITE_URL,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cuenca',
        addressCountry: 'Ecuador',
      },
    },
    skills: DEFAULT_KEYWORDS.join(', '),
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    alternateName: 'Steveen Quiroz Portfolio',
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      '@type': 'Person',
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: ['en', 'es'],
  };
}
