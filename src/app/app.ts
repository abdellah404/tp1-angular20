import { Component, signal } from '@angular/core';
import { SalutationComponent } from './salutation/salutation';
import { Profil } from './profil/profil';

@Component({
  selector: 'app-root',
  imports: [SalutationComponent,Profil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test-ang');
  prenom : string = 'ABDELLAH';
  noteMax  : number = 20;
  estEtudiant : boolean = true;
}
