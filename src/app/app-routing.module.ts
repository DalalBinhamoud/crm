import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProfileComponent } from './agent/profile/profile.component'
import { SideMenuComponent } from './agent/side-menu/side-menu.component'
import { UsersComponent } from './agent/users/users.component'
import { LoginComponent } from './authComponents/login/login.component'
import { RegisterComponent } from './authComponents/register/register.component'
import { HomeComponent } from './client/home/home.component'
import { RequestComponent } from './shared/request/request.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  { path: 'login', component: LoginComponent },
  { path: 'login/client', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'agent',
    component: SideMenuComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'requests', component: RequestComponent },
      { path: 'users', component: UsersComponent },
    ],
  },
  {
    path: 'client',
    children: [{ path: 'home', component: HomeComponent }],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
