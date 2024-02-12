"use client"
import React from "react";
import ListaTablas from "./ListaTablas";
import Pagination from "./Paginacion";

interface ListaTablasProps {
    currentPage: number;
    totalPages: number;
    datos: string[][];
    listaEncabezados: string[]
}


function Tablas({ currentPage, totalPages, listaEncabezados, datos }: ListaTablasProps) {

    let newDdatos = datos ? datos : [
        ["Heywin", "Meneses", "Tipo2"],
        ["Heywin1", "Meneses", "Tipo2"],
        ["Heywin2", "Meneses", "Tipo2"],
        ["Heywin2", "Meneses", "Tipo2"],
    ];

    let newEncabezados = listaEncabezados ? listaEncabezados : ["nombre", "apellido", "licencia"];

    const handlePageChange = (newPage: number) => {
        // Aquí puedes realizar alguna acción, como cargar datos de la página nueva
        console.log("Página cambiada a:", newPage);
    };

    return (
        <div>
            <ListaTablas
                encabezados={newEncabezados}
                data={newDdatos}
            />
            <div className="container">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>

        </div>
    );
}

export default Tablas;