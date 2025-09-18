import { Dresseur } from './dresseur.model';

export interface Pokemon {
  id: number;
  nom: string;
  type: string;
  niveau: number;
  attaque: number;
  defense: number;
  rarete: string;
  dresseur?: Dresseur;
}
