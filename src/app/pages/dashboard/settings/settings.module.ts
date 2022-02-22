import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { AppManagementComponent } from './app-management/app-management.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [SettingsComponent, AppManagementComponent, UserDetailsComponent],
  imports: [CommonModule, SettingsRoutingModule, FormsModule, SharedModule],
})
export class SettingsModule {}
