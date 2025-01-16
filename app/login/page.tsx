import Image from "next/image";

export default function Page() {
    return (
        <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
            <div className="sm:w-full sm:h-full md:w-4/3  md:h-4/3 lg:w-[70%] lg:h-4/5 flex flex-row shadow-xl ">
                <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8 w-1/2 bg-common-primary md:rounded-tl-[1rem] md:rounded-bl-[1rem]">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            alt="Central Fruit Logo"
                            src="/logo.png"
                            className="mx-auto h-60 w-auto"
                        />
                    </div>
                    <h2 className="margin-top: -15px text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Ingresá a tu cuenta
                    </h2>
                    <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                    Usuario
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-primary-dark focus:outline-2 focus:-outline-offset-2 focus:primary-dark sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 color-primary-dark">
                                        Clave
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-primary-dark hover:primary-dark">
                                            Recuperar clave
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-dark sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-primary-dark px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
                                >
                                    Ingresar
                                </button>
                            </div>
                        </form>

                        <p className="p-4">
                            Nuevo en Central Fruit? <a className="text-primary-dark font-semibold hover:primary-dark">Create una cuenta</a>
                        </p>

                    </div>
                </div>
                <div className="w-1/2 h-full relative rounded-tr-[1rem] rounded-br-[1rem] hidden sm:block">
                    <Image
                        src='/signIn.jpg'
                        alt="fruits"
                        fill
                        className="object-cover rounded-tr-[1rem] rounded-br-[1rem] sm:hidden md:block"
                    />
                </div>
            </div>
        </div>
    )
}