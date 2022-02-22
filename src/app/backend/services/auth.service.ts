/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AuthTokenResult } from '../models/auth-token-result';
import { LoginRequest } from '../models/login-request';
import { LoginResult } from '../models/login-result';
import { LogoutRequest } from '../models/logout-request';
import { RefreshTokenRequest } from '../models/refresh-token-request';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getSelf
   */
  static readonly GetSelfPath = '/v1/auth/self';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSelf()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSelf$Response(params?: {
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.GetSelfPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSelf$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSelf(params?: {
  }): Observable<User> {

    return this.getSelf$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation login
   */
  static readonly LoginPath = '/v1/auth/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login$Response(params?: {
    body?: LoginRequest
  }): Observable<StrictHttpResponse<LoginResult>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.LoginPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoginResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login(params?: {
    body?: LoginRequest
  }): Observable<LoginResult> {

    return this.login$Response(params).pipe(
      map((r: StrictHttpResponse<LoginResult>) => r.body as LoginResult)
    );
  }

  /**
   * Path part for operation logout
   */
  static readonly LogoutPath = '/v1/auth/logout';

  /**
   * Logout from using a refresh token.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logout()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logout$Response(params?: {
    body?: LogoutRequest
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.LogoutPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Logout from using a refresh token.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `logout$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logout(params?: {
    body?: LogoutRequest
  }): Observable<void> {

    return this.logout$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation refreshToken
   */
  static readonly RefreshTokenPath = '/v1/auth/refresh-token';

  /**
   * Use a refresh token to get a new access token.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `refreshToken()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  refreshToken$Response(params?: {
    body?: RefreshTokenRequest
  }): Observable<StrictHttpResponse<AuthTokenResult>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.RefreshTokenPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthTokenResult>;
      })
    );
  }

  /**
   * Use a refresh token to get a new access token.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `refreshToken$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  refreshToken(params?: {
    body?: RefreshTokenRequest
  }): Observable<AuthTokenResult> {

    return this.refreshToken$Response(params).pipe(
      map((r: StrictHttpResponse<AuthTokenResult>) => r.body as AuthTokenResult)
    );
  }

}
