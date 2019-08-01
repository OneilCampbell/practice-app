import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class PracticeDataService {
  // TODO: provide appropriate url for server
  // private dataServerUrl = '';

  constructor(
    // private http: HttpClient
  ) { }

  // TODO: specify return type of the Observable
  // getData(): Observable<[]> {
  //   // TODO: specify optional type of the Observable being retruned from http request
  //   return this.http.get<[]>(this.dataServerUrl);
  // }

  // updateData(data): Observable<any> {
  //   // TODO: construct url by adding necessary info (:id, :name, etc)

  //   return this.http.put(this.dataServerUrl, data, httpOptions)
  // }

  // // TODO: specify return type of the Observable
  // createData(data): Observable<any> {
  //   // TODO: specify optional type of the Observable being retruned from http request
  //   return this.http.post<any>(this.dataServerUrl, data, httpOptions)
  // }

  // deleteData(id: number): Observable<any> {
  //   // TODO: make sure URL is appropriate based on structure of database
  //   let newUrl = `${this.dataServerUrl}/${id}`
  //   // TODO: specify optional type of the Observable being retruned from http request
  //   return this.http.delete<any>(newUrl, httpOptions)
  // }
}
