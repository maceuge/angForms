import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interface/hero.interface';
import { HeroService } from '../../services/hero.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {

  private hero: Hero = {
    nombre: '',
    casa: 'Marvel',
    bio: ''
  };

  nuevo = false;
  id: string;

  constructor( private heroService: HeroService,
               private router: Router,
               private activRoute: ActivatedRoute) {
    
    this.activRoute.params.subscribe( param => {
      this.id = param['id'];
      if (this.id !== 'nuevo') {
        this.heroService.obtenerHeroe(this.id)
             .subscribe( data => {
               this.hero = data;
             });
      }
    });
}

  ngOnInit() {}

  guardar () {
    console.log(this.hero);

    if (this.id === 'nuevo') {
      this.heroService.guardarHero(this.hero)
                  .subscribe( data => {
                    this.router.navigate(['/hero', data.name]);
                  }, error => console.error(error)
                );
      
    } else {
      this.heroService.actualizarHero(this.hero, this.id)
                  .subscribe( data => {
                    console.log(data);
                  }, error => console.error(error)
                );
    }
  }

}
