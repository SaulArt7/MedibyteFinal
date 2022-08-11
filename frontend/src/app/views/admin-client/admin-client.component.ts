import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/services/users.service';
import { adminClient } from 'src/app/models/user-client';
import { NgForm } from '@angular/forms';



/* import { adminCient } from 'src/app/models/user-client'; */

@Component({
  selector: 'app-admin-client',
  templateUrl: './admin-client.component.html',
  styleUrls: ['./admin-client.component.css']
})
export class AdminClientComponent implements OnInit {

  departs: string[] = ['Amazonas', 'Antioquia', 'Arauca', 'Atlántico', 'Bolívar', 'Boyacá', 'Caldas', 'Caquetá', 'Casanare', 'Cauca', 'Cesar', 'Chocó', 'Córdoba', 'Cundinamarca', 'Guainía', 'Guaviare', 'Huila', 'La Guajira', 'Magdalena', 'Meta', 'Nariño', 'Norte de Santander', 'Putumayo', 'Quindío', 'Risaralda', 'San Andrés y Providencia', 'Santander', 'Sucre', 'Tolima', 'Valle del Cauca', 'Vaupés', 'Vichada']

  tValuation: string[] = ['Urgente', 'Prioritaria', 'Regular']

  tPriority: string[] = ['Primera vez', 'Control']
  

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    console.log()
  }

  

  formClient(form: NgForm){
    console.log(form.value)
  }
  

}
