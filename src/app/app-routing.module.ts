import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { autoLoginGuard } from './guards/auto-login.guard';

const routes: Routes = [
  {
    path: 'mulan',
    loadChildren: () =>
      import('./mulan/mulan.module').then((m) => m.MulanPageModule),
    canActivate: [authGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
    canActivate: [autoLoginGuard],
  },
  {
    path: 'registrasi',
    loadChildren: () => import('./registrasi/registrasi.module').then( m => m.RegistrasiPageModule),
    canActivate: [autoLoginGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
