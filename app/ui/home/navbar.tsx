'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function Navbar(props: {
    isScrolled: Boolean
}
) {
    const router = useRouter();

    useEffect(() => {
        console.log("Current hash:", window.location.hash);
    }, [router.replace]); // Se actualiza si la ruta o hash cambia



    return (
        <nav id="navbar" className={`fixed top-0 left-0 w-full h-16 bg-transparent z-50 flex items-center px-8 ${props.isScrolled ? "animate-slideDown backdrop-blur-xl bg-[#ffffff67] shadow-lg" : ""}`}>
            <ul className="flex gap-8 mx-auto">
                <li className="relative group">
                    <a href="#header">Inicio</a>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-<black> group-hover:w-full transition-all duration-300"></span>
                </li>
                <li className="relative group">
                    <a href="#aboutUs">Quienes Somos</a>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
                </li>
                <li className="relative group">
                    <a href="#services">Servicios</a>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
                </li>
                <li className="relative group">
                    <a href="#contact">Contacto</a>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
                </li>
            </ul>
            <button
                className="rounded-full bg-black hover:bg-gray-700 p-2 text-white"
            >
                Ingresar
            </button>
        </nav>
    )
}