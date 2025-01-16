'use client'
import Image from "next/image";
import { playfar } from "../fonts";
import { useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../common/sectionTitle";

export default function Header() {
    const images = [
        "/header/headerBg.jpg",
        "/header/headerBg2.jpg"
    ];

    const intervalTime = 5000; // Tiempo entre cambios (en milisegundos)

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setIsAnimating(true); // Inicia la animación
    //         setTimeout(() => {
    //             setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    //             setIsAnimating(false); // Termina la animación
    //         }, 500); // La duración de la animación
    //     }, 5000); // Cambia cada 5 segundos

    //     return () => clearInterval(interval);
    // }, []);

    return (

        <header id="header" className="relative w-full h-screen pt-16 bg-black">
            <div
                className={`w-full h-full absolute top-0 left-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${!isAnimating ? "opacity-100 " : "opacity-0 "}`}
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
            >
            </div>

            <div className="h-full relative flex flex-col items-left justify-center text-white z-10">
                <div className="flex flex-col items-left gap-1 pl-[10rem] phone:pl-4 tablet:pl-8">
                    <SectionTitle title="Frutas y Verduras" />

                    <h1 className={`${playfar.className} phone:w-full tablet:w-4/5 laptop:w-[50%] phone:text-[2rem] tablet:text-[4rem] text-text-primary font-bold text-6xl mt-4 animate-slideInFromRight delay-500`}>
                        Productos saludables del campo a tu hogar
                    </h1>
                    <p className="phone:text-[1rem] tablet:text-[2rem] text-text-secondary mt-8 animate-slideUp delay-750  ">
                        La calidad que siempre necesitaste
                    </p>
                </div>

            </div>

        </header>

    )
}