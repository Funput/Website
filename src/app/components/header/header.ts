import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FUNPUT_CONSTANTS } from '../../constants';

interface HeaderLink {
  label: string;
  href: string;
  external?: boolean;
}

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './header.html',
})
export class HeaderComponent {
  protected readonly constants = FUNPUT_CONSTANTS;

  protected readonly navLinks: HeaderLink[] = [
    { label: 'Nền tảng', href: '/#platforms' },
    { label: 'Tài liệu', href: FUNPUT_CONSTANTS.DOCS_URL, external: true },
    { label: 'GitHub', href: FUNPUT_CONSTANTS.GITHUB_URL, external: true },
  ];
}
