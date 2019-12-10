import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './auth/auth.guard';
import {ReportsexpenseComponent} from './reports/reportsexpense/reportsexpense.component';
import {ReportsmainComponent} from './reports/reportsmain/reportsmain.component';
import {ReportsinvoiceComponent} from './reports/reportsinvoice/reportsinvoice.component';
import {DafabetComponent} from './reports/dafabet/dafabet.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'reports', component: ReportsmainComponent, children: [
      {path: '', redirectTo: 'dafabet', pathMatch: 'full'},
      {path: 'dafabet', component: DafabetComponent},
      {path: 'expense-reports', component: ReportsexpenseComponent},
      {path: 'invoice-reports', component: ReportsinvoiceComponent}
    ], canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
