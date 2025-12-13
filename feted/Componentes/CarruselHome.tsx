import Image from "next/image"

import imagen1 from "../public/carrusel-imagen-1.jpg";
import imagen2 from "../public/carrusel-imagen-2.jpg";
import imagen3 from "../public/carrusel-imagen-3.jpg";

export default function CarruselHome() {
    return (

        <div id="default-carousel" className="relative w-full z-0" data-carousel="slide">
            <div className="relative overflow-hidden rounded-base h-128">
                {/* Item 1 */}
                <div className="hidden duration-700 ease-in-out items-center justify-center" data-carousel-item>
                    <Image src={imagen1} className="absolute block w-full h-full object-cover" alt="..." />

                    {/* Opacidad para la imagen */}
                    <div className="absolute flex items-center justify-center w-full h-full text-center bg-linear-to-b from-transparent to-black"></div>

                    {/* Texto de la imagen */}
                    <div className="absolute flex items-end justify-start w-full h-full text-center sm:p-14! p-8">
                        <div className="flex flex-col gap-2 items-start justify-start text-white">
                            <h1 className="text-4xl font-semibold">Unidos por un mejor futuro para todos.</h1>
                            <p>Lorem ipsum dolor sit amet. Consectetur parle apropós de.</p>
                        </div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image src={imagen2} className="absolute block w-full h-full object-cover" alt="..." />

                    {/* Opacidad para la imagen */}
                    <div className="absolute flex items-center justify-center object-cover w-full h-full text-center bg-linear-to-b from-transparent to-black"></div>

                    {/* Texto de la imagen */}
                    <div className="absolute flex items-end justify-start w-full h-full text-center sm:p-14! p-8 text-white">
                        <div className="flex flex-col gap-2 items-start justify-start">
                            <h1 className="text-4xl font-semibold">Unidos por un mejor futuro para todos.</h1>
                            <p>Lorem ipsum dolor sit amet. Consectetur parle apropós de.</p>
                        </div>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image src={imagen3} className="absolute block w-full h-full object-cover" alt="..." />

                    {/* Opacidad para la imagen */}
                    <div className="absolute flex items-center justify-center w-full h-full text-center bg-linear-to-b from-transparent to-black"></div>

                    {/* Texto de la imagen */}
                    <div className="absolute flex items-end justify-start w-full h-full text-center sm:p-14! p-8 text-white">
                        <div className="flex flex-col gap-2 items-start justify-start">
                            <h1 className="text-4xl font-semibold">Unidos por un mejor futuro para todos.</h1>
                            <p>Lorem ipsum dolor sit amet. Consectetur parle apropós de.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Puntitos indicadores*/}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" className="w-3 h-3 rounded-base" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>

            {/* Controles del carrusel */}
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" /></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" /></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>


    )
}