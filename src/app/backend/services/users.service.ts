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

import { CreateUser } from '../models/create-user';
import { Role } from '../models/role';
import { UpdateUser } from '../models/update-user';
import { User } from '../models/user';
import { UserStatus } from '../models/user-status';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listUsers
   */
  static readonly ListUsersPath = '/v1/users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  listUsers$Response(params: {
    Limit?: number;
    Role: Role;
    IsVerified?: boolean;
    Status?: UserStatus;
    SearchText?: string;
    LastSeenUsername?: string;
    SortDescending?: boolean;
  }): Observable<StrictHttpResponse<Array<User>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ListUsersPath, 'get');
    if (params) {
      rb.query('Limit', params.Limit, {});
      rb.query('Role', params.Role, {});
      rb.query('IsVerified', params.IsVerified, {});
      rb.query('Status', params.Status, {});
      rb.query('SearchText', params.SearchText, {});
      rb.query('LastSeenUsername', params.LastSeenUsername, {});
      rb.query('SortDescending', params.SortDescending, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<User>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listUsers(params: {
    Limit?: number;
    Role: Role;
    IsVerified?: boolean;
    Status?: UserStatus;
    SearchText?: string;
    LastSeenUsername?: string;
    SortDescending?: boolean;
  }): Observable<Array<User>> {

    return this.listUsers$Response(params).pipe(
      map((r: StrictHttpResponse<Array<User>>) => r.body as Array<User>)
    );
  }

  /**
   * Path part for operation createUser
   */
  static readonly CreateUserPath = '/v1/users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser$Response(params?: {
    body?: CreateUser
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.CreateUserPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
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
   * To access the full response (for headers, for example), `createUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser(params?: {
    body?: CreateUser
  }): Observable<User> {

    return this.createUser$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation getUserById
   */
  static readonly GetUserByIdPath = '/v1/users/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserById$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.GetUserByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `getUserById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserById(params: {
    id: string;
  }): Observable<User> {

    return this.getUserById$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation updateUser
   */
  static readonly UpdateUserPath = '/v1/users/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser$Response(params: {
    id: string;
    body?: UpdateUser
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UpdateUserPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
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
   * To access the full response (for headers, for example), `updateUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser(params: {
    id: string;
    body?: UpdateUser
  }): Observable<User> {

    return this.updateUser$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

}
