import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciComponent } from './inici/inici.component';
import { NoticeComponent } from './notice/notice.component';
import { UserComponent } from './user/user.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { ExpirienceEmpresaComponent } from './expirience-empresa/expirience-empresa.component';
import { JobsComponent } from './jobs/jobs.component';
import { EmpresaComponentComponent } from './empresa-component/empresa-component.component';
import { EmpresaComponent } from './empresa/empresa.component';


@NgModule({
   declarations: [
      AppComponent,
      IniciComponent,
      NoticeComponent,
      UserComponent,
      FilterPipe,
      ExpirienceEmpresaComponent,
      JobsComponent,
      JobsComponent,
      EmpresaComponentComponent,
      EmpresaComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
