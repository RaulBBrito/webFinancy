import { Routes } from '@angular/router';
import { CadastroComponent } from '@app/login/cadastro/cadastro.component';
import { LoginComponent } from '@app/login/login.component';

export const LoginRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
];