import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.html',
  styleUrl: './profil.css',
})
export class Profil {
  nom : string = 'HAMMOU';
  prenom : string = 'ABDELLAH';
  niveau : string = 'ILISI1';
  email : string = 'abdellah@ilisi.com';
}
