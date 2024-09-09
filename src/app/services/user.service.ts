import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { app } from '../../../server';
import { Observable } from 'rxjs';
import { PostResponse, Users } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  getUsers = (url:string,params:any): Observable<Users>=>{
    return this.apiService.get(url,params);
  }
  postRegisterUser = (url: string, params: any): Observable<PostResponse> =>{
    return this.apiService.post(url,params);
  }
  postLoginUser = (url:string, params:any): Observable<PostResponse> =>{
    return this.apiService.post(url,params);
  }
  
}
