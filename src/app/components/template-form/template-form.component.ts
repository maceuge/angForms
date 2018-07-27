import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styles: [`
      .ng-invalid .ng-touched:not(form) {
        border: 3px solid #dc3545;
      }
  `]
})
export class TemplateFormComponent implements OnInit {
  
  outputData: any = {};

  dataForm: NgForm;

  usuario = {
    nombre: '',
    apellido: '',
    email: '',
    pass: ''
  };

  constructor() { }

  ngOnInit() {
  }

  guardarForm (getDataForm: NgForm) {
    console.log('Formulario General: ', getDataForm);
    //console.log('Formulario Valores: ', getDataForm.value);
    //console.log('Datos del Usuario: ', this.usuario);
   // this.outputData = getDataForm.value;
  }

  dafaultData () {
   let usuario = {
      nombre: 'Blue',
      apellido: 'Magnum',
      email: 'zoolander@maximo.com',
      pass: '123456'
    };

    this.dataForm.value.nombre = usuario.nombre;
    this.dataForm.value.apellido = usuario.apellido;
    this.dataForm.value.email = usuario.email;
    this.dataForm.value.pass = usuario.pass;

  }

}
