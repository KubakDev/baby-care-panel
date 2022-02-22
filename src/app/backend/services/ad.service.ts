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

import { Ad } from '../models/ad';
import { CreateAdRequest } from '../models/create-ad-request';
import { UpdateAdRequest } from '../models/update-ad-request';

@Injectable({
  providedIn: 'root',
})
export class AdService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listAds
   */
  static readonly ListAdsPath = '/v1/ads';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAds()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAds$Response(params?: {
    Limit?: number;
    SearchText?: string;
    ReachFrom?: number;
    ReachTo?: number;
    SortDescending?: boolean;
  }): Observable<StrictHttpResponse<Array<Ad>>> {

    const rb = new RequestBuilder(this.rootUrl, AdService.ListAdsPath, 'get');
    if (params) {
      rb.query('Limit', params.Limit, {});
      rb.query('SearchText', params.SearchText, {});
      rb.query('ReachFrom', params.ReachFrom, {});
      rb.query('ReachTo', params.ReachTo, {});
      rb.query('SortDescending', params.SortDescending, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Ad>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listAds$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAds(params?: {
    Limit?: number;
    SearchText?: string;
    ReachFrom?: number;
    ReachTo?: number;
    SortDescending?: boolean;
  }): Observable<Array<Ad>> {

    return this.listAds$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Ad>>) => r.body as Array<Ad>)
    );
  }

  /**
   * Path part for operation createAd
   */
  static readonly CreateAdPath = '/v1/ads';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createAd()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAd$Response(params?: {
    body?: CreateAdRequest
  }): Observable<StrictHttpResponse<Ad>> {

    const rb = new RequestBuilder(this.rootUrl, AdService.CreateAdPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Ad>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createAd$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAd(params?: {
    body?: CreateAdRequest
  }): Observable<Ad> {

    return this.createAd$Response(params).pipe(
      map((r: StrictHttpResponse<Ad>) => r.body as Ad)
    );
  }

  /**
   * Path part for operation getAdById
   */
  static readonly GetAdByIdPath = '/v1/ads/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAdById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdById$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Ad>> {

    const rb = new RequestBuilder(this.rootUrl, AdService.GetAdByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Ad>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAdById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdById(params: {
    id: string;
  }): Observable<Ad> {

    return this.getAdById$Response(params).pipe(
      map((r: StrictHttpResponse<Ad>) => r.body as Ad)
    );
  }

  /**
   * Path part for operation updateAd
   */
  static readonly UpdateAdPath = '/v1/ads/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAd()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAd$Response(params: {
    id: string;
    body?: UpdateAdRequest
  }): Observable<StrictHttpResponse<Ad>> {

    const rb = new RequestBuilder(this.rootUrl, AdService.UpdateAdPath, 'put');
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
        return r as StrictHttpResponse<Ad>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateAd$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAd(params: {
    id: string;
    body?: UpdateAdRequest
  }): Observable<Ad> {

    return this.updateAd$Response(params).pipe(
      map((r: StrictHttpResponse<Ad>) => r.body as Ad)
    );
  }

  /**
   * Path part for operation incrementReach
   */
  static readonly IncrementReachPath = '/v1/ads/increment-reach/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `incrementReach()` instead.
   *
   * This method doesn't expect any request body.
   */
  incrementReach$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Ad>> {

    const rb = new RequestBuilder(this.rootUrl, AdService.IncrementReachPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Ad>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `incrementReach$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  incrementReach(params: {
    id: string;
  }): Observable<Ad> {

    return this.incrementReach$Response(params).pipe(
      map((r: StrictHttpResponse<Ad>) => r.body as Ad)
    );
  }

}
