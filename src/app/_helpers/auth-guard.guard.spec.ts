import { TestBed } from '@angular/core/testing'

import { AuthGuardGuard } from './auth-guard.guard'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AuthService } from '../_services/auth.service'
import { RouterTestingModule } from '@angular/router/testing'

describe('AuthGuardGuard', () => {
  let guard: AuthGuardGuard

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [AuthService],
    })
    guard = TestBed.inject(AuthGuardGuard)
  })

  it('should be created', () => {
    expect(guard).toBeTruthy()
  })
})
