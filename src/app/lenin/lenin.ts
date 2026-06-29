import { ObserversModule } from '@angular/cdk/observers';
import { AfterViewInit, Component, ElementRef, Query, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-lenin',
  imports: [],
  templateUrl: './lenin.html',
  styleUrl: './lenin.css',
})
export class Lenin implements AfterViewInit {
 @ViewChildren('fadeEl') fadeElements!: QueryList<ElementRef>;

 ngAfterViewInit(){
   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // agrega la clase "visible" que dispara la animación CSS
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

  this.fadeElements.forEach(el =>{
    observer.observe(el.nativeElement);
  });

}
}
