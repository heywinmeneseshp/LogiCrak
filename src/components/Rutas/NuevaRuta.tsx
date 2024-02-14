"use client"
import React, { useState, useEffect } from 'react';

import style from "@/components/Rutas/NuevaRuta.module.css"

const NewRoutesAlerts: React.FC = () => {
  const [newRoutes, setNewRoutes] = useState<string[]>([]);

  useEffect(() => {
    // Simula la obtención de las nuevas rutas de algún lugar, como una API o una base de datos
    const fetchedNewRoutes: string[] = ["La Vega - Macondo", "Macondo - California", "California - Florida"]; // Aquí deberías obtener las nuevas rutas

    // Actualiza el estado con las nuevas rutas
    setNewRoutes(fetchedNewRoutes);
  }, []); // Se ejecuta solo una vez al montar el componente

  // Función para manejar el guardado del dato ingresado en el input
  const handleSave = (index: number) => {
    // Aquí deberías implementar la lógica para guardar el dato
    console.log(`Dato ingresado en la ruta ${index}:`, document.getElementById(`consumo-${index}`)?.nodeValue);
  };

  return (
    <div>

    <h2 className='mb-3 text-center'>Rutas nuevas</h2>

    <div className={style.contenedorPadre}>
   


      {newRoutes.length > 0 && (
        <div className={style.contenedor}>
          {newRoutes.map((route, index) => (
            <div className="container alert-info alert" role="alert" key={index}>
              <span className={style.contenedor}>
                <div className={style.cont}>
                  <div>
                    <div className='text-muted'>
                      <strong >{route}</strong> 
                    </div>
                    <div>
                      <label htmlFor={`consumo-${index}`} className="form-label">Ingrese los galones de combustible consumidos en los vehículos de categoría 1:</label>
                    </div>
                  </div>

                  <span className={style.input}>
                    <input type="text" className="form-control" id={`consumo-${index}`} name={`consumo-${index}`} />
                  </span>
                  <span>
                    <button className="btn btn-primary" type="button" onClick={() => handleSave(index)}>Guardar</button>
                  </span>
                </div>

              </span>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>

  );
};

export default NewRoutesAlerts;
