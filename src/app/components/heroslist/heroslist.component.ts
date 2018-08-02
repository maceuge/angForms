import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interface/hero.interface';

@Component({
  selector: 'app-heroslist',
  templateUrl: './heroslist.component.html',
  styles: []
})
export class HeroslistComponent implements OnInit {

  hero: Hero;

  constructor(private heroService: HeroService) { 
    this.heroService.obtenerListaHeros()
                .subscribe( data => {
                 // console.log(data);
                });
  }

  ngOnInit() {
  }

}
