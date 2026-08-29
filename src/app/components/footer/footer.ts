import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FUNPUT_CONSTANTS } from '../../constants';

interface FooterLink {
  label: string;
  href?: string;
  external?: boolean;
  routerLink?: string;
}

@Component({
  selector: 'app-footer',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './footer.html',
})
export class FooterComponent {
  protected readonly constants = FUNPUT_CONSTANTS;
  protected readonly contactEmail = FUNPUT_CONSTANTS.CONTACT_EMAIL;
  protected readonly contactMailto = `mailto:${FUNPUT_CONSTANTS.CONTACT_EMAIL}`;
  protected readonly currentYear = new Date().getFullYear();

  protected readonly productLinks: FooterLink[] = [
    { label: 'Nền tảng', href: '/#platforms' },
    { label: 'Tải xuống', href: FUNPUT_CONSTANTS.RELEASES_URL, external: true },
    { label: 'Tài liệu', href: FUNPUT_CONSTANTS.DOCS_URL, external: true },
    {
      label: 'Hướng dẫn cài đặt',
      href: FUNPUT_CONSTANTS.INSTALL_DOCS_URL,
      external: true,
    },
  ];

  protected readonly communityLinks: FooterLink[] = [
    { label: 'GitHub', href: FUNPUT_CONSTANTS.GITHUB_URL, external: true },
    { label: 'Facebook', href: FUNPUT_CONSTANTS.FACEBOOK_URL, external: true },
    { label: 'Liên hệ', href: `mailto:${FUNPUT_CONSTANTS.CONTACT_EMAIL}` },
  ];

  protected readonly legalLinks: FooterLink[] = [
    { label: 'Quyền riêng tư', routerLink: '/privacy' },
    {
      label: 'Giấy phép MIT',
      href: `${FUNPUT_CONSTANTS.GITHUB_URL}/blob/main/LICENSE`,
      external: true,
    },
  ];
}
