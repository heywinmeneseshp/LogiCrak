import Tablas from "@/components/shared/Tablas/Tablas"

export default function Vehiculo() {


    return (
        <div>
            <Tablas currentPage={5}
                totalPages={10}
                listaEncabezados={["Nombre", "Apellido", "Licencia"]}
                datos={[["Heywin", "Perez", "2"], ["Hernando", "Meneses", "3"], ["Matthew", "Meneses", "4"]]} />
        </div>
    )
}