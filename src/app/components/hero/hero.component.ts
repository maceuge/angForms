import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interface/hero.interface';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {

  hero: Hero = {
    nombre: '',
    casa: 'Marvel',
    bio: ''
  };

  constructor() { }

  ngOnInit() {}

  guardar () {

  }

}
