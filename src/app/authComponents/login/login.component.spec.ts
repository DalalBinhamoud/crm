import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { TranslateModule, TranslateService } from '@ngx-translate/core'

import { LoginComponent } from './login.component'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [LoginComponent],
      providers: [TranslateService],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('shoud have exactly 2 fields', () => {
    const formEle = fixture.debugElement.nativeElement.querySelector(
      '#loginForm',
    )
    const inputsCount = formEle.querySelectorAll('input')
    expect(inputsCount.length).toEqual(2)
  })

  it('should have inital empty values', () => {
    const formValues = component.loginForm

    const expectedValues = {
      email: '',
      password: '',
    }
    expect(formValues.value).toEqual(expectedValues)
  })

  it('validate email field initial value', () => {
    const emailValue = component.loginForm.get('email')
    const loginForm = fixture.debugElement.nativeElement.querySelector(
      '#loginForm',
    )
    const emailInput = loginForm.querySelectorAll('input')[0]

    expect(emailValue.value).toEqual(emailInput.value)
    expect(emailValue.errors).not.toBeNull()
    expect(emailValue.errors.required).toBeTruthy()
  })
  it('validate email field after entering value', () => {
    const emailFormValue = component.loginForm.get('email')
    const emailInput = fixture.debugElement.nativeElement
      .querySelector('#loginForm')
      .querySelectorAll('input')[0]

    emailInput.value = 'admin@example.com'
    emailInput.dispatchEvent(new Event('input'))
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(emailFormValue.value).toEqual(emailInput.value)
      expect(emailFormValue.errors).toBeNull()
    })
  })

  it('validate login form', () => {
    const loginForm = component.loginForm

    const emailInput = fixture.debugElement.nativeElement
      .querySelector('#loginForm')
      .querySelectorAll('input')[0]

    const passwordInput = fixture.debugElement.nativeElement
      .querySelector('#loginForm')
      .querySelectorAll('input')[1]
    emailInput.value = 'admin@example.com'
    passwordInput.value = '123456'
    emailInput.dispatchEvent(new Event('input'))
    passwordInput.dispatchEvent(new Event('input'))

    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(loginForm.valid).toBeTruthy()
    })
  })
})
