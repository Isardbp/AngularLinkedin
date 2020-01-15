import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IniciComponent} from './inici/inici.component';
import { UserComponent } from './user/user.component';
import { JobsComponent } from './jobs/jobs.component';
import { EmpresaComponent } from './empresa/empresa.component'
const routes: Routes = [
  {path:'', redirectTo: '/home',  pathMatch: 'full'},
  {path: 'home', component: IniciComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'empresa/:id', component: EmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
