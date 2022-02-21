import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from '../item/item.component';
import { NothingToShowComponent } from '../nothing-to-show/nothing-to-show.component';
import { UsersComponent } from './users.component';
import { UserResolverService } from 'src/app/services/user-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: { breadcrumb: 'Users' },
    children: [
      {
        path: '',
        component: NothingToShowComponent,
        pathMatch: 'full',
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
export class UsersRoutingModule {}
