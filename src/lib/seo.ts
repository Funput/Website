import { FUNPUT_CONSTANTS } from './constants';

export const DEFAULT_DESCRIPTION =
  'Funput là bộ gõ tiếng Việt mã nguồn mở, nhẹ và tập trung vào quyền riêng tư. Gõ Telex hoặc VNI trên iOS, Android, macOS, Windows và Linux — từ máy tính đến điện thoại.';

export const HOME_TITLE = 'Funput — Bộ gõ tiếng Việt cho iOS, Android, macOS, Windows và Linux';

const KEYWORDS =
  'funput, bộ gõ tiếng việt, bàn phím tiếng việt, input method tiếng việt, telex, vni, bộ gõ tiếng việt ios, bộ gõ tiếng việt android, bộ gõ tiếng việt macos, bộ gõ tiếng việt windows, bộ gõ tiếng việt linux, bàn phím tiếng việt iphone, bàn phím tiếng việt ipad, vietnamese input method, open source vietnamese keyboard, gõ tiếng việt đa nền tảng';

export function absoluteUrl(path = '/'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (normalized === '/') {
    return `${FUNPUT_CONSTANTS.SITE_URL}/`;
  }
  return `${FUNPUT_CONSTANTS.SITE_URL}${normalized.replace(/\/$/, '')}`;
}

export function ogImageUrl(path: string = FUNPUT_CONSTANTS.OG_IMAGE_PATH): string {
  if (path.startsWith('http')) {
    return path;
  }
  return absoluteUrl(path);
}

export type SeoInput = {
  title: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string;
};

export function buildSeo(input: SeoInput) {
  const description = input.description ?? DEFAULT_DESCRIPTION;
  const canonicalPath = input.canonicalPath ?? '/';
  const url = absoluteUrl(canonicalPath);
  const image = ogImageUrl(input.ogImage);

  return {
    title: input.title,
    description,
    canonical: url,
    keywords: input.keywords ?? KEYWORDS,
    ogType: input.ogType ?? 'website',
    ogImage: image,
    url,
  };
}

/** JSON-LD graph for the home page (Organization, WebSite, SoftwareApplication, FAQ). */
export function homeJsonLd() {
  const site = FUNPUT_CONSTANTS.SITE_URL;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${site}/#organization`,
        name: 'Funput',
        url: `${site}/`,
        logo: `${site}/brand/logo.png`,
        email: FUNPUT_CONSTANTS.CONTACT_EMAIL,
        sameAs: [FUNPUT_CONSTANTS.GITHUB_URL, `${FUNPUT_CONSTANTS.FACEBOOK_URL}/`],
      },
      {
        '@type': 'WebSite',
        '@id': `${site}/#website`,
        url: `${site}/`,
        name: 'Funput',
        description:
          'Funput là bộ gõ tiếng Việt mã nguồn mở, nhẹ và tập trung vào quyền riêng tư. Gõ Telex hoặc VNI trên iOS, Android, macOS, Windows và Linux.',
        inLanguage: 'vi',
        dateModified: '2026-09-26',
        publisher: { '@id': `${site}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${site}/#webpage`,
        url: `${site}/`,
        name: HOME_TITLE,
        description: DEFAULT_DESCRIPTION,
        inLanguage: 'vi',
        isPartOf: { '@id': `${site}/#website` },
        about: { '@id': `${site}/#software` },
        dateModified: '2026-09-26',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: ogImageUrl(),
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${site}/#software`,
        name: 'Funput',
        alternateName: ['Funput IME', 'Bộ gõ Funput', 'Funput Vietnamese Input Method'],
        url: `${site}/`,
        description: DEFAULT_DESCRIPTION,
        applicationCategory: 'UtilitiesApplication',
        applicationSubCategory: 'Input Method',
        operatingSystem: ['iOS', 'Android', 'macOS', 'Windows', 'Linux'],
        featureList: [
          'Vietnamese Telex input',
          'Vietnamese VNI input',
          'Native input method on macOS, Windows, and Linux',
          'Vietnamese keyboard for iPhone, iPad, and Android',
          'Available on App Store and Google Play',
          'Open source under MIT license',
          'Lightweight and privacy-focused',
        ],
        isAccessibleForFree: true,
        license: 'https://opensource.org/license/mit',
        downloadUrl: FUNPUT_CONSTANTS.RELEASES_URL,
        softwareHelp: FUNPUT_CONSTANTS.DOCS_URL,
        dateModified: '2026-09-26',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        publisher: { '@id': `${site}/#organization` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${site}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Funput là gì?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Funput là bộ gõ tiếng Việt mã nguồn mở, siêu nhẹ và an toàn. Ứng dụng giúp bạn gõ tiếng Việt bằng Telex hoặc VNI trên nhiều thiết bị.',
            },
          },
          {
            '@type': 'Question',
            name: 'Funput hỗ trợ những nền tảng nào?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Funput chạy trên iOS, Android, macOS, Windows và Linux. Bản máy tính tải từ trang phát hành; iOS trên App Store, Android trên Google Play.',
            },
          },
          {
            '@type': 'Question',
            name: 'Funput hỗ trợ kiểu gõ nào?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Funput hỗ trợ hai kiểu gõ tiếng Việt phổ biến: Telex và VNI.',
            },
          },
        ],
      },
    ],
  };
}
