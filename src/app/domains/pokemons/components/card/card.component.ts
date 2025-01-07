import { Component, signal, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { Pokemon } from '../../../entities/pokemon.model';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input({ required: true}) pokemon: Pokemon = {
    url: '',
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: true,
    location_area_encounters:'',
    moves: [],
    name: '',
    order: 0,
    species: [],
    sprites: {},
    stats: [],
    types: [],
    weight: 0,
    modal_active:false
  }

  @Output() modalOpened = new EventEmitter<Pokemon>();

  pokemons = signal<Pokemon[]>([])

  openModalHandler(pokemon: Pokemon) {
    this.modalOpened.emit(pokemon);
  }
}
