import Image from "next/image"
import logoFeted from "../public/feted-logo.png";

export default function Footer() {
    return (
        <footer className="bg-slate-100 w-full">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="flex md:flex-row flex-col gap-10 md:justify-between justify-center">
                    <div className="mb-6 md:mb-0">
                        <a href="" className="flex items-start flex-col gap-2">
                            <Image src={logoFeted} className="h-24 w-24 me-3" alt="Feted Logo" />
                            <p className="max-w-72 font-semibold text-slate-800">Federación Técnica de Estudiantes del Estado de Durango.</p>
                        </a>
                    </div>
                    <div className="flex flex-row sm:gap-20 gap-10">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Nuestro trabajo</h2>
                            <ul className="text-body font-medium">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">Miembros de la Federación</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Proyectos</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Síguenos</h2>
                            <ul className="text-body font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Facebook</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-default sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-body sm:text-center">© 2025 <a href="https://flowbite.com/" className="hover:underline">FETED</a>. Todos los derechos reservados.
                    </span>
                </div>
            </div>
        </footer>
    )
}