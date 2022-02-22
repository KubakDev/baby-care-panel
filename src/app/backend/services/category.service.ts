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

import { Category } from '../models/category';
import { CreateCategoryRequest } from '../models/create-category-request';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listCategories
   */
  static readonly ListCategoriesPath = '/v1/categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  listCategories$Response(params?: {
    Limit?: number;
    SearchText?: string;
    SortDescending?: boolean;
    Name?: string;
  }): Observable<StrictHttpResponse<Array<Category>>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ListCategoriesPath, 'get');
    if (params) {
      rb.query('Limit', params.Limit, {});
      rb.query('SearchText', params.SearchText, {});
      rb.query('SortDescending', params.SortDescending, {});
      rb.query('Name', params.Name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Category>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listCategories(params?: {
    Limit?: number;
    SearchText?: string;
    SortDescending?: boolean;
    Name?: string;
  }): Observable<Array<Category>> {

    return this.listCategories$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Category>>) => r.body as Array<Category>)
    );
  }

  /**
   * Path part for operation createCategory
   */
  static readonly CreateCategoryPath = '/v1/categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCategory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCategory$Response(params?: {
    body?: CreateCategoryRequest
  }): Observable<StrictHttpResponse<Category>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.CreateCategoryPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Category>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createCategory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCategory(params?: {
    body?: CreateCategoryRequest
  }): Observable<Category> {

    return this.createCategory$Response(params).pipe(
      map((r: StrictHttpResponse<Category>) => r.body as Category)
    );
  }

  /**
   * Path part for operation getById
   */
  static readonly GetByIdPath = '/v1/categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Category>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.GetByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Category>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById(params: {
    id: string;
  }): Observable<Category> {

    return this.getById$Response(params).pipe(
      map((r: StrictHttpResponse<Category>) => r.body as Category)
    );
  }

  /**
   * Path part for operation updateCategory
   */
  static readonly UpdateCategoryPath = '/v1/categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCategory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCategory$Response(params: {
    id: string;
    body?: CreateCategoryRequest
  }): Observable<StrictHttpResponse<Category>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.UpdateCategoryPath, 'put');
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
        return r as StrictHttpResponse<Category>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateCategory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCategory(params: {
    id: string;
    body?: CreateCategoryRequest
  }): Observable<Category> {

    return this.updateCategory$Response(params).pipe(
      map((r: StrictHttpResponse<Category>) => r.body as Category)
    );
  }

}
