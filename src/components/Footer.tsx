import React from "react";

import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";

export default function Footer() {

    return (

        <div className="bg-kgk-gray-dark">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 md:py-16">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-3 pt-16">
                    <div>
                        <StaticImage src={'../images/logo_dark.png'} alt={'Logo'} />

                        <dl className="pt-8 space-y-4">
                            <div>
                                <dt className="text-sm font-medium text-gray-400">
                                    Adres
                                </dt>
                                <dd className="mt-1 text-sm text-white">
                                    ul. Szlak 65 lok. 1008
                                    <br/>(X piętro biurowca KŁOS)
                                    <br/>31-153 Kraków
                                </dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-400">
                                    Telefon
                                </dt>
                                <dd className="mt-1 text-sm text-white">
                                    <a href="tel://+48609610013">+48 609 610 013</a>
                                </dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-400">
                                    Email
                                </dt>
                                <dd className="mt-1 text-sm text-white">
                                    <a href="mailto://kancelaria@gumula-kubicka.pl">kancelaria@gumula-kubicka.pl</a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-kgk-gold underline underline-offset-8 text-semibold">Kancelaria</h4>
                        <p className="text-white text-md w-4/5">
                            Oferuje usługi prawne dla podmiotów gospodarczych oraz osób fizycznych.
                            <br/>
                            <br/>
                            Zachęcamy do kontaktu z prawnikami Kancelarii w celu umówienia indywidualnego spotkania.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-kgk-gold underline underline-offset-8 text-semibold">Social media</h4>
                        <div className="text-white text-md flex flex-col space-y-4">
                            <Link to='/#o-kancelarii' className="" >O Kancelarii</Link>
                            <Link to='/#uslugi' className="" >Usługi</Link>
                            <Link to='/#zespol' className="" >Zespół</Link>
                            <hr className="w-1/2"/>
                            <a href="https://g.page/adwGumulaKubicka?share">Google</a>
                            <a href="https://facebook.com/adwGumulaKubicka">Facebook</a>
                            <a href="https:/www.linkedin.com/in/gumula-kubicka/">LinkedIn</a>
                        </div>
                    </div>
                </div>



            </div>
            <footer className="w-full text-center text-white/20 text-sm">Prawa autorskie © {new Date().getFullYear()} Kancelaria. Wszelkie prawa zastrzeżone.</footer>
        </div>

    )

}
