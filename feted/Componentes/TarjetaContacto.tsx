type props = {
    nombre: string;
    descripcion: string;
    icono: React.ReactNode;
}

export default function TarjetaContacto(props: props) {
    return (
        <div className="bg-black/35 block max-w-sm p-6 rounded-base shadow-xs">
            {props.icono}
            <h5 className="mb-3 text-xl font-semibold tracking-tight text-white leading-8">{props.nombre}</h5>
            <p className="text-white/80 font-normal">{props.descripcion}</p>
        </div>
    )
}