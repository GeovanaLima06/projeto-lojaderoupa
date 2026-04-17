import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { SectionCenter } from './section-center/section-center';
import { Promocoes } from './promocoes/promocoes';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Menu,SectionCenter,Promocoes],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('StylepSphere');
}
