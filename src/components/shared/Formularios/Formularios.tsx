import React from "react";

import styles from "@/components/shared/Formularios/Formularios.module.css"

interface ListaInputsProps {
  inputs: string[];
}

function Formularios({ inputs }: ListaInputsProps) {
  let newDdatos = inputs ? inputs : ["Heywin", "Meneses", "Tipo2"];

  return (
    <span>

    <div className={styles.fondo}>

    <div className={styles.floatingform}>
    <div className="card">
      <div className="card-header text-end">
        <button type="button" className="btn-close" aria-label="Close"></button>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <form className="col-md-12 row" method="POST" action="/crear-conductor">

              {newDdatos.map((item, key) => (
                <div key={key} className="mb-3 col-md-6">
                  <label htmlFor={`${item}`} className="form-label">
                    {`${item}:`}
                  </label>
                  <input
                    type="text"
                    id={`${item}`}
                    name={`${item}`}
                    className="form-control form-control-sm"
                    required
                  />
                </div>
              ))}

              <div className="mb-3 col-md-6 d-flex align-items-end justify-content-end">
                <div className="text-center text-lg-end">
                  <button type="submit" className="btn btn-primary">
                    Crear / Guardar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
 
    </span>
  );
}

export default Formularios;
