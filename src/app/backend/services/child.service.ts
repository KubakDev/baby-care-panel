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

import { Child } from '../models/child';
import { CreateChildRequest } from '../models/create-child-request';
import { Gender } from '../models/gender';
import { UpdateChildRequest } from '../models/update-child-request';

@Injectable({
  providedIn: 'root',
})
export class ChildService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listChildren
   */
  static readonly ListChildrenPath = '/v1/children';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listChildren()` instead.
   *
   * This method doesn't expect any request body.
   */
  listChildren$Response(params: {
    ParentId: string;
    Limit?: number;
    SearchText?: string;
    LastSeenDisplayName?: string;
    SortDescending?: boolean;
    Born?: boolean;
    BornFrom?: string;
    BornTo?: string;
    Gender?: Gender;
    Diseases?: Array<string>;
  }): Observable<StrictHttpResponse<Array<Child>>> {

    const rb = new RequestBuilder(this.rootUrl, ChildService.ListChildrenPath, 'get');
    if (params) {
      rb.query('ParentId', params.ParentId, {});
      rb.query('Limit', params.Limit, {});
      rb.query('SearchText', params.SearchText, {});
      rb.query('LastSeenDisplayName', params.LastSeenDisplayName, {});
      rb.query('SortDescending', params.SortDescending, {});
      rb.query('Born', params.Born, {});
      rb.query('BornFrom', params.BornFrom, {});
      rb.query('BornTo', params.BornTo, {});
      rb.query('Gender', params.Gender, {});
      rb.query('Diseases', params.Diseases, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Child>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listChildren$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listChildren(params: {
    ParentId: string;
    Limit?: number;
    SearchText?: string;
    LastSeenDisplayName?: string;
    SortDescending?: boolean;
    Born?: boolean;
    BornFrom?: string;
    BornTo?: string;
    Gender?: Gender;
    Diseases?: Array<string>;
  }): Observable<Array<Child>> {

    return this.listChildren$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Child>>) => r.body as Array<Child>)
    );
  }

  /**
   * Path part for operation createChild
   */
  static readonly CreateChildPath = '/v1/children';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createChild()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createChild$Response(params?: {
    body?: CreateChildRequest
  }): Observable<StrictHttpResponse<Child>> {

    const rb = new RequestBuilder(this.rootUrl, ChildService.CreateChildPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Child>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createChild$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createChild(params?: {
    body?: CreateChildRequest
  }): Observable<Child> {

    return this.createChild$Response(params).pipe(
      map((r: StrictHttpResponse<Child>) => r.body as Child)
    );
  }

  /**
   * Path part for operation getChildById
   */
  static readonly GetChildByIdPath = '/v1/children/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getChildById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getChildById$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Child>> {

    const rb = new RequestBuilder(this.rootUrl, ChildService.GetChildByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Child>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getChildById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getChildById(params: {
    id: string;
  }): Observable<Child> {

    return this.getChildById$Response(params).pipe(
      map((r: StrictHttpResponse<Child>) => r.body as Child)
    );
  }

  /**
   * Path part for operation updateChild
   */
  static readonly UpdateChildPath = '/v1/children/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateChild()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateChild$Response(params: {
    id: string;
    body?: UpdateChildRequest
  }): Observable<StrictHttpResponse<Child>> {

    const rb = new RequestBuilder(this.rootUrl, ChildService.UpdateChildPath, 'put');
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
        return r as StrictHttpResponse<Child>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateChild$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateChild(params: {
    id: string;
    body?: UpdateChildRequest
  }): Observable<Child> {

    return this.updateChild$Response(params).pipe(
      map((r: StrictHttpResponse<Child>) => r.body as Child)
    );
  }

}
