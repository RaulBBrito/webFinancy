import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from '@app/pages/home';
import { HeaderComponent } from './shared/layout';
import { CommonModule } from '@angular/common';
import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HeaderComponent,
    canActivate: [AuthGuard],
    children: [{path: '', loadChildren: () => HomeModule}],
    data: {
      role: 'ADMIN,GERENTE,FUNC'
    }
  },
  ...LoginRoutes
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
