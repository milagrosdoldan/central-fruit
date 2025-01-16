
'use client'
import Image from "next/image";
import { playfar } from "../fonts";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useInView } from "motion/react";

export default function AboutUs() {
    const [since, setSince] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        const date1 = new Date();
        const date2 = new Date(1584310779000);

        let years = date2.getFullYear() - date1.getFullYear();

        // Ajustar si el mes/día de la segunda fecha aún no ha pasado en el año actual
        if (
            date2.getMonth() < date1.getMonth() ||
            (date2.getMonth() === date1.getMonth() && date2.getDate() < date1.getDate())
        ) {
            years--;
        }

        setSince(Math.abs(years));

    }, [])

    return (
        <div id="aboutUs" className="min-h-screen w-full flex justify-center bg-[#f2f2f2] mt-4 overflow-visible"
            style={{
                // WebkitClipPath: "polygon(3% 0, 7% 1%, 11% 0%, 16% 2%, 20% 0, 23% 2%, 28% 2%, 32% 1%, 35% 1%, 39% 3%, 41% 1%, 45% 0%, 47% 2%, 50% 2%, 53% 0, 58% 2%, 60% 2%, 63% 1%, 65% 0%, 67% 2%, 69% 2%, 73% 1%, 76% 1%, 79% 0, 82% 1%, 85% 0, 87% 1%, 89% 0, 92% 1%, 96% 0, 98% 3%, 99% 3%, 100% 0, 100% 100%, 0 100%, 0 0)",
                // clipPath: "polygon(3% 0, 7% 1%, 11% 0%, 16% 2%, 20% 0, 23% 2%, 28% 2%, 32% 1%, 35% 1%, 39% 3%, 41% 1%, 45% 0%, 47% 2%, 50% 2%, 53% 0, 58% 2%, 60% 2%, 63% 1%, 65% 0%, 67% 2%, 69% 2%, 73% 1%, 76% 1%, 79% 0, 82% 1%, 85% 0, 87% 1%, 89% 0, 92% 1%, 96% 0, 98% 3%, 99% 3%, 100% 0, 100% 100%, 0 100%, 0 0)",
            }}>
            <div
                className="w-full flex justify-center bg-repeat-round "
            //style={{ backgroundImage: "url(/aboutUs/bgSection.jpg)" }}
            >
                <div
                    className="flex flex-col w-[50%] flex-grow relative m-4"
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateX(-100%)", // Mueve desde la izquierda
                        opacity: isInView ? 1 : 0, // Controla la opacidad
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <Image
                        src="/aboutUs/fruits.png"
                        fill
                        className="absolute left-0 top-0 overflow-visible"
                        alt="flying vegetables"
                        objectFit="cover"
                        quality={100}


                    />
                </div>
                <div
                    className="flex flex-col justify-center w-[50%] p-16 relative gap-2 "

                >
                    <Image
                        src="/aboutUs/leaves.png"
                        className="absolute right-10 bottom-10 overflow-visible z-0 rotate-90"
                        alt="flying vegetables"
                        width={250}
                        height={250}
                        quality={100}
                    />

                    <div
                        className="flex items-center gap-1 z-50"
                        ref={ref}
                        style={{
                            transform: isInView ? "none" : "translateY(100%)", // Mueve desde la izquierda
                            opacity: isInView ? 1 : 0, // Controla la opacidad
                            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                        }}
                    >
                        <div className="w-3 h-3 bg-primary-main rounded-full"></div>
                        <p className="text-primary-light font-semibold">
                            Nuestra Historia
                        </p>
                    </div>
                    <p
                        className={`${playfar.className} text-[2.5rem] font-superbold text-text-primary leading-tight animate-slideInFromRight z-50`}
                        ref={ref}
                        style={{
                            transform: isInView ? "none" : "translateX(100%)", // Mueve desde la izquierda
                            opacity: isInView ? 1 : 0, // Controla la opacidad
                            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                        }}
                    >
                        Destinados a revolucionar tu mesa con calidad
                    </p>
                    <p
                        className={`text-[1rem] leading-relaxed mt-8 text-text-secondary`}
                        ref={ref}
                        style={{
                            transform: isInView ? "none" : "translateY(-100%)", // Mueve desde la izquierda
                            opacity: isInView ? 1 : 0, // Controla la opacidad
                            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                        }}
                    >
                        Somos una empresa familiar dedicada a llevar frutas y verduras frescas directamente a tu puerta.
                    </p>
                    <p
                        className={`text-[1rem] leading-relaxed mt-4 text-text-secondary`}
                        ref={ref}
                        style={{
                            transform: isInView ? "none" : "translateY(-100%)", // Mueve desde la izquierda
                            opacity: isInView ? 1 : 0, // Controla la opacidad
                            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                        }}
                    >
                        Desde hace más de {since} años, nuestra pasión por la agricultura y el compromiso con la calidad nos han permitido ofrecer productos seleccionados con cuidado, garantizando frescura y sabor en cada entrega.
                    </p>
                    <p
                        className={`text-[1rem] leading-relaxed mt-4 text-text-secondary`}
                        ref={ref}
                        style={{
                            transform: isInView ? "none" : "translateY(-100%)", // Mueve desde la izquierda
                            opacity: isInView ? 1 : 0, // Controla la opacidad
                            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                        }}
                    >
                        Nos distinguimos por ofrecer un servicio personalizado a grandes cafeterías y restaurantes, proporcionando productos frescos en grandes volúmenes, siempre con la misma calidad y puntualidad que nos caracteriza.
                    </p>
                    <div className="w-full flex justify-start">
                        <button
                            className="p-4 bg-primary-main text-white rounded-xl my-4 w-min-content"
                            style={{
                                transform: isInView ? "none" : "translateY(-100%)", // Mueve desde la izquierda
                                opacity: isInView ? 1 : 0, // Controla la opacidad
                                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                            }}
                        >Conocenos más</button>
                    </div>
                </div>
            </div>
        </div >
    )
}