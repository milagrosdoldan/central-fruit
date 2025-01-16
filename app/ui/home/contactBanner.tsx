import { playfar } from "../fonts";

export default function ContactBanner() {
    return <div className="w-4/5 flex justify-around justify-center items-center rounded-xl p-4 my-16 bg-cover"
        style={{ backgroundImage: "url(/contactBanner/bg.png)" }}
    >
        <h1 className={`${playfar.className} text-text-primary text-xl font-bold bg-[#f4f4f4]`}>¡Tu pedido está a un clic de distancia! Escribinos y recibí lo mejor</h1>
        <button
            className="p-4 bg-primary-main text-white rounded-xl my-4 w-min-content"
        >
            ¡Contactanos!
        </button>
    </div>

}