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

import { Advice } from '../models/advice';
import { CreateAdviceRequest } from '../models/create-advice-request';

@Injectable({
  providedIn: 'root',
})
export class AdviceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listAdvices
   */
  static readonly ListAdvicesPath = '/v1/advices';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAdvices()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAdvices$Response(params?: {
    Limit?: number;
    SearchText?: string;
    SortDescending?: boolean;
    Tags?: Array<string>;
    CategoryId?: string;
  }): Observable<StrictHttpResponse<Array<Advice>>> {

    const rb = new RequestBuilder(this.rootUrl, AdviceService.ListAdvicesPath, 'get');
    if (params) {
      rb.query('Limit', params.Limit, {});
      rb.query('SearchText', params.SearchText, {});
      rb.query('SortDescending', params.SortDescending, {});
      rb.query('Tags', params.Tags, {});
      rb.query('CategoryId', params.CategoryId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Advice>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listAdvices$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAdvices(params?: {
    Limit?: number;
    SearchText?: string;
    SortDescending?: boolean;
    Tags?: Array<string>;
    CategoryId?: string;
  }): Observable<Array<Advice>> {

    return this.listAdvices$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Advice>>) => r.body as Array<Advice>)
    );
  }

  /**
   * Path part for operation createAdvice
   */
  static readonly CreateAdvicePath = '/v1/advices';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createAdvice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAdvice$Response(params?: {
    body?: CreateAdviceRequest
  }): Observable<StrictHttpResponse<Advice>> {

    const rb = new RequestBuilder(this.rootUrl, AdviceService.CreateAdvicePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Advice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createAdvice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAdvice(params?: {
    body?: CreateAdviceRequest
  }): Observable<Advice> {

    return this.createAdvice$Response(params).pipe(
      map((r: StrictHttpResponse<Advice>) => r.body as Advice)
    );
  }

  /**
   * Path part for operation getAdviceById
   */
  static readonly GetAdviceByIdPath = '/v1/advices/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAdviceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdviceById$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Advice>> {

    const rb = new RequestBuilder(this.rootUrl, AdviceService.GetAdviceByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Advice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAdviceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdviceById(params: {
    id: string;
  }): Observable<Advice> {

    return this.getAdviceById$Response(params).pipe(
      map((r: StrictHttpResponse<Advice>) => r.body as Advice)
    );
  }

  /**
   * Path part for operation updateAdvice
   */
  static readonly UpdateAdvicePath = '/v1/advices/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAdvice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAdvice$Response(params: {
    id: string;
    body?: CreateAdviceRequest
  }): Observable<StrictHttpResponse<Advice>> {

    const rb = new RequestBuilder(this.rootUrl, AdviceService.UpdateAdvicePath, 'put');
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
        return r as StrictHttpResponse<Advice>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateAdvice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAdvice(params: {
    id: string;
    body?: CreateAdviceRequest
  }): Observable<Advice> {

    return this.updateAdvice$Response(params).pipe(
      map((r: StrictHttpResponse<Advice>) => r.body as Advice)
    );
  }

}
