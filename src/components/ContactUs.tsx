import React, {ReactElement, ReactNode, useEffect, useRef} from "react";

import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";

export default function ContactUs() {

    return (

        <div className="">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-16">
                <h2 className="text-lg text-kgk-gold uppercase py-4">Kontakt</h2>
                <h3 className="text-3xl text-bold">Jak możemy pomóc?</h3>
                <h3 className="py-1 text-lg text-bold ">Porozmawiajmy o Twoich celach biznesowych i o tym, jak je osiągnąć.</h3>


                <div className="flex mt-16">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4336.722252523084!2d19.938808445387608!3d50.07095888597903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b048926ed0d%3A0x42cd25521b8a101f!2sKatarzyna%20Gumula-Kubicka%20Kancelaria%20Adwokacka!5e0!3m2!1spl!2spl!4v1652056249716!5m2!1spl!2spl"
                        width="600" height="450"  loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    className=""
                    ></iframe>
                    <dl className="px-16 space-y-8">
                        <div>
                            <dt className="text-lg font-medium text-kgk-gold">
                                Telefon
                            </dt>
                            <dd className="mt-1 text-xl">
                                <a href="tel://+48609610013" className="underline">+48 609 610 013</a>
                            </dd>
                        </div>
                        <div>
                            <dt className="text-lg font-medium text-kgk-gold">
                                Email
                            </dt>
                            <dd className="mt-1 text-xl">
                                <a href="mailto://kancelaria@gumula-kubicka.pl" className="underline">kancelaria@gumula-kubicka.pl</a>
                            </dd>
                        </div>
                        <div>
                            <dt className="text-lg font-medium text-kgk-gold">
                                Adres
                            </dt>
                            <dd className="mt-1 text-xl">
                                ul. Szlak 65 lok. 1008
                                <br/>(X piętro biurowca KŁOS)
                                <br/>31-153 Kraków
                            </dd>
                        </div>
                    </dl>
                </div>

            </div>
        </div>

    )

}
