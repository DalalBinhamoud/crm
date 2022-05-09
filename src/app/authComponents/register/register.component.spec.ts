import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { TranslateModule, TranslateService } from '@ngx-translate/core'

import { RegisterComponent } from './register.component'

describe('RegisterComponent', () => {
  let component: RegisterComponent
  let fixture: ComponentFixture<RegisterComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [RegisterComponent],
      providers: [TranslateService],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('validate registration form', () => {
    const registerForm = component.registerForm

    const registerInputs = fixture.debugElement.nativeElement
      .querySelector('#registerForm')
      .querySelectorAll('input')

    const firstName = registerInputs[0]
    firstName.value = 'my name'

    const lastName = registerInputs[1]
    lastName.value = 'my last name'

    const email = registerInputs[2]
    email.value = 'email@example.com'

    const password = registerInputs[3]
    password.value = '1234'
    firstName.dispatchEvent(new Event('input'))
    lastName.dispatchEvent(new Event('input'))
    email.dispatchEvent(new Event('input'))
    password.dispatchEvent(new Event('input'))

    fixture.detectChanges()
    // afterEach(() => {
    //   fixture.destroy()
    // })
    fixture.whenStable().then(() => {
      expect(registerForm.valid).toBeTruthy()
    })
  })
})
