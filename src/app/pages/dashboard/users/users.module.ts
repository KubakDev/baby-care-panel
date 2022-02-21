import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UserformComponent } from './userform/userform.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserformComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    UsersRoutingModule,
    ReactiveFormsModule,

  ],

})
export class UsersModule { }
