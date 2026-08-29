import { Component } from '@angular/core';
import { FUNPUT_CONSTANTS } from '../../constants';

interface MobileNavItem {
  label: string;
  href: string;
  external?: boolean;
  /** Highlights the primary download action. */
  primary?: boolean;
  icon: 'platforms' | 'download' | 'install' | 'github';
}

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.html',
  styleUrl: './mobile-nav.css',
})
export class MobileNavComponent {
  /** Platforms + hero CTAs + GitHub (avoids overlapping docs entries). */
  protected readonly items: MobileNavItem[] = [
    { label: 'Nền tảng', href: '/#platforms', icon: 'platforms' },
    {
      label: 'Tải xuống',
      href: FUNPUT_CONSTANTS.RELEASES_URL,
      external: true,
      primary: true,
      icon: 'download',
    },
    {
      label: 'Cài đặt',
      href: FUNPUT_CONSTANTS.INSTALL_DOCS_URL,
      external: true,
      icon: 'install',
    },
    {
      label: 'GitHub',
      href: FUNPUT_CONSTANTS.GITHUB_URL,
      external: true,
      icon: 'github',
    },
  ];
}
