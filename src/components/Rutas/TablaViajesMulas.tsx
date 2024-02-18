// components/TablaViajesMulas.tsx

import React from 'react';
import style from "@/components/Rutas/TablaViajes.module.css"

interface Carga {
  FECHA: string;
  SEM: number;
  FINCA: string;
  FRUTA: string;
  CANT: number;
  VEHICULOS: string;
  LLEGADA: string;
  CIERRE: string;
  SALIDA: string;
  BOOKING: string;
  BUQUE: string;
  LINEA: string;
  DESTINO: string;
  CONTENEDOR: string;
}

interface Props {
  cargas: Carga[];
}

const TablaViajesMulas: React.FC<Props> = ({ cargas }) => {
  return (
    <div className={style.texto}>

    <table className="table table-striped table table-bordered table-sm">
      <thead>
        <tr>
          <th>FECHA</th>
          <th>SEM</th>
          <th>FINCA</th>
          <th>FRUTA</th>
          <th>CANT</th>
          <th>VEHICULOS</th>
          <th>LLEGADA</th>
          <th>CIERRE</th>
          <th>SALIDA</th>
          <th>BOOKING</th>
          <th>BUQUE</th>
          <th>LINEA</th>
          <th>DESTINO</th>
          <th>CONTENEDOR</th>
        </tr>
      </thead>
      <tbody>
        {cargas.map((carga, index) => (
          <tr key={index}>
            <td>{carga.FECHA}</td>
            <td>{carga.SEM}</td>
            <td>{carga.FINCA}</td>
            <td>{carga.FRUTA}</td>
            <td>{carga.CANT}</td>
            <td>{carga.VEHICULOS}</td>
            <td>{carga.LLEGADA}</td>
            <td>{carga.CIERRE}</td>
            <td>{carga.SALIDA}</td>
            <td>{carga.BOOKING}</td>
            <td>{carga.BUQUE}</td>
            <td>{carga.LINEA}</td>
            <td>{carga.DESTINO}</td>
            <td>{carga.CONTENEDOR}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TablaViajesMulas;
