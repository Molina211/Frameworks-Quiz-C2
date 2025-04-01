import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.page.html',
  styleUrls: ['./proveedor.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProveedorPage implements OnInit {

  proveedores = [
    { nombre: 'Proveedor A', empresa: 'Apple', telefono: '123456789' },
    { nombre: 'Proveedor B', empresa:  'Huawei', telefono: '987654321' },
    { nombre: 'Proveedor C', empresa:  'Microsoft', telefono: '456789123' }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
