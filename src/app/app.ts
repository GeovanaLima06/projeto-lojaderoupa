import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { Tendenciasfem } from './tendenciasfem/tendenciasfem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Menu, Tendenciasfem ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('StylepShere');
}
