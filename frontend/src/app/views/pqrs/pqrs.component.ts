import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PqrsService } from 'src/app/services/pqrs.service';
import { Form } from 'src/app/models/form.model';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.css'],
})
export class PqrsComponent implements OnInit {
  constructor(public pqrsService: PqrsService) {}

  ngOnInit(): void {
    this.getForm();
  }

  getForm() {
    this.pqrsService.getForm().subscribe(
      (data: any) => {
        this.pqrsService.forms = data;
        console.log(data);
        console.log(typeof data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createForm(form: NgForm) {
    if (form.value._id) {
      const { _id, fullName, email, topic, message, condition, answer } =
        form.value;

      if (!fullName || !email || !topic || !message) {
        alert('Debes diligenciar todos los campos');
        return;
      }

      const data = { condition, answer, message };

      this.pqrsService.updateForm(_id, data).subscribe(
        (data: any) => {
          alert('Formulario actualizado');
          this.getForm();
          form.reset(form);
          this.pqrsService.currentForm = new Form();
        },
        (error) => {
          console.log(error);
        }
      );
      return;
    }

    const { fullName, email, topic, message, condition, answer } = form.value;

    if (!fullName || !email || !topic || !message) {
      alert('Debes diligenciar todos los campos');
      return;
    }

    const data = { fullName, email, topic, message };

    this.pqrsService.createForm(data).subscribe(
      (data) => {
        alert('Tu Solicitud de PQRS fue enviada exitosamente');
        form.reset();
        this.pqrsService.currentForm = new Form();
        this.getForm();
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(form.value);
  }

  updateForm(form: Form) {
    this.pqrsService.currentForm = form;
  }

  deleteForm(_id: string) {
    const opt = confirm('Estas seguro que deseas eliminar este formulario');

    if (!opt) return;

    this.pqrsService.deleteForm(_id).subscribe(
      (data: any) => {
        this.getForm();
        alert('PQRS Eliminado');
      },
      (error: any) => {
        console.log(error);
      }
    );

    return;
  }
}
