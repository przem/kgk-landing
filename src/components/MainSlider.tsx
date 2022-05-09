import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
import {ArrowCircleDownIcon} from "@heroicons/react/outline";

export default function MainSlider() {

    return (
        <div className='relative min-h-full md:h-fit max-h-screen overflow-hidden'>
            <StaticImage
                src="../images/city.jpeg"
                loading="eager"
                formats={["auto", "jpg", "webp"]}
                alt="City"
                className="hue-rotate-90 saturate-0 brightness-33 object-cover min-h-screen	"
            />
            <div className='absolute top-0 w-full h-full flex flex-col items-center justify-center space-y-6'>
                <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-18 sm:px-6 md:mt-20 lg:mt-24 lg:px-8 xl:mt-32">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Rozpocznij swoją drogę</span>{' '}
                            <span className="block text-kgk-gold-light xl:inline">z nami już dziś</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-2xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-serif">
                            Kiedy masz okazję biznesową lub wyzwanie, nie zadowalaj się zwyczajnym podejściem.
                            Stwórz idealne rozwiązanie dzięki wskazówkom dynamicznego zespołu prawników, który ma odwagę robić rzeczy inaczej.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <Link
                                    to="uslugi"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-kgk-gold hover:bg-kgk-gold md:py-4 md:text-lg md:px-10"
                                >
                                    Zobacz w czym jesteśmy świetni
                                </Link>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <Link
                                    to="kontakt"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-kgk-gold-light hover:bg-kgk-gold-light md:py-4 md:text-lg md:px-10"
                                >
                                    Opowiedz nam o swoim wyzwaniu
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div className="absolute bottom-5 text-white w-full flex items-center justify-center">
                <ArrowCircleDownIcon className="w-8 h-8 animate-bounce"/>
            </div>
        </div>
    )

}
