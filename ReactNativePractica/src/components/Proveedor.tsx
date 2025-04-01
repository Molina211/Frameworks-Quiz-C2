import React from "react";
import { Personas } from "./Personas.type";
import './Proveedor.css'

const Proveedor: React.FC<Personas> = ({nombre, apellido, telefono, empresa }) => {
  return (
    <div className="proveedor-card">
      <h2>Proveedor: {nombre} {apellido}</h2>
      <p><strong>Teléfono:</strong> {telefono}</p>
      <p><strong>Empresa:</strong> {empresa}</p>
    </div>
  );
};

export default Proveedor;