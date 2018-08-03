import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-heroslist',
  templateUrl: './heroslist.component.html',
  styles: []
})
export class HeroslistComponent implements OnInit {

  heros: any[] = [];
  loading = true;

  constructor(private heroService: HeroService,
              private route: Router) {
      this.cargarHeros();
  }

  ngOnInit() {
  }

  cargarHeros () {
    this.heroService.obtenerListaHeros()
        .subscribe( heroLista => {
            //console.log(heroLista); 
            setTimeout( () => {
              this.heros = heroLista;
              this.loading = false;
            }, 4000);
        });
  }

  borrar(key: string) {
    this.heroService.eliminarHero(key)
          .subscribe( data => {
          
            if (data) {
              console.error(data);
            } else {
              delete this.heros[key]; 
            }
      }); 
  }

  actualizar (key: string) {
    //console.log(key);
    this.route.navigate(['/hero', key]);
  }

}
