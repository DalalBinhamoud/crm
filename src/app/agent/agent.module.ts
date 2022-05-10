import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SideMenuComponent } from './side-menu/side-menu.component'
import { ProfileComponent } from './profile/profile.component'
import { MaterialModule } from '../material/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { TranslateModule } from '@ngx-translate/core'
import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component'

@NgModule({
  declarations: [SideMenuComponent, ProfileComponent, UsersComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    RouterModule,
  ],
})
export class AgentModule {}
