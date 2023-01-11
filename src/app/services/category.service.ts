import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ICategoryView} from "../DTO/Category/ICategoryView";


@Injectable()

export class CategoryService {
  private url = environment.Uri + 'categories/';

  constructor(private http: HttpClient) {
  }

  getAllCategory(): Observable<ICategoryView[]> {
    return this.http.get<ICategoryView[]>(this.url);
  }
}
