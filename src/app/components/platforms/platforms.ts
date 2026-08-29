import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FUNPUT_CONSTANTS } from '../../constants';

@Component({
  selector: 'app-platforms',
  imports: [NgOptimizedImage],
  templateUrl: './platforms.html',
})
export class PlatformsComponent {
  protected readonly constants = FUNPUT_CONSTANTS;
}
