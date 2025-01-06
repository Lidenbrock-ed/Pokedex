import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private http = inject(HttpClient);

  constructor() { }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getPokemonsList() {
    const offset = this.getRandomNumber(1,500)
    const limit = 30;
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}limit=${limit}`
    return this.http.get<object>(url)
  }

  getInfoPokemon(url: string){
    return this.http.get<object>(url)
  }

}
