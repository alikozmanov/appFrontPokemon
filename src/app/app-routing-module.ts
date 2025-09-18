import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DresseurList } from './components/dresseur/dresseur-list/dresseur-list';
import { DresseurDetail } from './components/dresseur/dresseur-detail/dresseur-detail';
import { PokemonList } from './components/pokemon/pokemon-list/pokemon-list';
import { BoosterList } from './components/booster/booster-list/booster-list';
import { EchangeList } from './components/echange/echange-list/echange-list';

const routes: Routes = [
  { path: 'dresseurs', component: DresseurList },
  { path: 'dresseurs/:id', component: DresseurDetail },
  { path: 'pokemons', component: PokemonList },
  { path: 'boosters', component: BoosterList },
  { path: 'echanges', component: EchangeList },
  { path: '', redirectTo: '/dresseurs', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  }
