import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), TranslateModule.forRoot()],
      declarations: [AppComponent],
      providers: [TranslateService],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'crm-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('crm-angular')
  })

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'crm-angular app is running!',
    )
  })
})
