import { Component, signal, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../../entities/pokemon.model';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input({ required: true}) pokemon: Pokemon = { id: 0, name: '', url: '', info: { id: 0, name: '', abilities: [], base_experience: 0, forms: [], game_indices: [], height: 0, moves: [], weight: 0 } }

  pokemons = signal<Pokemon[]>([])

  openModal() {
    //TODO
  }
}
