type props = {
    nombre: string;
    descripcion: string;
    icono: React.ReactNode;
}

export default function TarjetaContacto(props: props) {
    return (
        <div className="bg-black/35 block p-6 rounded-base shadow-xs w-full">
            {props.icono}
            <h5 className="mb-3 text-xl font-semibold tracking-tight text-white leading-8">{props.nombre}</h5>
            <p className="text-white/80 font-normal break-all">{props.descripcion}</p>
        </div>
    )
}