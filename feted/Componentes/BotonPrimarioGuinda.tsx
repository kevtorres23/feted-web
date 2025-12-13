type props = {
    texto: string;
    color: string;
}

export default function BotonPrimarioAzul(props: props) {
    return (
        <button type="button" className={`text-white bg-azul-principal box-border border border-transparent hover:opacity-70 cursor-pointer focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none`}>{props.texto}</button>
    )
}