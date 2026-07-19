import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FUNPUT_CONSTANTS } from '../../constants';

@Component({
  selector: 'app-privacy',
  imports: [RouterLink],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css',
})
export class PrivacyComponent {
  protected readonly constants = FUNPUT_CONSTANTS;
  protected readonly contactEmail = FUNPUT_CONSTANTS.CONTACT_EMAIL;
  protected readonly contactMailto = `mailto:${FUNPUT_CONSTANTS.CONTACT_EMAIL}`;
  protected readonly lastUpdated = '19 tháng 7 năm 2026';
}
