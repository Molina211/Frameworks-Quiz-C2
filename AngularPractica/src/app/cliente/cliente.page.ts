import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ClientePage implements OnInit {

  clientes = [
    { nombre: 'Ana Torres', email: 'ana.torres@email.com', telefono: '555-4321' },
    { nombre: 'Luis Ramírez', email: 'luis.ramirez@email.com', telefono: '555-8765' },
    { nombre: 'Sofía Méndez', email: 'sofia.mendez@email.com', telefono: '555-2109' }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
