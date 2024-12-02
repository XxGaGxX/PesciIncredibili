import { Component } from '@angular/core';
import { Pesce } from '../../model/Classi'
import { Specie } from '../../model/Classi';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, NgFor, CommonModule, MatIconModule, NavbarComponent, RouterLink, RouterLinkActive],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css',
})
export class CatalogoComponent {
  specieArray: Specie[] = [
    {
      nomeScientifico: 'Salmo salar',
      nomeComune: 'Salmone Atlantico',
      habitat: 'Acqua dolce e salata',
      dimensioneMedia: '70-100 cm',
      dieta: 'Crostacei, insetti e piccoli pesci',
      durataVita: '4-6 anni',
    },
    {
      nomeScientifico: 'Thunnus thynnus',
      nomeComune: 'Tonno rosso',
      habitat: 'Oceani tropicali e temperati',
      dimensioneMedia: '2-3 metri',
      dieta: 'Pesci e calamari',
      durataVita: '15-30 anni',
    },
    {
      nomeScientifico: 'Cyprinus carpio',
      nomeComune: 'Carpa comune',
      habitat: 'Laghi, fiumi e stagni',
      dimensioneMedia: '40-100 cm',
      dieta: 'Alghe, piante acquatiche e insetti',
      durataVita: '20-40 anni',
    },
    {
      nomeScientifico: 'Danio rerio',
      nomeComune: 'Zebrafish',
      habitat: 'Torrenti e laghi poco profondi',
      dimensioneMedia: '2.5-4 cm',
      dieta: 'Plankton e piccoli insetti',
      durataVita: '2-5 anni',
    },
  ];

  pesci: Pesce[] = [
    {
      id: 1,
      prezzo: 12.99,
      eta: 2,
      sesso: 'Maschio',
      dimensioni: '25cm',
      immagine:
        'https://www.focusjunior.it/content/uploads/site_stored/imgs/0003/046/salmone-atlantico_04.jpg',
      specie: this.specieArray[0],
    },
    {
      id: 2,
      prezzo: 15.49,
      eta: 3,
      sesso: 'Femmina',
      dimensioni: '30cm',
      immagine:
        'https://rivistanatura.com/wp-content/uploads/2017/11/tonno-rosso-1-770x470.jpg.webp',
      specie: this.specieArray[1],
    },
    {
      id: 3,
      prezzo: 10.0,
      eta: 1,
      sesso: 'Maschio',
      dimensioni: '20cm',
      immagine:
        'https://lh4.googleusercontent.com/proxy/N4eyXo0Vy3RDJCrerOVsAQ4bCRkwWvxEjNs3h_X4UrcPsUeXQT2Qhfj3g0aKFjIJhfJ870lz_T9353XLS89EWD82Na-CR9tCwrqSypPJgaqEALpmmefKWzJLrvKuB0BUThkoTH3AJCMZzTVc',
      specie: this.specieArray[2],
    },
    {
      id: 4,
      prezzo: 18.99,
      eta: 4,
      sesso: 'Femmina',
      dimensioni: '35cm',
      immagine:
        'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202211/MIT_Smart-Zebrafish-01_0.jpg?itok=tiCsuMN4',
      specie: this.specieArray[3],
    },
  ];
}
