import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crm-angular'
  emailLabel!: string
  passwordLabel!: string

  private email: string = ''
  private password: string = ''

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'ar'])
    translate.setDefaultLang('ar')
    translate.use('en')
  }
  ngOnInit() {
    this.title = 'crm-angular app is running!'
    // this.translate.instant('welcomeMessage', {
    //   firstName: 'dalal',
    // })

    // this.translate
    //   .get(['login.username', 'login.password'])
    //   .subscribe((translations: any) => {
    //     this.emailLabel = translations['login.email']
    //     this.passwordLabel = translations['login.password']
    //   })
  }
}
