import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NothingToShowComponent } from '../nothing-to-show/nothing-to-show.component';
import { UsersComponent } from './users.component';
import { UserResolverService } from 'src/app/services/user-resolver.service';
import { UserformComponent } from './userform/userform.component';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: '', component: NothingToShowComponent, pathMatch: "full" },
      {
        path: ':userId',
        component: UserformComponent,
        data: { breadcrumb: (data: any) => `${data.user.name}` },
        resolve: { user: UserResolverService },
      },



    ]


  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
