type props = {
    texto: string;
}

export default function BotonSombraAzul(props: props) {
    return (
        <button type="button" className="text-white bg-azul-principal box-border border border-transparent hover:opacity-70 cursor-pointer focus:ring-4 shadow-azul-principal/40 focus:ring-brand-medium shadow-lg font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">{props.texto}</button>
    )
}