interface VehiculoProps {
    params: {
        vehiculo: string
    }
}

export default function Vehiculo(props: VehiculoProps) {

    const { vehiculo } = props.params
    return (
        <div>
            <h2>Placa  {vehiculo}</h2>
        </div>
    )
}