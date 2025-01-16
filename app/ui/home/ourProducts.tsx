import Image from "next/image";
import { sacramento } from "../fonts";

export default function ourProducts() {
    return (
        <div id="producs" className="h-screen w-full flex flex-col items-center justify-start">
            <div className="w-full h-[50%] py-16 flex gap-4  px-8 rounded-2x1  ">
                <div className="w-full h-full flex flex-column gap-4 justify-evenly">
                    <div className="w-[40%] h-[300px] relative rounded-[1rem] shadow-lg transform transition-all duration-300 hover:scale-105 flex">
                        <Image
                            src="/211.jpg"
                            alt="background"
                            className="object-cover  rounded-[1rem]"
                            fill
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-[1rem]"></div>
                        <p className={`${sacramento.className} absolute top-[15%] left-[10%] text-[2rem] font-bold text-[#ede9e6]`}>Healthy</p>
                        <p className="absolute top-[25%] left-[10%] text-[2rem] font-bold text-white">Verduras</p>
                        <p className="absolute top-[40%] left-[10%] text-[1rem] text-white">Frescura y calidad en cada bocado</p>
                    </div>
                    <div className="w-[40%] h-[300px] relative rounded-[1rem] shadow-lg transform transition-all duration-300 hover:scale-105">
                        <Image
                            src="/2148501499.jpg"
                            alt="background"
                            className="object-cover  rounded-[1rem]"
                            fill
                        />

                        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-[1rem]"></div>
                        <p className={`${sacramento.className} absolute top-[15%] left-[10%] text-[2rem] font-bold text-[#ede9e6]`}>Healthy</p>
                        <p className={`absolute top-[25%] left-[10%] text-[2rem] font-bold text-white`}>Frutas</p>
                        <p className="absolute top-[40%] left-[10%] text-[1rem] text-white">Elige lo mejor de la naturaleza</p>


                    </div>
                </div>
            </div>

        </div>
    )
}
/**/