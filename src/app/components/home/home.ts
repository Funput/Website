import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { PlatformsComponent } from '../platforms/platforms';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, PlatformsComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}
