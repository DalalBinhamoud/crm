import { Component, OnInit } from '@angular/core'
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms'
import { Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { AuthService } from '../../_services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any
  hide = true
  hideConfirm = true
  credentialErrors = {
    emailPattern: '',
    namePattern: '',
    required: '',
  }

  constructor(
    private authService: AuthService,
    private translate: TranslateService,
    private router: Router,
  ) {
    this.registerForm = new FormGroup(
      {
        first_name: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-zA-Z ]*$'),
        ]),
        last_name: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-zA-Z ]*$'),
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.email,
          Validators.pattern(
            '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
          ),
        ]),
        password: new FormControl('', Validators.required),
        confirmedPassword: new FormControl('', [Validators.required]),
      },
      {
        validators: this.passwordMatchingValidatior,
      },
    )
  }

  passwordMatchingValidatior = (
    control: AbstractControl,
  ): ValidationErrors | null => {
    const password = control.get('password')
    const confirmPassword = control.get('confirmedPassword')

    if (
      password?.value &&
      confirmPassword?.value &&
      password?.value !== confirmPassword?.value
    ) {
      confirmPassword?.setErrors({ passwordMismatch: true })
      return { passwordMismatch: true }
    } else {
      return null
    }
  }

  ngOnInit(): void {
    this.translate
      .get(['errors.invalidEmail', 'errors.invalidName', 'errors.required'])
      .subscribe((translations: any) => {
        this.credentialErrors['emailPattern'] =
          translations['errors.invalidEmail']

        this.credentialErrors['namePattern'] =
          translations['errors.invalidName']

        this.credentialErrors['required'] = translations['errors.required']
      })
  }

  getErrorMessage(controlName: string) {
    if (this.registerForm.get(controlName)?.hasError('pattern')) {
      if (controlName.includes('name')) {
        return this.credentialErrors['namePattern']
      }
      return this.credentialErrors['emailPattern']
    }
    return this.credentialErrors['required']
  }

  register() {
    if (this.registerForm.valid) {
      this.authService
        .register(this.registerForm.value)
        .subscribe((res: any) => {
          localStorage.setItem('token', res['token'])
          this.router.navigate(['/client/home'])
        })
    }
  }
}
