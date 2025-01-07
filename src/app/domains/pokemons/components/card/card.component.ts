import { Component, signal, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { Pokemon } from '../../../entities/pokemon.model';

@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLinkWithHref],
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
    weight: 0
  }

  pokemons = signal<Pokemon[]>([])

  openModal() {
    //TODO
  }
}
