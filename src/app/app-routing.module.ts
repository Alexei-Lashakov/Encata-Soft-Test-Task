import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ParameterizedComponent } from './parameterized/parameterized.component';
import { ParentComponent } from './parent/parent.component';
import { ParamChildComponent } from './param-child/param-child.component';
 
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'table', loadChildren: '../app/table/table.module'},
  {path: 'parameterized', component: ParameterizedComponent,
    children: [
      {path: 'params/:id', component: ParamChildComponent}]},
  {path: 'parent', component: ParentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
