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
            <div className='absolute top-0 w-full h-full flex flex-col items-center justify-center space-y-6'>
                <h1 className='text-5xl font-medium drop-shadow-lg text-white w-1/2 text-center'>Rozpocznij swoją drogę z nami już dziś</h1>
                <ul className='flex space-x-4'>
                    <li><button className='border border-white p-4 text-white bg-black/70 hover:border-kgk-gold hover:text-kgk-gold ease-in-out duration-300'>Kontakt</button> </li>
                    <li><button className='border border-white p-4 text-white bg-black/70 hover:border-kgk-gold hover:text-kgk-gold ease-in-out duration-300'>Usługi</button> </li>
                </ul>
                <div className='pt-36 text-kgk-gold '>
                    Przewiń w dół
                </div>
            </div>
        </div>
    )

}
