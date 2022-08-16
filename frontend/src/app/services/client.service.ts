import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cita } from '../models/cita.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  cita: any;
  URL_API = 'http://localhost:5000/api/cita'; //http://localhost:5000/api/cita
  client: Cita;

  constructor(public http: HttpClient,  public router: Router) {
    this.client = new Cita()
  }

  getCita() {
    return this.http.get(`${this.URL_API}/get-all`);
  }

  postCita(cita: Cita) {
    return this.http.post(`http://localhost:5000/api/cita/create`, cita);
  }

  putCita(cita: Cita) {
    return this.http.put(`${this.URL_API}/update-cita/${cita._id}`, cita);
  }

  deleteCita(_id: String) {
    return this.http.delete(`${this.URL_API}/delete-cita/${_id}`);
  }
}
