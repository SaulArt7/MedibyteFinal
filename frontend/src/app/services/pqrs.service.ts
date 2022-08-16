import { Injectable } from '@angular/core';
import { Form } from '../models/form.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {

  URI_FORM = "http://localhost:5000/api/form"

  forms: any

  currentForm: Form

  constructor(public http: HttpClient) {
    this.currentForm = new Form
   }


   getForm(){
    return this.http.get(`${this.URI_FORM}/requests`)
   }

   createForm(data: any){
    return this.http.post(`${this.URI_FORM}/create`,data)
   }

   updateForm(id: string, data: any){
    return this.http.put (`${this.URI_FORM}/update/${id}`,data)
   }

   deleteForm(id: string){
    return this.http.delete(`${this.URI_FORM}/delete/${id}`)
   }
}
