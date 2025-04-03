import { Routes } from '@angular/router';
import { ClientiPageComponent } from './clienti-page/clienti-page.component';
import { PremiPageComponent } from './premi-page/premi-page.component';
import { ExportPageComponent } from './export-page/export-page.component';

export const routes: Routes = [
  { path: 'clienti', component: ClientiPageComponent },
  { path: 'premi', component: PremiPageComponent },
  { path: 'esporta', component: ExportPageComponent },
  { path: '**', redirectTo: 'clienti' }
];
