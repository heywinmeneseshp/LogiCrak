// ListaTablas.tsx
import React from "react";

interface ListaTablasProps {
  encabezados: string[];
  data: string[][];
}

function ListaTablas({ encabezados, data }: ListaTablasProps) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {encabezados.map((item: string, key: number) => (
            <th key={key}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item2: string[], key2: number) => (
          <tr key={key2}>
            {item2.map((item3: string, key3: number) => (
              <td key={key3}>{item3}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListaTablas;
