import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './default/add/add.component';
import { DefaultComponent } from './default/default.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"default" , component:DefaultComponent},
  {path:"add" , component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
