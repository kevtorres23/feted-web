import Image from "next/image";
import Navbar from "../Componentes/Navbar";
import CarruselHome from "@/Componentes/CarruselHome";
import imagen1 from "../public/carrusel-imagen-1.jpg";
import BotonSombraGuinda from "@/Componentes/BotonSombraGuinda";
import BotonSombraAzul from "@/Componentes/BotonSombraAzul";
import TarjetaIcono from "@/Componentes/TarjetaIcono";
import TarjetaImagen from "@/Componentes/TarjetaImagen";
import TarjetaContacto from "@/Componentes/TarjetaContacto";
import Footer from "@/Componentes/Footer";
import { HandHeart, Phone, Building2, MessageCircleMore, Mail } from 'lucide-react';

export default function Home() {
    return (
        <div className="flex w-full flex-col h-auto items-center justify-center bg-zinc-50 font-sans">
            <Navbar />
            <main className="flex w-full h-full flex-col items-center justify-between py-24 gap-20 sm:px-12 md:px-18! px-8">

                {/* Sección 1*/}
                <section className="hero-section w-full flex items-center justify-center md:flex-row flex-col md:gap-20 gap-10 pt-10">
                    <div className="texto flex items-start justify-center flex-col gap-6 w-full">
                        <h1 className="lg:text-5xl! text-4xl text-slate-950 font-bold">Trabajamos juntos por un cambio verdadero.</h1>
                        <p className="text-slate-700">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Sed labore vitae, neque possimus voluptate molestias!</p>
                        <div className="flex sm:flex-row flex-col gap-5 w-full">
                            <BotonSombraAzul texto="Nuestra historia" />
                            <BotonSombraGuinda texto="Últimos proyectos" />
                        </div>
                    </div>

                    <div className="lg:w-7xl lg:h-5xl sm:w-4xl sm:h-2xl w-full h-xl flex sm:flex-col flex-col-reverse gap-2 items-center justify-between">
                        <div className="bg-linear-to-r from-azul-principal to-guinda-principal w-full rounded-xl h-auto p-6 flex flex-col gap-1 items-center justify-center">
                            <p className="text-slate-200 text-base font-normal">Administración actual</p>
                            <h1 className="text-4xl text-white font-semibold">2025-2028</h1>
                        </div>
                        <Image src={imagen1} className="rounded-xl object-cover h-auto w-full" alt="..." />
                    </div>
                </section>

                {/* Carrusel */}
                <CarruselHome />

                {/* Sección 2 */}
                <section className="w-full flex items-center justify-center rounded-2xl bg-linear-65 from-azul-principal to-blue-800 text-white h-auto sm:px-12! px-6 sm:py-24 py-10 flex-col gap-10">
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <div className="flex flex-row gap-2 px-4 py-2 bg-white text-black rounded-full">
                            <HandHeart width={20} color="black" />
                            <p className="font-semibold">Nuestros valores</p>
                        </div>
                        <h1 className="sm:text-4xl! text-3xl font-semibold text-center">Nos caracteriza la pasión</h1>
                        <p className="sm:text-xl text-lg font-light text-slate-200 text-center">Nuestro corazón está con las y los estudiantes técnicos.</p>
                    </div>

                    <div className="tarjetas grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
                        <TarjetaIcono titulo="Valor 1" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu luctus nunc. Vivamus ullamcorper mauris quis maximus egestas." icono={<HandHeart width={32} className="text-slate-800 mb-4" />} />
                        <TarjetaIcono titulo="Valor 2" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu luctus nunc. Vivamus ullamcorper mauris quis maximus egestas." icono={<HandHeart width={32} className="text-slate-800 mb-4" />} />
                        <TarjetaIcono titulo="Valor 3" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu luctus nunc. Vivamus ullamcorper mauris quis maximus egestas." icono={<HandHeart width={32} className="text-slate-800 mb-4" />} />
                        <TarjetaIcono titulo="Valor 4" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu luctus nunc. Vivamus ullamcorper mauris quis maximus egestas." icono={<HandHeart width={32} className="text-slate-800 mb-4" />} />

                    </div>
                </section>

                {/* Sección 3 */}
                <section className="eventos-recientes flex flex-col gap-8 w-full">
                    <div className="flex flex-col gap-4 items-start w-full">
                        <h1 className="sm:text-5xl! text-4xl text-slate-950 font-bold">Actividades recientes</h1>
                        <p className="sm:text-xl text-base text-slate-700 font-normal">Conoce las últimas actividades que hemos realizado en la federación.</p>
                    </div>

                    <div className="flex md:flex-row flex-col w-full gap-5">
                        <TarjetaImagen titulo="Nombre de la actividad" descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu luctus nunc. Vivamus ullamcorper mauris quis maximus egestas." rutaImagen={imagen1} />
                        <TarjetaImagen titulo="Nombre de la actividad" descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu luctus nunc. Vivamus ullamcorper mauris quis maximus egestas." rutaImagen={imagen1} />
                        <TarjetaImagen titulo="Nombre de la actividad" descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu luctus nunc. Vivamus ullamcorper mauris quis maximus egestas." rutaImagen={imagen1} />
                    </div>
                </section>

                {/* Sección 4 */}
                <section className="w-full flex items-center justify-center rounded-2xl bg-linear-65 from-guinda-principal to-fuchsia-950 text-white h-auto sm:px-12! px-6 sm:py-24 py-10 md:flex-row flex-col gap-20">
                    <div className="flex flex-col gap-4 md:items-start md:justify-start items-center justify-center md:max-w-xl">
                        <div className="flex flex-row gap-2 px-4 py-2 bg-white text-black rounded-full">
                            <HandHeart width={20} color="black" />
                            <p className="font-semibold">Contáctanos</p>
                        </div>
                        <h1 className="sm:text-4xl! text-3xl font-semibold md:text-left text-center">¿Tienes algún comentario o sugerencia?</h1>
                        <p className="sm:text-lg text-base font-light text-slate-200 md:text-left text-center">¡Háznoslo saber! Nos complace poder escuchar y atender lo que tienes que decir. Puedes contactarnos de las siguientes maneras:</p>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 w-full">
                        <TarjetaContacto nombre="Número de teléfono" descripcion="618-812-1212" icono={<Phone width={32} className="text-white mb-4" />}/>
                        <TarjetaContacto nombre="Correo electrónico" descripcion="correofeted@gmail.com" icono={<Mail width={32} className="text-white mb-4" />}/>
                        <TarjetaContacto nombre="Dirección de oficinas" descripcion="618-812-1212" icono={<Building2 width={32} className="text-white mb-4" />}/>
                        <TarjetaContacto nombre="Instagram" descripcion="@feted2025_2028." icono={<MessageCircleMore width={32} className="text-white mb-4" />}/>
                    </div>
                </section>


            </main>
            <Footer />
        </div>
    );
}
