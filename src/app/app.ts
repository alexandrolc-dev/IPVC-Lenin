import { Component, signal, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';


import { Lenin } from "./lenin/lenin";
import { Noticia } from "./noticia/noticia";
import { MatCardModule } from '@angular/material/card';
import { Carrusel } from './carrusel/carrusel';
import { HeroSliderComponent } from './hero-slider/hero-slider';
import { SchoolHistory } from './school-history/school-history';
import { Plataformas } from './plataformas/plataformas';
import { Footer } from "./footer/footer";
import { ContactoFlotante } from "./contacto-flotante/contacto-flotante";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Lenin, Noticia, MatCardModule, Carrusel, HeroSliderComponent, SchoolHistory, Plataformas, Footer, ContactoFlotante],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  protected readonly title = signal('Escuelas');




  //
}
