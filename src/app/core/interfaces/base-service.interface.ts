import { HttpHeaders, HttpParams } from "@angular/common/http";

export interface OptionsHttp {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body';
  params?: HttpParams | {
    [params: string]: string | string[];
  }
  reportProgress?: boolean;
  responseType: 'arraybuffer';
  withCredentials?: boolean;
}