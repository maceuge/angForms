import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../model/usuario';
import { UserDataService } from '../../services/user-data.service';

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

  usuario: Usuario = {
    nombre: '',
    apellido: '',
    email: '',
    pass: '',
    pais: '',
    sexo: '',
    check: false
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

  constructor(private userService: UserDataService ) { }

  ngOnInit() {
  }

  guardarForm (getDataForm: NgForm) {
    console.log('Formulario General: ', getDataForm);
    this.userService.addUser(this.usuario);
    //console.log('Formulario Valores: ', getDataForm.value);
    //console.log('Datos del Usuario: ', this.usuario);
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
