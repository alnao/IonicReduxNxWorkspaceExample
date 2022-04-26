import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@capacitor-community/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnnotazioniEntity } from '../+state/annotazioni/annotazioni.models';
import { from } from 'rxjs';
import { environment } from '../../../../../apps/exampleapp/src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AnnotazioniService {
  //urlApi: String='http://localhost/Php/PhpMyWeb12papi/CmanagerAnnotazioni.php';
  urlApi: string= environment.urlApi;
  
  constructor(private httpClient: HttpClient ) {}
  /* HTTP STANDARD */
  get(): Observable<any> {
    
     const headerDict = {
      //'Content-Type': 'application/json',
      //'Accept': 'text/plain,application/json,text/html,application/xhtml+xml,application/xml;q=0.9',
      //'Access-Control-Allow-Origins':'*',
      //'Access-Control-Allow-Methods':'GET,POST,PUT,PATCH,DELETE,OPTIONS'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.httpClient.get(`${this.urlApi}`,requestOptions);
  }/**/
  putPost(id : any,element : AnnotazioniEntity): Observable<AnnotazioniEntity> {
    if (id==0)
      return this.httpClient.post<AnnotazioniEntity>(`${this.urlApi}`,element,{});
    else
      return this.httpClient.put<AnnotazioniEntity>(`${this.urlApi}?id=${id}`,element,{});
  }  

  /*
  get(): Observable<any> { //https://github.com/capacitor-community/http
    //npm install @capacitor-community/http
    const options = {
      url: `${this.urlApi}`,
      //headers: { 'X-Fake-Header': 'Max was here' },
      params: {  },
    };
    let responseData=Http.get(options)
     .then(resp => {console.log(resp); return resp.data }); //https://forum.ionicframework.com/t/ionic-native-http-instead-of-angulars-http/101326/5
   return from(responseData); //https://stackoverflow.com/questions/45784825/frompromise-does-not-exist-on-type-observable
  }*/

  /* HTTP CORDOVA KO
  
  //import { HTTP } from '@ionic-native/http/ngx';
  constructor(private httpClient: HTTP  ,private httpClient2: HttpClient ) {}
  get(): Observable<any> {
    //return this.httpClient.get(`${this.urlApi}`  ,{},{});
    //let header = new Headers();
    //header.append("Content-Type","application/json");
    //let options = new RequestOptions({ method:"GET",headers: header,url:`${this.urlApi}` });
    let responseData=this.httpClient.get(`${this.urlApi}` ,{},{})
      //.then(res => { return JSON.parse(res.data) }, res => console.log(res.data));
      .then(resp => JSON.parse(resp.data)); //https://forum.ionicframework.com/t/ionic-native-http-instead-of-angulars-http/101326/5
    return from(responseData); //https://stackoverflow.com/questions/45784825/frompromise-does-not-exist-on-type-observable
  }*/
}
