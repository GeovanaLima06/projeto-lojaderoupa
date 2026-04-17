import { Component } from '@angular/core';
import { SecaoCalcados } from '../secao-calcados/secao-calcados';
import { Promocoes } from '../promocoes/promocoes';

@Component({
  standalone: true,
  selector: 'app-section-center',
  imports: [SecaoCalcados, Promocoes],
  templateUrl: './section-center.html',
  styleUrls: ['./section-center.css'],
})
export class SectionCenter {}
