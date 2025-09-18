import { Component, OnInit } from '@angular/core';
import { DresseurService } from '../../../services/dresseur.service';
import { Dresseur } from '../../../models/dresseur.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dresseur-list',
    standalone: false,
  templateUrl: './dresseur-list.html',
  styleUrls: ['./dresseur-list.css']
})
export class DresseurList implements OnInit {
  dresseurs: Dresseur[] = [];

  constructor(private service: DresseurService, private router: Router) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => this.dresseurs = data);
  }

  goToDetail(id: number) {
    this.router.navigate(['/dresseurs', id]);
  }

  delete(id: number) {
    if (confirm('Supprimer ce dresseur ?')) {
      this.service.delete(id).subscribe(() => {
        this.dresseurs = this.dresseurs.filter(d => d.id !== id);
      });
    }
  }
}
