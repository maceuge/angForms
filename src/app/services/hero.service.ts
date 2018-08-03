import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Hero } from '../interface/hero.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  herosUrl = 'https://heroapp-39aee.firebaseio.com/heros.json';
  heroUrl = 'https://heroapp-39aee.firebaseio.com/heros';
  header = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http) { }

  guardarHero (hero: Hero) {
    let body = JSON.stringify(hero);
    return this.http.post(this.herosUrl, body, {headers:this.header})
                .pipe( map( data => {
                  console.log(data.json());
                  return data.json();
                }));
  }

  actualizarHero (hero: Hero, key$: string) {
    let body = JSON.stringify(hero);
    let url = `${this.heroUrl}/${ key$ }.json`;

    return this.http.put(url, body, {headers:this.header})
                .pipe( map( data => {
                  console.log(data.json());
                  return data.json();
                }));
  }

  obtenerListaHeros () {
    return this.http.get(this.herosUrl).pipe(
      map( data => {
        return data.json();
      })
    );
  }

  obtenerHeroe (key$: string) {
    let url = `${this.heroUrl}/${key$}.json`;
    return this.http.get(url).pipe(
      map ( data => {
        return data.json();
      })
    );
  }

  eliminarHero (key$: string) {
    let url = `${this.heroUrl}/${key$}.json`;
    return this.http.delete(url).pipe(
         map ( data => {
           return data.json();
         })
    );
  }

}
