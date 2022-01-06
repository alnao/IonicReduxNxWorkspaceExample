import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnnotazioniService {
  constructor(private httpClient: HttpClient) {}
  get(): Observable<any> {
    return this.httpClient.get('http://localhost/Php/PhpMyWeb12papi/CmanagerAnnotazioni.php');
  }
}
