import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Config } from '../../entities/services.models';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private http = inject(HttpClient);

  constructor() { }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getPokemonsList(config: Config) {
    const offset = this.getRandomNumber(1,500)
    const limit = 30;
    const url = `${config.url}?offset=${offset}limit=${limit}`
    return this.http.get<object>(url)
  }

  getInfoPokemon(config: Config, name: string){
    const url = `${config.url}${name}/`
    return this.http.get<object>(url)
  }

}
