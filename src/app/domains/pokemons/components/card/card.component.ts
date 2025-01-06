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
  @Input({ required: true }) pokemon: Pokemon = {} as Pokemon;

  pokemons = signal<Pokemon[]>([])

  openModal() {
    //TODO
  }
}
