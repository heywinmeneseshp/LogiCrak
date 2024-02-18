// components/TablaViajes.tsx

import React from 'react';
import style from "@/components/Rutas/TablaViajes.module.css"

interface Viaje {
  Fecha: string;
  Sem: number;
  Vehiculo: string;
  Conductor: string;
  Origen: string;
  "Llegada Origen": string;
  "Salida Origen": string;
  Destino: string;
  "Llegada Destino": string;
  "Salida Destino": string;
  "Llenado": string;
}

interface Props {
  datos: Viaje[];
}

const TablaViajesCamiones: React.FC<Props> = ({ datos }) => {
  return (
    <div className={style.texto}>

    <table className="table table-striped table table-bordered table-sm">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Sem</th>
          <th>Vehiculo</th>
          <th>Conductor</th>
          <th className='bg-success text-white text-center'>Origen</th>
          <th className='bg-success text-white text-center'>Llegada</th>
          <th className='bg-success text-white text-center'>Salida</th>
          <th className='bg-primary text-white text-center'>Destino</th>
          <th className='bg-primary text-white text-center'>Llegada</th>
          <th className='bg-primary text-white text-center'>Salida</th>
          <th>Movimiento</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((viaje, index) => (
          <tr key={index}>
            <td>{viaje.Fecha}</td>
            <td>{viaje.Sem}</td>
            <td>{viaje.Vehiculo}</td>
            <td>{viaje.Conductor}</td>
            <td className='table-success text-center'>{viaje.Origen}</td>
            <td className='table-success text-center'>{viaje["Llegada Origen"]}</td>
            <td className='table-success text-center'>{viaje["Salida Origen"]}</td>
            <td className='table-primary text-center'>{viaje.Destino}</td>
            <td className='table-primary text-center'>{viaje["Llegada Destino"]}</td>
            <td className='table-primary text-center'>{viaje["Salida Destino"]}</td>
            <td>{viaje["Llenado"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TablaViajesCamiones;
