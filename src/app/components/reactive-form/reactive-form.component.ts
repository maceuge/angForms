import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: []
})
export class ReactiveFormComponent implements OnInit {

  forma: FormGroup;
  pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

  constructor() {

    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(5)]),
        'apellido': new FormControl('', Validators.required),
      }),
      'email': new FormControl('', [ Validators.required, Validators.pattern(this.pattern) ]),
      'pass': new FormControl(''),
      'pasatiempo': new FormArray([
          new FormControl('Correr', Validators.required)
      ])
    });

   }

  ngOnInit() {
  }

  agregarCampo () {
    (<FormArray>this.forma.controls['pasatiempo']).push(
      new FormControl('Cine')
    );
  }

  guardarCambios () {
    console.log(this.forma.value);
    console.log('FormGroup', this.forma);
    this.forma.reset();
  }

}
