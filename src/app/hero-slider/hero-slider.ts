import { Component, OnDestroy, OnInit } from '@angular/core';

interface Slide{
  imagen:string;
  titulo:string;

}

@Component({
  selector: 'app-hero-slider',
  imports: [],
  templateUrl: './hero-slider.html',
  styleUrl: './hero-slider.css',
})
export class HeroSliderComponent implements OnInit, OnDestroy {

  slides: Slide[] = [
    { imagen: 'Lenin.webp', titulo: 'BIENVENIDOS AL IPVCE LENIN'},
    { imagen: 'fidel.webp', titulo: 'FORMANDO EL FUTURO'},
    { imagen: 'mural.webp', titulo: 'UNA HISTORIA DE GLORIA'},
  ];

  indiceActual = 0;
  direccion: 'izquierda' | 'derecha' = 'izquierda';
  animar = true;
  private temporizador: any;

  ngOnInit() {
    this.iniciarAutoPlay();
  }

  ngOnDestroy() {
    this.detenerAutoPlay();
  }



  private detenerAutoPlay() {
    if (this.temporizador) {
      clearInterval(this.temporizador);
      this.temporizador = null;
    }
  }

  iniciarAutoPlay() {
    this.detenerAutoPlay(); // siempre limpia antes de crear uno nuevo
    this.temporizador = setInterval(() => {
      this.cambiarSlide('izquierda', (this.indiceActual + 1) % this.slides.length);
    }, 5000);
  }

  // un solo método que hace todo el cambio
  private cambiarSlide(dir: 'izquierda' | 'derecha', nuevoIndice: number) {
    this.direccion = dir;
    this.indiceActual = nuevoIndice;
    this.reiniciarAnimacion();
  }

  siguiente() {
    const nuevoIndice = (this.indiceActual + 1) % this.slides.length;
    this.cambiarSlide('izquierda', nuevoIndice);
    this.iniciarAutoPlay(); // reinicia el temporizador
  }

  anterior() {
    const nuevoIndice = (this.indiceActual - 1 + this.slides.length) % this.slides.length;
    this.cambiarSlide('derecha', nuevoIndice);
    this.iniciarAutoPlay();
  }

  irA(indice: number) {
    const dir = indice > this.indiceActual ? 'izquierda' : 'derecha';
    this.cambiarSlide(dir, indice);
    this.iniciarAutoPlay();
  }

  reiniciarAnimacion() {
    this.animar = false;
    setTimeout(() => this.animar = true, 10);
  }
}
