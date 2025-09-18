import { Dresseur } from './dresseur.model';
import { Pokemon } from './pokemon.model';

export interface Echange {
  id: number;
  date: string;
  statut: string;
  dresseur1: Dresseur;
  dresseur2: Dresseur;
  cartesDresseur1: Pokemon[];
  cartesDresseur2: Pokemon[];
}
