import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { DresseurList } from './components/dresseur/dresseur-list/dresseur-list';
import { DresseurDetail } from './components/dresseur/dresseur-detail/dresseur-detail';
import { DresseurForm } from './components/dresseur/dresseur-form/dresseur-form';
import { PokemonList } from './components/pokemon/pokemon-list/pokemon-list';
import { PokemonDetail } from './components/pokemon/pokemon-detail/pokemon-detail';
import { PokemonForm } from './components/pokemon/pokemon-form/pokemon-form';
import { BoosterList } from './components/booster/booster-list/booster-list';
import { BoosterOpen } from './components/booster/booster-open/booster-open';
import { EchangeList } from './components/echange/echange-list/echange-list';
import { EchangePropose } from './components/echange/echange-propose/echange-propose';

@NgModule({
  declarations: [
    App,
    DresseurList,
    DresseurDetail,
    DresseurForm,
    PokemonList,
    PokemonDetail,
    PokemonForm,
    BoosterList,
    BoosterOpen,
    EchangeList,
    EchangePropose
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
