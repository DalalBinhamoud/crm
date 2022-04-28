import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    SideMenuComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AgentModule { }
