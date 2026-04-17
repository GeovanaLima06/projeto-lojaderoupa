import { Routes } from '@angular/router';
import { Tendenciasmasc } from './tendenciasmasc/tendenciasmasc';
import { Tendenciasfem } from './tendenciasfem/tendenciasfem';
import { Promocoes } from './promocoes/promocoes';
import { SectionCenter } from './section-center/section-center';

export const routes: Routes = [
  { path: '', component: SectionCenter },
  { path: 'tendencias-masculino', component: Tendenciasmasc },
  { path: 'tendencias-feminino', component: Tendenciasfem },
  { path: 'liquidacao', component: Promocoes },
];
