import { Component, inject, Input, signal, Output, EventEmitter } from '@angular/core';
import { PokemonService } from '../../../shared/services/pokemon.service';
import { Pokemon } from '../../../entities/pokemon.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pokemon-detail',
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {
  @Input() name?: string;
  @Input() modalActive: boolean = false;
  @Output() modalClosed = new EventEmitter<Pokemon>();

  pokemon = signal<Pokemon | null>(null)

  private pokemonService = inject(PokemonService);

  ngOnInit(){
    const reqConfig = this.pokemonService.getReqConfig()
    if(this.name){
      this.pokemonService.getInfoPokemon(reqConfig, this.name)
      .subscribe({
        next: (res: any) => {
          this.pokemon.set(res)
        }
      })
    }
  }

  closeModalHandler(pokemon: Pokemon) {
    this.modalActive = false;
    this.modalClosed.emit(pokemon);
  }

}

