import { Dresseur } from './dresseur.model';
import { Pokemon } from './pokemon.model';

export interface Booster {
  id: number;
  dateOuverture: string;
  dresseur: Dresseur;
  cartes: Pokemon[];
}
