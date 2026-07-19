import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FUNPUT_CONSTANTS } from '../../constants';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
})
export class HeaderComponent {
  protected readonly constants = FUNPUT_CONSTANTS;
}
