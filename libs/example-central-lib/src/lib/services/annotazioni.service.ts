import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnnotazioniEntity } from '../+state/annotazioni/annotazioni.models';

@Injectable({
  providedIn: 'root'
})

export class AnnotazioniService {
  urlApi: String='http://localhost/Php/PhpMyWeb12papi/CmanagerAnnotazioni.php'

  constructor(private httpClient: HttpClient) {}
  get(): Observable<any> {
    return this.httpClient.get(`${this.urlApi}`);
  }

  putPost(id : any,element : AnnotazioniEntity): Observable<AnnotazioniEntity> {
    if (id==0)
      return this.httpClient.post<AnnotazioniEntity>(`${this.urlApi}`,element);
    else
      return this.httpClient.put<AnnotazioniEntity>(`${this.urlApi}?id=${id}`,element);
  }  
}
