import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserResolverService } from 'src/app/services/user-resolver.service';
import { AuthGuard } from '../auth/guards/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { ItemComponent } from './item/item.component';
import { NothingToShowComponent } from './nothing-to-show/nothing-to-show.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { breadcrumb: 'Dashboard' },

    children: [
      {
        path: '',
        component: NothingToShowComponent,
        data: { breadcrumb: '' },
      },
      {
        path: ':userId',
        component: ItemComponent,
        data: { breadcrumb: (data: any) => `${data.user.name}` },
        resolve: { user: UserResolverService },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
