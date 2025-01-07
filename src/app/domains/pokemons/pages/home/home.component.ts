import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../../entities/pokemon.model';
import { Config } from '../../../entities/services.models';
import { CardComponent } from '../../components/card/card.component';
import { HeaderComponent } from '../../../shared/components/header/header.component'
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { PokemonService } from '../../../shared/services/pokemon.service';

@Component({
  selector: 'app-Home',
  imports: [CommonModule, CardComponent, HeaderComponent, PokemonDetailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  pokemons = signal<Pokemon[]>([]);
  selectedPokemon = signal<Pokemon | null>(null);

  private pokemonService = inject(PokemonService);

  async setPokemonsData(): Promise<void> {
    try{
      const reqConfig: Config = this.pokemonService.getReqConfig()
      const pokemonsResults: any[] = [];

      this.pokemonService.getPokemonsList(reqConfig)
      .subscribe({
        next: (res: any) => {
          const pokemonsData = res.results;
          pokemonsData.map( (pokemon: any) => {
            this.pokemonService.getInfoPokemon(reqConfig, pokemon.name)
            .subscribe( {
              next: ( resp: any) => {
                pokemonsResults.push({
                  ...pokemon,
                  ...resp,
                  modal_active: false,
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

  openModal(poke:Pokemon) {
    this.pokemons.update( (pokemons) => {
      pokemons.filter((pokemon, position) => {
        if(poke.id === pokemon.id){
          pokemon.modal_active = true;
          this.selectedPokemon.set(poke);
        }
        return pokemon;
      });
      return pokemons;
    });
  }

  closeModal(pokemon: Pokemon) {
    pokemon.modal_active = false;
    this.selectedPokemon.set(pokemon);
  }

  async ngOnInit() {
    await this.setPokemonsData();
  }

}
