import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { AuthService } from '../../_services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any
  hide = true
  emailErrors: any = []
  constructor(
    private authService: AuthService,
    private translate: TranslateService,
    private router: Router,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'),
      ]),
      password: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    this.translate
      .get(['errors.invalidEmail', 'errors.required'])
      .subscribe((translations: any) => {
        this.emailErrors.push(translations['errors.invalidEmail'])
        this.emailErrors.push(translations['errors.required'])
      })
  }

  getEmailErrorMessage() {
    if (this.loginForm.get('email')?.hasError('pattern')) {
      return this.emailErrors[0]
    }

    return this.emailErrors[1]
  }
  login() {
    this.authService
      .login(
        this.loginForm.controls['email'].value,
        this.loginForm.controls['password'].value,
      )
      .subscribe((res: any) => {
        localStorage.setItem('token', res['token'])
        this.router.navigate([
          this.router.url.includes('client')
            ? '/client/home'
            : '/agent/profile',
        ])
      })
  }
}
