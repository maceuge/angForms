import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Observable } from '../../../../node_modules/rxjs';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: []
})
export class ReactiveFormComponent implements OnInit {

  forma: FormGroup;
  pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
  addPasatStop = false;

  constructor() {

    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl('', [Validators.required, Validators.maxLength(10), this.noFreakSurnames]),
      }),
      'email': new FormControl('', [ Validators.required, Validators.email ]),
      'usuario': new FormControl('', Validators.required, this.checkUser),
      'pass1': new FormControl('', Validators.required),
      'pass2': new FormControl(''),
      'pasatiempos': new FormArray([
          new FormControl('', Validators.required)
      ])
    });

    this.forma.controls['pass2'].setValidators([
      Validators.required,
      this.samePass.bind(this.forma)
    ]);

   }

  ngOnInit() {}

  checkUser (control: FormControl): Promise<any>|Observable<any> {

    let promesa = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
            if (control.value === 'maceuge') {
               resolve({ existe: true });
            } else {
               resolve( null );
            }            
          }, 3000);
      }
    );

    return promesa;
  }

  samePass (control: FormControl): { [s:string]:boolean } {
    let forma: any = this;
    if (control.value !== forma.controls['pass1'].value) {
      return {
        nosamepass: true
      };
    }
    return null;
 }

  noFreakSurnames (control: FormControl): { [s:string]:boolean } {
     if (control.value === 'Muñoz') {
       return {
         noFreak: true
       };
     }
     return null;
  }

  agregarCampo () {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    );

    if (this.forma.get('pasatiempos').value.length > 2) {
      this.addPasatStop = true;
    }
  }

  guardarCambios () {
    console.log(this.forma.value);
    console.log('FormGroup', this.forma);
    //this.forma.reset();
  }

  resetForm() {
    this.forma.reset();
  }

}
