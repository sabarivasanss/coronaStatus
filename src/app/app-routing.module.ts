import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: "", component: DashBoardComponent},

  {path: 'dashboard', component: DashBoardComponent},
  {path: '*', component: AppComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
