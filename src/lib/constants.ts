export const FUNPUT_CONSTANTS = {
  SITE_URL: 'https://funput.app',
  GITHUB_URL: 'https://github.com/Funput/Funput',
  DOCS_URL: 'https://docs.funput.app/',
  INSTALL_DOCS_URL: 'https://docs.funput.app/docs/install/',
  LINUX_DOCS_URL: 'https://docs.funput.app/docs/install/linux/',
  FACEBOOK_URL: 'https://www.facebook.com/FunputIME',
  CONTACT_EMAIL: 'hello@funput.app',
  RELEASES_URL: 'https://github.com/Funput/Funput/releases',
  WINDOWS_STORE_URL: 'https://apps.microsoft.com/store/detail/9NR3WL5PD4ZS',
  IOS_APP_STORE_URL: 'https://apps.apple.com/vn/app/id6788829996',
  ANDROID_PLAY_STORE_URL: 'https://play.google.com/store/apps/details?id=app.funput.funput',
  OG_IMAGE_PATH: '/og-image.webp',
  LICENSE_URL: 'https://github.com/Funput/Funput/blob/main/LICENSE',
} as const;

export type FunputConstants = typeof FUNPUT_CONSTANTS;
