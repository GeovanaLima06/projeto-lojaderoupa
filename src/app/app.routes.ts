import { Routes } from '@angular/router';
import { Tendenciasmasc } from './tendenciasmasc/tendenciasmasc';
import { Tendenciasfem } from './tendenciasfem/tendenciasfem';
import { SectionCenter } from './section-center/section-center';
import { SecaoCalcados } from './secao-calcados/secao-calcados';

export const routes: Routes = [
  { path: '', component: SectionCenter },
  { path: 'calcados', component: SecaoCalcados },
  { path: 'tendencias-masculino', component: Tendenciasmasc },
  { path: 'tendencias-feminino', component: Tendenciasfem },
];
