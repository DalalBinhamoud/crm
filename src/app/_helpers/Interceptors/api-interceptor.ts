import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from '../../../environments/environment'
import { AuthService } from '../../_services/auth.service'

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    // add header with basic auth credentials if user is logged in and request is to the api url
    // const user = this.authenticationService.userValue
    // const isLoggedIn = user && user.authdata
    console.log('track=1', environment.baseUrl)
    const isApiUrl = request.url.startsWith(environment.baseUrl)
    // if (isLoggedIn && isApiUrl) {
    // const  request.clone({ url: `${environment.baseUrl}${request.url}` })
    console.log('track=2', isApiUrl)

    const baseUrl = `${environment.baseUrl}${request.url}`
    if (!request.url.startsWith('/assets')) {
      if (localStorage.getItem('token')) {
        request = request.clone({
          url: baseUrl,
          setHeaders: {
            Authorization: `Basic ${localStorage.getItem('token')}`,
            //   Authorization: `Basic ${user.authdata}`,
          },
        })
      } else {
        request = request.clone({
          url: baseUrl,
        })
      }
    }

    // const baseUrl = request.clone({ url: `your-api-url/${request.url}` })
    console.log('track=3', request)
    return next.handle(request)
  }
}
