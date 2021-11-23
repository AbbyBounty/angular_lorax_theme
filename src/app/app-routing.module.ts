import { ProfileComponent } from './profile/profile.component';
import { WebsiteComponent } from './website/website.component';
import { AndroidComponent } from './android/android.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ManangedConfigComponent } from './mananged-config/mananged-config.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { DevicesComponent } from './devices/devices.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './authentication/page404/page404.component';
import { AuthGuard } from './core/guard/auth.guard';
import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
      },

      {
        path: 'devices',
        component: DevicesComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'website',
        component: WebsiteComponent
      },

      {
        path: 'android',
        component: AndroidComponent
      },

      {
        path: 'enterprise',
        component: EnterpriseComponent
      },


      {
        path: 'config',
        component: ManangedConfigComponent
      },

      {
        path: 'advanced',
        component: AdvancedComponent
      },
    ]
  },

  {
    path: 'authentication',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      )
  },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
