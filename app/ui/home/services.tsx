'use client'
import Image from "next/image";
import { playfar } from "../fonts";
import { useRef } from "react";
import { useInView } from "motion/react"
import { useLayoutEffect } from "react";
import { useEffect } from "react";

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div
            id="services"
            className="w-full h-screen flex justify-between items-center  bg-[#f4f3f0] bg-repeat-round bg-contain relative"

        >
            <div className="flex h-full w-[30%] align-start relative">
                <Image
                    alt="floating vegetable"
                    src="/services/leftLayout.jpg"
                    className="opacity-50"
                    objectFit="cover"
                    fill
                    id="parallaxImage"
                    quality={100}

                />
                <div className="w-[400px] h-[550px] absolute right-[-15rem] top-[15%] rounded-lg shadow-xl animate-moveUpAndDown">
                    <Image
                        alt="floating vegetable"
                        src="/services/floatingPhoto.png"
                        className="z-20 rounded-lg"
                        fill
                        id="parallaxImage"
                        quality={100}
                    />
                </div>

            </div>
            <div className="w-1/2 h-full flex flex-col justify-center items-start p-8 gap-8">
                <div className="w-full flex flex-col items-start">
                    <div
                        className="flex justify-center items-center gap-1"
                        ref={ref}
                        style={{
                            transform: isInView ? "none" : "translateY(100%)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
                        }}
                    >
                        <div className="w-3 h-3 bg-primary-main rounded-full"></div>
                        <p className="text-primary-light font-semibold">Servicios</p>
                    </div>
                    <p
                        className={`${playfar.className} text-[2.5rem] font-superbold text-text-primary leading-tight text-center`}
                        ref={ref}
                        style={{
                            transform: isInView ? "none" : "translateX(-100%)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                        }}
                    >
                        Lo Que Ofrecemos
                    </p>
                    <p
                        className="text-[1rem] leading-relaxed mt-4 text-text-secondary text-start"
                        ref={ref}
                        style={{
                            transform: isInView ? "none" : "translateX(100%)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
                        }}
                    >
                        Ofrecemos servicios puerta a puerta con frutas y verduras seleccionadas para tu hogar. Además, trabajamos con empresas, garantizando grandes volúmenes de productos frescos con la misma calidad.
                    </p>
                </div>
                <div className="w-full flex flex-col justify-start gap-4">
                    <div className="bg-[#ffffff] w-[80%] h-[5rem] flex flex-col justify-center rounded-lg relative shadow-md hover:shadow-lg p-8">
                        <div className="rounded-full w-[60px] h-[60px] flex justify-center items-center absolute left-0 top-[15%] left-[-25px] bg-primary-main ">
                            <Image
                                src="/icons/vegetables.svg"
                                alt="vegetables icon"
                                width={30}
                                height={30}
                            />
                        </div>
                        <div className="flex flex-col pl-4">
                            <p className={`${playfar.className} text-text-primary font-superbold text-[1rem] `}>Verduras</p>
                            <p className="text-text-secondary text-[0.7rem]">Entregamos verduras frescas y de temporada, asegurando sabor y nutrición en cada producto</p>
                        </div>
                    </div>
                    <div className="bg-[#ffffff] w-[80%] h-[5rem] flex flex-col justify-center rounded-lg relative shadow-md hover:shadow-lg p-8">
                        <div className="rounded-full w-[60px] h-[60px] flex justify-center items-center absolute left-0 top-[15%] left-[-25px] bg-primary-main">
                            <Image
                                src="/icons/fruits.svg"
                                alt="fruits icon"
                                width={30}
                                height={30}
                            />
                        </div>
                        <div className="flex flex-col pl-4">
                            <p className={`${playfar.className} text-text-primary font-superbold text-[1rem] `}>Frutas</p>
                            <p className="text-text-secondary text-[0.7rem]">Frutas frescas, cultivadas de forma responsable para que disfrutes de todo el sabor</p>
                        </div>
                    </div>
                    <div className="bg-[#ffffff] w-[80%] h-[5rem] flex flex-col justify-center rounded-lg relative shadow-md hover:shadow-lg p-8">
                        <div className="rounded-full w-[60px] h-[60px] flex justify-center items-center absolute left-0 top-[15%] left-[-25px] bg-primary-main">
                            <Image
                                src="/icons/logistics.svg"
                                alt="logistics icon"
                                width={30}
                                height={30}
                            />
                        </div>
                        <div className="flex flex-col pl-4">
                            <p className={`${playfar.className} text-text-primary font-superbold text-[1rem] `}>Logística</p>
                            <p className="text-text-secondary text-[0.7rem]">Contamos con un sistema logístico optimizado que asegura entregas rápidas y seguras puerta a puerta</p>
                        </div>
                    </div>
                    <div className="bg-[#ffffff] w-[80%] h-[5rem] flex flex-col justify-center rounded-lg relative shadow-md hover:shadow-lg p-8">
                        <div className="rounded-full w-[60px] h-[60px] flex justify-center items-center absolute left-0 top-[15%] left-[-25px] bg-primary-main">
                            <Image
                                src="/icons/colleagues.svg"
                                alt="colleagues icon"
                                width={30}
                                height={30}
                            />

                        </div>
                        <div className="flex flex-col pl-4">
                            <p className={`${playfar.className} text-text-primary font-superbold text-[1rem] `}>Atención Empresarial</p>
                            <p className="text-text-secondary text-[0.7rem]">Brindamos soluciones a medida para empresas, asegurando un servicio eficiente y productos frescos entregados a tiempo</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-start">
                    <button
                        className="py-4 px-16 bg-primary-main text-white rounded-full my-4 w-min-content"
                    >
                        Saber más
                    </button>
                </div>
            </div>
            <Image
                alt="floating vegetable"
                src="/services/chilli.png"
                objectFit="contain"
                className="absolute right-[-200px] bottom-[-70px] overflow-hidden"
                id="parallaxImage"
                width={700}
                height={700}
                quality={100}

            />
        </div>
    )

}

{/* 

            <div className="flex absolute top-20 left-[15px] gap-4">

                <div className="flex flex-col items-end ">

                    <p className={`${playfar.className} text-[1.2rem] font-semibold text-text-primary mt-4 text-end`}>
                        Verduras
                    </p>

                    <p className=" text-[0.9rem] text-text-secondary text-center mt-2 text-end">
                        Entregamos verduras frescas y de temporada, asegurando sabor y nutrición en cada producto
                    </p>
                </div>
                <Image
                    src="/icons/vegetables.svg"
                    alt="vegetables icon"
                    width={75}
                    height={75}
                />
            </div> */}
{/*
            <Image
                alt="floating vegetable"
                className="absolute right-10 bottom-5 rotate-12 "
                src="/services/floating.png"
                width={200}
                height={200}
                id="parallaxImage"
            />

            <Image
                alt="floating vegetable"
                className="absolute right-[20rem] top-15 rotate-12 "
                src="/services/floatingPera.png"
                width={200}
                height={200}
                id="parallaxImage"
            />
            <Image
                alt="floating vegetable"
                className="absolute left-[5rem] bottom-[17rem] rotate-6 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:rotate-3"
                src="/services/floatingBuberry.png"
                width={200}
                height={200}
                id="parallaxImage"
            /> */}
{/* <div className="flex flex-col justify-center w-[50%] p-16">
                <div
                    className="flex justify-center items-center gap-1"
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateY(100%)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
                    }}
                >
                    <div className="w-3 h-3 bg-primary-main rounded-full"></div>
                    <p className="text-primary-light font-semibold">Servicios</p>
                </div>
                <p
                    className={`${playfar.className} text-[2.5rem] font-superbold text-text-primary leading-tight text-center`}
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateX(-100%)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}
                >
                    Lo Que Ofrecemos
                </p>
                <p
                    className="text-[1rem] leading-relaxed mt-4 text-text-secondary text-center"
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateX(100%)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
                    }}
                >
                    Ofrecemos servicios puerta a puerta con frutas y verduras seleccionadas para tu hogar. Además, trabajamos con empresas, garantizando grandes volúmenes de productos frescos con la misma calidad.
                </p>
            </div>

            {/* Grid Layout
            <div className="grid grid-cols-2 gap-4 px-4 w-[50%]">
                {/* Frutas 
                <div className="flex flex-col justify-center items-center p-4 rounded-[1rem] shadow-md"
                    style={{
                        backgroundImage: "url(/services/cardBg.png)",
                        transform: isInView ? "none" : "translateX(-100%)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
                    }}

                >
                    <Image
                        src="/icons/fruits.svg"
                        alt="fruits icon"
                        width={75}
                        height={75}
                    />
                    <p className={`${playfar.className} text-[1.2rem] font-semibold text-text-primary mt-4`}>
                        Frutas
                    </p>
                    <p className="text-[0.9rem] text-text-secondary text-center mt-2">
                        Frutas frescas, cultivadas de forma responsable para que disfrutes de todo el sabor
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center bg-[#f8fdf7] p-4 rounded-[1rem] shadow-md"
                    style={{
                        backgroundImage: "url(/services/cardBg.png)",
                        transform: isInView ? "none" : "translateX(100%)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
                    }}
                >
                    <Image
                        src="/icons/vegetables.svg"
                        alt="vegetables icon"
                        width={75}
                        height={75}
                    />
                    <p className={`${playfar.className} text-[1.2rem] font-semibold text-text-primary mt-4`}>
                        Verduras
                    </p>
                    <p className="text-[0.9rem] text-text-secondary text-center mt-2">
                        Entregamos verduras frescas y de temporada, asegurando sabor y nutrición en cada producto
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center bg-[#f8fdf7] p-4 rounded-[1rem] shadow-md"
                    style={{
                        backgroundImage: "url(/services/cardBg.png)",
                        transform: isInView ? "none" : "translateX(-100%)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
                    }}
                >
                    <Image
                        src="/icons/logistics.svg"
                        alt="logistics icon"
                        width={75}
                        height={75}
                    />
                    <p className={`${playfar.className} text-[1.2rem] font-semibold text-text-primary mt-4`}>
                        Logística
                    </p>
                    <p className="text-[0.9rem] text-text-secondary text-center mt-2">
                        Contamos con un sistema logístico optimizado que asegura entregas rápidas y seguras puerta a puerta
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center bg-[#f8fdf7] p-4 rounded-[1rem] shadow-md delay-500"
                    style={{
                        backgroundImage: "url(/services/cardBg.png)",
                        transform: isInView ? "none" : "translateX(100%)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
                    }}>
                    <Image
                        src="/icons/colleagues.svg"
                        alt="colleagues icon"
                        width={75}
                        height={75}
                    />
                    <p className={`${playfar.className} text-[1.2rem] font-semibold text-text-primary mt-4`}>
                        Atención Empresarial
                    </p>
                    <p className="text-[0.9rem] text-text-secondary text-center mt-2">
                        Brindamos soluciones a medida para empresas, asegurando un servicio eficiente y productos frescos entregados a tiempo
                    </p>
                </div>
            </div> */}