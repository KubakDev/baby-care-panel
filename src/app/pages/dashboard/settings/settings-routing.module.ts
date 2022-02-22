import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppManagementComponent } from './app-management/app-management.component';
import { SettingsComponent } from './settings.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    data: { breadcrumb: 'Settings' },

    children: [
      {
        path: '',
        component: UserDetailsComponent,
        data: { breadcrumb: 'User Details' },
      },
      {
        path: 'app-management',
        component: AppManagementComponent,
        data: { breadcrumb: 'App Management' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
