import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { Interface } from "readline";

export interface Options{
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe: 'events';
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

export interface Users {
    id:string;
    username:string;
    password:string;
    v:string;
}

export interface PostResponse{
    message:string;
}
