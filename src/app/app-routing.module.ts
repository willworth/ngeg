import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { FormexampleComponent } from './formexample/formexample.component'

const routes: Routes = [
  { path: 'home', component: HelloworldComponent},
  { path: 'forms', component: FormexampleComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
