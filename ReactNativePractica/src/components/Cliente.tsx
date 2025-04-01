import React from "react";
import { Personas } from "./Personas.type";
import './Cliente.css'

const Cliente: React.FC<Personas> = ({nombre, apellido, telefono, email }) => {
  return (
    <div className="cliente-card">
      <h2>Cliente: {nombre} {apellido}</h2>
      <p><strong>Teléfono:</strong> {telefono}</p>
      <p><strong>Correo:</strong> {email}</p>
    </div>
  );
};

export default Cliente;