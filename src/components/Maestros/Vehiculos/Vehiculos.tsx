// DriverTable.js
"use client" 
import React from "react";
import Tablas from "../../shared/Tablas/Tablas";

function Vehiculos() {


  return (
    <div>
      <Tablas currentPage={5} totalPages={10} listaEncabezados={["nombre", "apellido", "licencia"]} datos={[
        ["Heywin", "Meneses", "Tipo2"],
        ["Heywin1", "Meneses", "Tipo2"],
        ["Heywin2", "Meneses", "Tipo2"],
        ["Heywin2", "Meneses", "Tipo2"],
    ]} />
      
    </div>
  );
}

export default Vehiculos;
