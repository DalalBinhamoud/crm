import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RequestComponent } from './request/request.component'
import { ReactiveFormsModule } from '@angular/forms'
import { TranslateModule } from '@ngx-translate/core'
import { MaterialModule } from '../material/material.module'

@NgModule({
  declarations: [RequestComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, TranslateModule],
  exports: [RequestComponent],
})
export class SharedModule {}
