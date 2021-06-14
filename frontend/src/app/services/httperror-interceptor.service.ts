import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, concatMap, retryWhen } from 'rxjs/operators';
import { AlertifyService } from './alertify.service';

@Injectable({
    providedIn: 'root'
})
export class HttpErrorInterceptorService implements HttpInterceptor{

    constructor(private alertify: AlertifyService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any>{
        console.log('Http Request started');
        return next.handle(request).pipe(
            retryWhen(error => this.retryRequest(error, 10)),
            catchError((error: HttpErrorResponse) => {
                const errorMessage = this.setError(error);
                console.log(error);
                this.alertify.error(errorMessage);
                return throwError(errorMessage);

            }));
    }
    // Retry the request in case of error
    retryRequest(error: Observable<unknown>, retryCount: number): Observable<unknown>
    {
        return error.pipe(
            concatMap((checkErr: HttpErrorResponse, count: number)=>{
                // Retry in case WebAPI is down
                if(checkErr.status === 0 && count<=retryCount){
                    return of(checkErr);
                }
                // Retry in case unauthorised error
                if(checkErr.status === 401 && count<=retryCount){
                    return of(checkErr);
                }
                return throwError(checkErr);
            })
        );
    }
    setError(error: HttpErrorResponse): string{
        let errorMessage = 'Unknown error occured';
        // client side error is of instance of ErrorEvent
        if (error.error instanceof ErrorEvent){
            // Client side error
            errorMessage = error.error.message;
        }else{
            // Server side error
            if (error.status !== 0){
                errorMessage = error.error.message;
            }
        }

        return errorMessage;
    }

}
