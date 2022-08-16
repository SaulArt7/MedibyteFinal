import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { ClientService } from 'src/app/services/client.service';
import { Cita } from 'src/app/models/cita.model';
import * as moment from "moment";

declare var M: any;

@Component({
  selector: 'app-admin-client',
  templateUrl: './admin-client.component.html',
  styleUrls: ['./admin-client.component.css']
})
export class AdminClientComponent implements OnInit {

  week: any = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];

  monthSelect: any[];
  dateSelect: any;
  dateValue: string;

  departs: string[] = ['Amazonas',
    'Antioquia',
    'Arauca',
    'Atlántico',
    'Bolívar',
    'Boyacá',
    'Caldas',
    'Caquetá',
    'Casanare',
    'Cauca',
    'Cesar',
    'Chocó',
    'Córdoba',
    'Cundinamarca',
    'Guainía',
    'Guaviare',
    'Huila',
    'La Guajira',
    'Magdalena',
    'Meta',
    'Nariño',
    'Norte de Santander',
    'Putumayo',
    'Quindío',
    'Risaralda',
    'San Andrés y Providencia',
    'Santander',
    'Sucre',
    'Tolima',
    'Valle del Cauca',
    'Vaupés',
    'Vichada']

  tValuation: string[] = ['Urgente', 'Prioritaria', 'Regular']

  tPriority: string[] = ['Primera vez', 'Control']


  constructor(public usersService: UsersService, public clientService: ClientService) {
    this.monthSelect = []
    this.dateValue= ''
  }
  ngOnInit(): void {
    this.clientService.client = new Cita
    this.getCita();
    this.getDaysFromDate(8, 2022)
  }



  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.clientService.client = new Cita();
    }
  }


  addCita(form: NgForm) {
    console.log(form.value)
    if (form.value._id) {
      this.clientService.putCita(form.value).subscribe((res) => {
        console.log(res);
        this.resetForm(form)
        this.getCita();
      });
    } else {

      delete form.value._id; // Por error al intenar enviar un Usuario con ID en ''   /* _id: string;

      let {name, lastName, email, document, tel, address, adressAlt, departament, city, priorityType, valuationType, symptom, date } = form.value;
      if (!name || !lastName || !email || !document || !tel || !address || !adressAlt || !departament || !city || !priorityType || !valuationType || !symptom || !date) {
        alert('Diligencie todos los campos');
      } else {
        this.clientService.postCita(form.value).subscribe((res) => {
          console.log(res);
          this.resetForm(form);
          this.getCita();
        });
        alert('Cita creada exitosamente');
      }

      
    }
  }
  getCita() {
    this.clientService.getCita().subscribe((res) => {
      this.clientService.cita = res;
      // this.usersService.users = res; // Previa
      // console.log(this.usersService.users);
      //console.log(this.clientService.cita);

    });
  }

  editUser(cita: Cita) {
    this.clientService.client = cita;
    // this.usersService.putUser(user);
  }

  deleteUser(_id: string) {
    if (confirm('¿Estás seguro de que desea eliminar esta cita?')) {
      this.clientService.deleteCita(_id).subscribe((res) => {
        console.log(res);
        M.toast({ html: 'Cita eliminado satisfactoriamente' });
        this.getCita();
      });
    }
  }

  getDaysFromDate(month: number, year: number) {

    const startDate = moment(`${year}/${month}/01`)
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = startDate;

    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {

      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`);

      const fecha = {
        name: dayObject.format("YYYY-MM-DD"),
        value: a,
        indexWeek: dayObject.isoWeekday()
      }
      return fecha;

    });
    this.monthSelect = arrayDays;

  }

  changeMonth(flag: number) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDay(day: any) {
    const monthYear = this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${day.value}`
    const days = moment(parse)
    const objectDate = days.format('YYYY-MM-DD')
    this.dateValue =  objectDate
    console.log(this.dateValue)
  }
}

