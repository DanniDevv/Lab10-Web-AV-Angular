import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  isFormValid: boolean = false; // Variable para verificar la validez del formulario

  constructor(private userDataService: UserDataService) { }

  // Método para verificar si todos los campos están llenados correctamente
  checkFormValidity() {
    this.isFormValid = this.nombre.trim() !== '' && this.email.trim() !== '';
  }

  confirmSubmit() {
    if (this.isFormValid) {
      const isConfirmed = window.confirm('¿Estás seguro de que deseas enviar el formulario?');
      if (isConfirmed) {
        this.onSubmit(); // Envía el formulario si el usuario confirma
      }
    }
  }

  onSubmit() {
    const user = { nombre: this.nombre, email: this.email };
    this.userDataService.addUser(user); // Agrega el usuario a la lista
    console.log('Formulario enviado');
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Email: ${this.email}`);
    
    this.nombre = '';
    this.email = '';
    this.isFormValid = false; 
  }
}