import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MobileNavComponent],
  templateUrl: './app.html',
})
export class App {}
