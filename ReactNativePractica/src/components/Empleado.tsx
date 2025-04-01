import React from "react";
import { Personas } from "./Personas.type";
import './Empleado.css'

const Empleado: React.FC<Personas> = ({nombre, apellido, telefono, puesto }) => {
  return (
    <div className="empleado-card">
      <h2>Empleado: {nombre} {apellido}</h2>
      <p><strong>Teléfono:</strong> {telefono}</p>
      <p><strong>Puesto:</strong> {puesto}</p>
    </div>
  );
};

export default Empleado;