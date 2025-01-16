'use client'
import Image from "next/image";
import { playfar } from "../fonts";
import { useRef } from "react";
import { useInView } from "motion/react"

export default function ContactUs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div
            id="contact"
            className="w-full flex justify-center h-screen items-center justify-center  bg-no-repeat bg-cover backdrop-blur-xl overflow-y-hidden"
            style={{
                // WebkitClipPath: "polygon(3% 0, 7% 1%, 11% 0%, 16% 2%, 20% 0, 23% 2%, 28% 2%, 32% 1%, 35% 1%, 39% 3%, 41% 1%, 45% 0%, 47% 2%, 50% 2%, 53% 0, 58% 2%, 60% 2%, 63% 1%, 65% 0%, 67% 2%, 69% 2%, 73% 1%, 76% 1%, 79% 0, 82% 1%, 85% 0, 87% 1%, 89% 0, 92% 1%, 96% 0, 98% 3%, 99% 3%, 100% 0, 100% 100%, 0 100%, 0 0)",
                // clipPath: "polygon(3% 0, 7% 1%, 11% 0%, 16% 2%, 20% 0, 23% 2%, 28% 2%, 32% 1%, 35% 1%, 39% 3%, 41% 1%, 45% 0%, 47% 2%, 50% 2%, 53% 0, 58% 2%, 60% 2%, 63% 1%, 65% 0%, 67% 2%, 69% 2%, 73% 1%, 76% 1%, 79% 0, 82% 1%, 85% 0, 87% 1%, 89% 0, 92% 1%, 96% 0, 98% 3%, 99% 3%, 100% 0, 100% 100%, 0 100%, 0 0)",
                backgroundImage: "url(/contactUs/bg.jpg)"
            }}
        >
            <div className="flex justify-between p-8 w-[85%]">

                <div
                    className="w-[50%] flex flex-col"
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateX(-100%)", // Mueve desde la izquierda
                        opacity: isInView ? 1 : 0, // Controla la opacidad
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <div className="flex flex-col  items-start">

                        <div className="flex items-center gap-1 animate-slideDown ">
                            <div className="w-3 h-3 bg-primary-main rounded-full"></div>
                            <p className={`text-primary-light font-semibold`}>
                                Contacto
                            </p>
                        </div>
                        <p className={`${playfar.className} text-[2.5rem] font-superbold text-text-primary leading-tight text-center`}>
                            Contactanos!
                        </p>

                    </div>
                    <div className="w-full flex flex-col pt-4 gap-8">
                        <div className="w-full flex flex gap-4 justify-between">
                            <input
                                id="name"
                                name="Nombre"
                                type="text"
                                required
                                placeholder="Nombre Completo"
                                //  onChange={handleInputChange}
                                autoComplete="email"
                                className="h-[60px] w-[45%] rounded-[5px] bg-[#f1f3ef] border-none focus:outline focus:outline-primary-main focus:outline-2 focus:-outline-offset-2 focus:primary-main px-[10px] py-[20px]"
                            />
                            <input
                                id="email"
                                name="Email"
                                type="mail"
                                required
                                placeholder="Email"
                                //  onChange={handleInputChange}
                                autoComplete="email"
                                className="h-[60px] w-[45%] rounded-[5px] bg-[#f1f3ef] border-none focus:outline focus:outline-primary-main focus:outline-2 focus:-outline-offset-2 focus:primary-main px-[10px] py-[20px]"
                            />
                        </div>
                        <div className="w-full flex flex gap-4 justify-between">
                            <input
                                id="motive"
                                name="Motivo"
                                type="text"
                                required
                                placeholder="Motivo"
                                //  onChange={handleInputChange}
                                className="h-[60px] w-[45%] rounded-[5px] bg-[#f1f3ef] border-none px-[10px] py-[20px] focus:outline focus:outline-primary-main focus:outline-2 focus:-outline-offset-2 focus:primary-main"
                            />
                            <input
                                id="celphone"
                                name="Celular"
                                type="text"
                                required
                                placeholder="Celular"
                                //  onChange={handleInputChange}
                                className="h-[60px] w-[45%] rounded-[5px] bg-[#f1f3ef] border-none px-[10px] py-[20px] focus:outline focus:outline-primary-main focus:outline-2 focus:-outline-offset-2 focus:primary-main"
                            />
                        </div>
                        <div className="w-full flex flex gap-4">
                            <textarea
                                id="motive"
                                name="Motivo"
                                rows={4}
                                required
                                placeholder="Mensaje"
                                //  onChange={handleInputChange}
                                className="w-full rounded-[5px] bg-[#f1f3ef] border-none px-[10px] py-[20px] focus:outline focus:outline-primary-main focus:outline-2 focus:-outline-offset-2 focus:primary-main"
                            />
                        </div>
                        <div className="w-full flex justify-end">
                            <button
                                className="bg-primary-main p-4 rounded-lg  text-[white]"
                            >Enviar mensaje
                            </button>
                        </div>
                    </div>

                </div>

                <div
                    className="flex flex-col w-[45%] items-center justify-between"
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateX(100%)", // Mueve desde la izquierda
                        opacity: isInView ? 1 : 0, // Controla la opacidad
                        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <div className="flex items-center gap-4 w-full">
                        <Image
                            src="/icons/location.svg"
                            alt="fruits icon"
                            width={50}
                            height={50}
                        />
                        <div className="flex flex-col w-full">
                            <p className={`${playfar.className} text-[1.2rem] font-semibold text-text-primary`}>Ubicación</p>
                            <p className="text-text-secondary text-[1rem]">Capital Federal, Buenos Aires, Argentina.</p>
                        </div>
                    </div>
                    <hr className="solid w-[85%] self-start" />

                    <div className="flex items-center gap-4 w-full">
                        <Image
                            src="/icons/email.svg"
                            alt="fruits icon"
                            width={50}
                            height={50}
                        />
                        <div className="flex flex-col w-full">
                            <p className={`${playfar.className} text-[1.2rem] font-semibold text-text-primary`}>Correo Electrónico</p>
                            <p className="text-text-secondary text-[1rem]">centralfruit@gmail.com</p>
                        </div>
                    </div>
                    <hr className="solid w-[85%] self-start" />

                    <div className="flex items-center gap-4 w-full">
                        <Image
                            src="/icons/calling.svg"
                            alt="fruits icon"
                            width={50}
                            height={50}
                        />
                        <div className="flex flex-col w-full">
                            <p className={`${playfar.className} text-[1.2rem] font-semibold text-text-primary`}>Contacto</p>
                            <p className="text-text-secondary text-[1rem]">1132860515</p>
                        </div>
                    </div>
                    <div className="flex w-full justify-start gap-4">
                        <button className="bg-[#9b9b9b] rounded-full w-[55px] h-[55px] flex items-center justify-center hover:bg-primary-main">
                            <Image
                                src="/icons/instagram.svg"
                                alt="fruits icon"
                                width={25}
                                height={25}
                            />
                        </button>
                        <button className="bg-[#9b9b9b] rounded-full w-[55px] h-[55px] flex items-center justify-center hover:bg-primary-main">
                            <Image
                                src="/icons/whatsapp.svg"
                                alt="fruits icon"
                                width={25}
                                height={25}
                            />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}