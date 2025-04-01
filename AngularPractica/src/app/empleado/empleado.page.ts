import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.page.html',
  styleUrls: ['./empleado.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EmpleadoPage implements OnInit {

  empleados = [
    { nombre: 'Juan Pérez', puesto: 'Gerente', telefono: '555-1234' },
    { nombre: 'María López', puesto: 'Cajera', telefono: '555-5678' },
    { nombre: 'Carlos Gómez', puesto: 'Mecánico', telefono: '555-9012' }
  ];  

  constructor() { }

  ngOnInit() {
  }

}
