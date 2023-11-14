import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}
  apiURL() {
    return 'http://localhost/toko_api/public/api';
  }
  tambah(data: any, endpoint: string) {
    return this.http.post(this.apiURL() + '/' + endpoint, data);
  }
  edit(data: any, endpoint: string) {
    return this.http.put(this.apiURL() + '/' + endpoint + '/' + data.id, data);
  }
  tampil(endpoint: string): Observable<any> {
    return this.http.get(this.apiURL() + '/' + endpoint);
  }
  hapus(id: any, endpoint: string) {
    console.log(id);
    return this.http.delete(this.apiURL() + '/' + endpoint + '/' + id);
  }
  lihat(id: any, endpoint: string) {
    return this.http.get(this.apiURL() + '/' + endpoint + '/' + id);
  }
}
