import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StatementComponent} from './statement/statement.component';
import {AuthGuard} from './auth/auth.guard';
import {PdfComponent} from './pdf/pdf.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'statements',
    component: StatementComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'pdf/:id1/:id2',
    component: PdfComponent,
    canActivate: [
      AuthGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
