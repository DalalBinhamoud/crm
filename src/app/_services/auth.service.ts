import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    let values = { email, password }
    return this.http.post('/login', values)
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token')
    // this.userSubject.next(null);
    // this.router.navigate(['/login']);
  }
}
