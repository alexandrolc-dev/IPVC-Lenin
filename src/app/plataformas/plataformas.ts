import { Component, signal, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { MatCard, MatCardTitle, MatCardContent, MatCardImage } from "@angular/material/card";

@Component({
  selector: 'app-plataformas',
  imports: [MatCard, MatCardTitle, MatCardContent],
  templateUrl: './plataformas.html',
  styleUrl: './plataformas.css',
})
export class Plataformas implements AfterViewInit {
   protected readonly title = signal('Escuela');

  // referencia a todos los elementos con #fadeEl para el scroll
  @ViewChildren('fadeEl') fadeElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    setTimeout(() => {
      this.fadeElements.forEach(el => {
        observer.observe(el.nativeElement);
      });
    }, 100);
  }

  // grupo 1 — plataformas educativas (tus 3 originales)
  sitios = [
    {
      id: 0,
      name: 'Cubaeduca',
      img: 'cubaeduca.webp',
      description: 'Plataforma integradora e interactiva, que ofrece un conjunto de contenidos y servicios afines a la educación.',
      url:'https://www.cubaeduca.cu/',
    },
    {
      id: 1,
      name: 'Ecured',
      img: 'ecured.webp',
      description: 'EcuRed es un proyecto de enciclopedia colaborativa. Cualquier usuario registrado previamente puede colaborar.',
      url:'https://www.ecured.cu/',
    },
    {
      id: 2,
      name: 'Mochila',
      img: 'mochila.webp',
      description: 'Mochila, un proyecto cultural de entretenimiento para toda la familia cubana.',
      url:'http://mochila.cubava.cu/',
    }
  ];


  prensa = [
    {
      id: 0,
      name: 'Granma',
      img: 'granma.webp',
      description: 'Órgano oficial del Comité Central del Partido Comunista de Cuba.',
      url:'https://www.granma.cu/',
    },
    {
      id: 1,
      name: 'Juventud',
      img: 'juventud.webp',
      description: 'Periódico de la juventud cubana, órgano de la Unión de Jóvenes Comunistas.',
      url:'https://www.juventudrebelde.cu',
     },
    {
      id: 2,
      name: 'MINED',
      img: 'mined.webp',
      description: 'Ministerio de Educación de Cuba, rector de la política educacional del país.',
      url:'https://www.mined.gob.cu/'}
  ];
}


