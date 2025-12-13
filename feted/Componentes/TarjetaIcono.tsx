type props = {
    titulo: string;
    texto: string;
    icono: React.ReactNode;
}

export default function TarjetaIcono(props: props) {
    return (


        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
            {props.icono}
            <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-heading">{props.titulo}</h5>
            </a>
            <p className="mb-3 text-body sm:text-base text-sm">{props.texto}</p>
        </div>

    )
}