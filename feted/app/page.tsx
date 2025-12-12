import Image from "next/image";
import Navbar from "../Componentes/Navbar";
import CarruselHome from "@/Componentes/CarruselHome";

export default function Home() {
  return (
    <div className="flex w-full h-screen items-center justify-center bg-zinc-50 font-sans md:px-10">
      <Navbar />
      <main className="flex w-full h-full flex-col items-center justify-between pt-30">
        <CarruselHome />
      </main>
    </div>
  );
}
