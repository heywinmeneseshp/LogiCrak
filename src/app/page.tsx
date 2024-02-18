// pages/index.tsx (o cualquier otra página)

import React from 'react';
import TablaCargas from '@/components/Rutas/TablaViajesMulas';

const datosCargas = [
  {
    FECHA: '19/02/2024',
    SEM: 8,
    FINCA: 'LUCIA SUR',
    FRUTA: 'TUCAN 17 KILOS',
    CANT: 1144,
    VEHICULOS: 'SZX550',
    LLEGADA: '',
    CIERRE: '',
    SALIDA: '',
    BOOKING: '61268469',
    BUQUE: 'CAPE ALTIUS',
    LINEA: 'HAPAG LLOYD',
    DESTINO: 'VLISSINGEN',
    CONTENEDOR: '',
  },
  {
    FECHA: '19/02/2024',
    SEM: 8,
    FINCA: 'SAN FRANCISCO',
    FRUTA: 'BANANAS FAIRTRADE TUCAN 18K',
    CANT: 1116,
    VEHICULOS: 'SZX498',
    LLEGADA: '',
    CIERRE: '',
    SALIDA: '',
    BOOKING: '61268473',
    BUQUE: 'CAPE ALTIUS',
    LINEA: 'HAPAG LLOYD',
    DESTINO: 'HAMBURGO',
    CONTENEDOR: '',
  },
  // Agrega más datos de cargas aquí...
];

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Tabla de Cargas</h1>
      <TablaCargas cargas={datosCargas} />
    </div>
  );
};

export default HomePage;
