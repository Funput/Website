import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FUNPUT_CONSTANTS } from '../../constants';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
  routerLink?: string;
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
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
  ];

  protected readonly resourceLinks: FooterLink[] = [
    { label: 'Tài liệu', href: FUNPUT_CONSTANTS.DOCS_URL, external: true },
    { label: 'GitHub', href: FUNPUT_CONSTANTS.GITHUB_URL, external: true },
    { label: 'Bản phát hành', href: FUNPUT_CONSTANTS.RELEASES_URL, external: true },
    { label: 'Giấy phép MIT', href: `${FUNPUT_CONSTANTS.GITHUB_URL}/blob/main/LICENSE`, external: true },
  ];

  protected readonly legalLinks: FooterLink[] = [
    { label: 'Chính sách quyền riêng tư', href: '/privacy', routerLink: '/privacy' },
  ];
}
