import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../authentication/authentication.service';

export class AuthInterceptor implements HttpInterceptor {

	constructor(
		private authenticationService: AuthenticationService
	) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let clonedRequest: HttpRequest<any>;
		let token = this.authenticationService.getToken();

		if (token) {
			clonedRequest = req.clone({
				headers: req.headers.set('Authentication', `Bearer ${''}`)
			});
		}

		return next.handle(clonedRequest || req);
	}
}
