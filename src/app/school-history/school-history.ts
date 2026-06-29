import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-school-history',
  imports: [],
  templateUrl: './school-history.html',
  styleUrl: './school-history.css',
})
export class SchoolHistory implements AfterViewInit {

  // 1. Captura todos los elementos con #fadeEl del HTML
  @ViewChildren('fadeEl') fadeElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    // 2. Crea el observador que vigila cuándo los elementos entran en pantalla
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // 3. Si el elemento es visible en pantalla...
        if (entry.isIntersecting) {
          // 4. Le agrega la clase "visible" que dispara la animación CSS
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 }); // 5. Se activa cuando el 20% del elemento es visible

    // 6. Le dice al observador que vigile cada elemento con #fadeEl
    this.fadeElements.forEach(el => {
      observer.observe(el.nativeElement);
    });
  }
}
