import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styles: [`
      input {
        outline: none;
      }
  `]
})
export class TemplateFormComponent implements OnInit {
  
  outputData: any = {};

  usuario: any = {
    nombre: '',
    apellido: '',
    email: '',
    pass: '',
    pais: 'USR',
    sexo: 'Hombre'
  };

  paises = [
    {
      siglas: 'USR',
      nombre: 'Rusia'
    },
    {
      siglas: 'ESP',
      nombre: 'España'
    },
    {
      siglas: 'ARG',
      nombre: 'Argentina'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  guardarForm (getDataForm: NgForm) {
    console.log('Formulario General: ', getDataForm);
    //console.log('Formulario Valores: ', getDataForm.value);
    //console.log('Datos del Usuario: ', this.usuario);
   // this.outputData = getDataForm.value;
  }

  dafaultData (dataForm: NgForm) {
   let usuario = {
      nombre: 'Blue',
      apellido: 'Magnum',
      email: 'zoolander@maximo.com',
      pass: '123456'
    };

    dataForm.value.nombre = usuario.nombre;
    dataForm.value.email = usuario.email;
    dataForm.value.pass = usuario.pass;
    dataForm.value.apellido = usuario.apellido;

  }

}
