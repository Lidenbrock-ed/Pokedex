import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../../entities/pokemon.model';
import { CardComponent } from '../../components/card/card.component';
import { HeaderComponent } from '../../../shared/components/header/header.component'

@Component({
  selector: 'app-Home',
  imports: [CommonModule, CardComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pokemons = signal<Pokemon[]>([]);
}
