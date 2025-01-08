import { Routes } from '@angular/router';

import { HomeComponent } from './domains/pokemons/pages/home/home.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { PokemonDetailComponent } from './domains/pokemons/pages/pokemon-detail/pokemon-detail.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
