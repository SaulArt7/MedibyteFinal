import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService} from 'src/app/services/client.service';
import { Form } from 'src/app/models/form.model';
import { Cita } from 'src/app/models/cita.model';

@Component({
  selector: 'app-form-cita',
  templateUrl: './form-cita.component.html',
  styleUrls: ['./form-cita.component.css']
})
export class FormCitaComponent implements OnInit {


  constructor(public clientService: ClientService) { 
    
  }

  ngOnInit(): void {
    this.getCita()
  }

  getCita() {
    this.clientService.getCita().subscribe((res) => {
      this.clientService.cita = res;
      // this.usersService.users = res; // Previa
      // console.log(this.usersService.users);
      console.log(this.clientService.cita.cita);
    });
  }

  
}
