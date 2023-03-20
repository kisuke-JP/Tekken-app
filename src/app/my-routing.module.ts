import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //ルーティング有効
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class MyRoutingModule { }
