import { FUNPUT_CONSTANTS } from './constants';

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const PRIMARY_NAV: NavLink[] = [
  { label: 'Nền tảng', href: '/#platforms' },
  { label: 'Blog', href: '/blog' },
  { label: 'Tài liệu', href: FUNPUT_CONSTANTS.DOCS_URL, external: true },
];

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const FOOTER_PRODUCT: FooterLink[] = [
  { label: 'Nền tảng', href: '/#platforms' },
  { label: 'Tải xuống', href: FUNPUT_CONSTANTS.RELEASES_URL, external: true },
  { label: 'Blog', href: '/blog' },
  { label: 'Tài liệu', href: FUNPUT_CONSTANTS.DOCS_URL, external: true },
  { label: 'Hướng dẫn cài đặt', href: FUNPUT_CONSTANTS.INSTALL_DOCS_URL, external: true },
];

export const FOOTER_COMMUNITY: FooterLink[] = [
  { label: 'GitHub', href: FUNPUT_CONSTANTS.GITHUB_URL, external: true },
  { label: 'Facebook', href: FUNPUT_CONSTANTS.FACEBOOK_URL, external: true },
  { label: 'Liên hệ', href: `mailto:${FUNPUT_CONSTANTS.CONTACT_EMAIL}` },
];

export const FOOTER_LEGAL: FooterLink[] = [
  { label: 'Quyền riêng tư', href: '/privacy' },
  { label: 'Giấy phép MIT', href: FUNPUT_CONSTANTS.LICENSE_URL, external: true },
];
