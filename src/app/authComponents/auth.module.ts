import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { MaterialModule } from '../material/material.module'
import { TranslateModule } from '@ngx-translate/core'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, TranslateModule],
})
export class AuthModule {}
