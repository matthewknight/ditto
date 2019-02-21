import { Injectable } from '@angular/core';
import { Volunteer } from '../../models/Volunteer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServerConfig } from '../../ServerConfig';
import { ApiUtil } from '../../api.util';
import { catchError } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorisation': 'testAuth'
    })
};

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {
    constructor(private httpClient: HttpClient) {}

    registerIndividual(volunteer: Volunteer) {
        const apiURL: string = ServerConfig.baseURL + '/volunteers';
        return this.httpClient.post(apiURL, volunteer, httpOptions).pipe(
            catchError(ApiUtil.handleError)
        );
    }
}

