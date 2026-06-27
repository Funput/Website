import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FUNPUT_CONSTANTS } from '../../constants';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly constants = FUNPUT_CONSTANTS;
  protected readonly contactEmail = FUNPUT_CONSTANTS.CONTACT_EMAIL;
  protected readonly contactMailto = `mailto:${FUNPUT_CONSTANTS.CONTACT_EMAIL}`;
  protected readonly currentYear = new Date().getFullYear();

  protected readonly productLinks: FooterLink[] = [
    { label: 'Nền tảng', href: '#platforms' },
    { label: 'Tải xuống', href: FUNPUT_CONSTANTS.RELEASES_URL, external: true },
  ];

  protected readonly resourceLinks: FooterLink[] = [
    { label: 'Tài liệu', href: FUNPUT_CONSTANTS.DOCS_URL, external: true },
    { label: 'GitHub', href: FUNPUT_CONSTANTS.GITHUB_URL, external: true },
    { label: 'Bản phát hành', href: FUNPUT_CONSTANTS.RELEASES_URL, external: true },
    { label: 'Giấy phép MIT', href: `${FUNPUT_CONSTANTS.GITHUB_URL}/blob/main/LICENSE`, external: true },
  ];
}
