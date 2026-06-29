import id from '@angular/common/locales/id';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-noticia',
  imports: [MatCardModule],
  templateUrl: './noticia.html',
  styleUrl: './noticia.css',
})
export class Noticia implements AfterViewInit {
  @ViewChild ('fadeEl') fadeEl!:ElementRef;

   ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      observer.observe(this.fadeEl.nativeElement);
    }, 100);
  }
  noticias=[{
    id:0,
    titulo:'Cuba en Datos: ¿Por qué la mortalidad infantil en Cuba aumentó en siete años?',
    img:'infantil.webp',
    url:'http://www.cubadebate.cu/especiales/2026/05/23/cuba-en-datos-por-que-la-mortalidad-infantil-en-cuba-aumento-en-siete-anos/',
    categoria:'SALUD',
  },
  {
    id:1,
    titulo:'Organizaciones civiles cubanas afines a los animales',
    img:'ave.webp',
    url:'http://www.cubadebate.cu/noticias/2026/06/14/organizaciones-civiles-cubanas-afines-a-los-animales-iii/',
    categoria:'FAUNA',

  },
  {
    id:2,
    titulo:'Respuesta hemisférica yanqui: La IV flota de intervención',
    img:'fifo.webp',
    url:'http://www.cubadebate.cu/autor/fidel-castro-ruz/',
    categoria:'REFLEXIONES DE FIDEL',
  }

]
}
