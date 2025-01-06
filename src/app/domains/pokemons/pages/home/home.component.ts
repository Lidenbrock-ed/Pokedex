import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../../entities/pokemon.model';
import { CardComponent } from '../../components/card/card.component';
import { HeaderComponent } from '../../../shared/components/header/header.component'
import { PokemonService } from '../../../shared/services/pokemon.service';
import { Config } from '../../../entities/services.models';

@Component({
  selector: 'app-Home',
  imports: [CommonModule, CardComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pokemons = signal<Pokemon[]>([]);

  private pokemonService = inject(PokemonService);

  async setPokemonsData(): Promise<void> {
    try{
      const reqConfig: Config = this.getReqConfig();
      const pokemonsResults: any[] = [];

      this.pokemonService.getPokemonsList(reqConfig)
      .subscribe({
        next: (res: any) => {
          const pokemonsData = res.results;
          pokemonsData.map( (pokemon: any) => {
            console.log(pokemon)
            this.pokemonService.getInfoPokemon(reqConfig, pokemon.name)
            .subscribe( {
              next: ( resp: any) => {
                pokemonsResults.push({
                  ...pokemon,
                  info: resp,
                })
              },
              error: (error:any) => {
                console.error(error)
              }
            })
          })
        },
        error: (error:any)=> {
          console.error(error)
        }
      })
      this.pokemons.set(pokemonsResults);

    } catch(error:any){
      console.error(error);
    }
  }

  async ngOnInit() {
    await this.setPokemonsData();
  }

  getReqConfig(): Config{
    return {
      url: 'https://pokeapi.co/api/v2/pokemon/'
    }
  }

}
