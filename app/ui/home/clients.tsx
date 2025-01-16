'use client'
import { playfar } from "../fonts";
import { useRef } from "react";
import { useInView } from "motion/react"
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

const clients = [
    "/clients/client1.svg",
    "/clients/client2.png",
    "/clients/client3.png",
    "/clients/client4.png",
    "/clients/client5.png",
    "/clients/client6.png",
]

export default function Clients() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [currentImage, setCurrentImage] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prev) => (prev + 1 === clients.length ? 0 : prev + 1));
        }, 3000); // Cambia la imagen cada 3 segundos

        return () => clearInterval(intervalId);
    }, []);

    console.log(currentImage, clients.length)
    return (
        <div className="h-screen py-8 flex w-full relative justify-center items-center ">
            <Image
                alt="background"
                src="/clients/leftBg.png"
                fill
                className="absolute object-left object-contain opacity-70 overflow-visible"
            />
            <Image
                alt="background"
                src="/clients/rightBg.png"
                fill
                className="absolute object-right object-contain opacity-70 overflow-visible"
            />
            <div className="flex justify-center items-center w-full h-full gap-8 px-16">
                <div className="flex flex-col justify-center w-[30%] h-full">
                    <div
                        className="flex justify-start items-center gap-1 w-full"
                        ref={ref}
                        style={{
                            transform: isInView ? "none" : "translateY(100%)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
                        }}
                    >
                        <div className="w-3 h-3 bg-primary-main rounded-full"></div>
                        <p className="text-primary-light font-semibold">Alianzas que nos inspiran</p>
                    </div>

                    <p
                        className={`${playfar.className} w-full text-start text-[2.5rem] font-superbold text-text-primary leading-tight`}
                        ref={ref}
                        style={{
                            transform: isInView ? "none" : "translateX(-100%)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                        }}
                    >
                        Ellos eligen nuestra calidad

                    </p>
                    <p
                        className={`text-[1rem] leading-relaxed mt-4 text-text-secondary text-start`}
                        ref={ref}
                        style={{
                            transform: isInView ? "none" : "translateY(-100%)", // Mueve desde la izquierda
                            opacity: isInView ? 1 : 0, // Controla la opacidad
                            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                        }}>
                        Nuestra trayectoria se define por la confianza de empresas líderes que valoran nuestro compromiso con la calidad, la innovación y la excelencia en cada servicio que ofrecemos. <br /> Estas alianzas estratégicas no solo representan nuestro impacto en el mercado, sino también la solidez de nuestra visión compartida por hacer la diferencia.
                    </p>
                </div>
                <div className="flex w-[30%] justify-center items-center relative h-full">
                    <div className="w-[500px] h-[500px] rounded-2xl overflow-hidden relative">
                        <Image
                            alt="vegetables"
                            layout="fill"
                            className="object-cover"
                            src="/clients/floatFruits.jpg"
                        />
                    </div>
                    <div className="z-30 w-[350px] h-[350px] bg-[#2c2c2c] absolute left-12 bottom-20 rounded-2xl flex justify-center items-center flex-col">
                        <div className="w-[80%] h-[80%] relative flex justify-center items-center flex-shrink">
                            <Image
                                alt={`client-${currentImage + 1}`}
                                loading="lazy"
                                className="object-contain"
                                height={200}
                                width={200}
                                style={{ height: "auto", width: "auto" }}
                                src={clients[currentImage]}
                                quality={100}
                            />
                        </div>
                        <div className="flex justify-center items-center gap-4 mt-4">
                            {clients.map((_, idx) => (
                                <button key={idx} onClick={() => setCurrentImage(idx)}>
                                    <div
                                        className={`w-2 h-2 rounded-full ${idx === currentImage
                                            ? "bg-primary-main"
                                            : "bg-gray-400"
                                            }`}
                                    ></div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}//
//