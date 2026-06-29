import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-carrusel',
  imports: [NgClass],
  templateUrl: './carrusel.html',
  styleUrl: './carrusel.css',
})
export class Carrusel implements AfterViewInit {

  // referencia al contenedor del carrusel para el fade-in
  @ViewChild('fadeEl') fadeEl!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(this.fadeEl.nativeElement);
  }

  // tu código original sin cambios
  imagenes = [
    { id: 0, titulo: 'Escalera de la Lenin', img: 'escalera.webp' },
    { id: 1, titulo: 'Mural', img: 'mural.webp' },
    { id: 2, titulo: 'Fidel en la Lenin', img: 'fidel.webp' },
    { id: 3, titulo: 'Logo Lenin', img: 'logo-lenin.webp' },
    { id: 4, titulo: 'Estudiantes', img: 'muchachos.webp' },
  ];

  indiceActivo = 0;

  siguiente(): void {
    this.indiceActivo = (this.indiceActivo + 1) % this.imagenes.length;
  }

  anterior(): void {
    this.indiceActivo = (this.indiceActivo - 1 + this.imagenes.length) % this.imagenes.length;
  }

  irA(indice: number): void {
    this.indiceActivo = indice;
  }

  obtenerPosicion(indice: number): string {
    if (indice === this.indiceActivo) return 'centro';
    const anterior = (this.indiceActivo - 1 + this.imagenes.length) % this.imagenes.length;
    const siguiente = (this.indiceActivo + 1) % this.imagenes.length;
    if (indice === anterior) return 'izquierda';
    if (indice === siguiente) return 'derecha';
    return 'oculto';
  }

  imagenAmpliada: { id: number; titulo: string; img: string } | null = null;

  abrirImagen(img: { id: number; titulo: string; img: string }): void {
    this.imagenAmpliada = img;
  }

  cerrarImagen(): void {
    this.imagenAmpliada = null;
    this.zoomActivo = false;
  }

  zoomActivo = false;

  alternarZoom(): void {
    this.zoomActivo = !this.zoomActivo;
  }
}
