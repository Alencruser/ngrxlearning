import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutMatiereComponent } from './ajout-matieres.component';
import { MatieresComponent } from './matieres.component';


const routes: Routes = [
  { path: '', redirectTo: '/matiere', pathMatch: 'full' },
  { path: 'matiere', component: MatieresComponent },
  { path: 'ajout-matiere', component: AjoutMatiereComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
