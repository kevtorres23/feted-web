import Image, { StaticImageData } from "next/image";

type props = {
    titulo: string;
    descripcion: string;
    rutaImagen: StaticImageData;
}

export default function TarjetaImagen(props: props) {
    const imagen = props.rutaImagen;

    return (
        <div className="flex flex-col items-center bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs md:max-w-xl md:max-w-xl">
            <Image alt="" src={props.rutaImagen} className="object-cover w-full rounded-base h-48 md:h-full mb-4 md:mb-0"/>
            <div className="flex flex-col justify-between md:py-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading">{props.titulo}</h5>
                <p className="mb-6 text-body">{props.descripcion}</p>
                <div>
                    <button type="button" className="inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                        Saber más
                        <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}