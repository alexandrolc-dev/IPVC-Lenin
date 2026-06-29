import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-contacto-flotante',
  encapsulation:ViewEncapsulation.None,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  animations: [
    trigger('modalAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8) translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.8) translateY(20px)' }))
      ])
    ])
  ],
  templateUrl: './contacto-flotante.html',
  styleUrl: './contacto-flotante.css',
})
export class ContactoFlotante {
  abierto =false;
  formulario:FormGroup;

  constructor(private fb: FormBuilder){
    this.formulario=this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
    const guardado=localStorage.getItem('contacto-form');
    if(guardado){
      this.formulario.patchValue(JSON.parse(guardado))
    }
    this.formulario.valueChanges.subscribe(valor=>{
      localStorage.setItem('contacto-form',JSON.stringify(valor));
    });


  }

  get nombre() { return this.formulario.get('nombre'); }
  get email() { return this.formulario.get('email'); }
  get mensaje() { return this.formulario.get('mensaje'); }

  toggleModal() { this.abierto = !this.abierto; }

  enviar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    const { nombre, email, mensaje } = this.formulario.value;
    const asunto = `Mensaje de ${nombre}`;
    const cuerpo = `Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`;
    window.location.href = `mailto:lalenin.ipvc@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    this.formulario.reset();
    this.abierto = false;
  }






}
