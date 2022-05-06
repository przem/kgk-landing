import React from "react";
import {StaticImage} from "gatsby-plugin-image";

export default function MainSlider() {

    return (
        <div className='relative h-fit max-h-screen overflow-hidden'>
            <StaticImage
                src="../images/city.jpeg"
                loading="eager"
                formats={["auto", "jpg", "webp"]}
                alt="Logo"
                className="hue-rotate-90 saturate-0 brightness-90 object-cover"
            />
            <div className='absolute top-0 w-full h-full flex flex-col items-center justify-center space-y-6 -mt-16'>
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Rozpocznij swoją drogę</span>{' '}
                            <span className="block text-kgk-gold-light xl:inline">z nami już dziś</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-serif">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-kgk-gold hover:bg-kgk-gold md:py-4 md:text-lg md:px-10"
                                >
                                    Usługi
                                </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-kgk-gold-light hover:bg-kgk-gold-light md:py-4 md:text-lg md:px-10"
                                >
                                    Kontakt
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )

}
