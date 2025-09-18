import { Pokemon } from './pokemon.model';
import { Booster } from './booster.model';

export interface Dresseur {
  id: number;
  nom: string;
  pseudo: string;
  niveau: number;
  role?: string;
  username?: string;
  password?: string;
  pokemons?: Pokemon[];
  boosters?: Booster[];
}
