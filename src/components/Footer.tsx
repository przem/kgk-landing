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
                        <h4 className="text-kgk-gold underline underline-offset-8 text-semibold">Linki</h4>
                        <div className="text-white text-md flex flex-col space-y-4">
                            <Link to='/#o-kancelarii' className="" >O Kancelarii</Link>
                            <Link to='/#uslugi' className="" >Usługi</Link>
                            <Link to='/#zespol' className="" >Zespół</Link>
                            <Link to='/polityka-prywatnosci' className="" >Polityka prywatności</Link>
                            <hr className="w-1/2"/>
                            <a href="https://g.page/adwGumulaKubicka?share" className="inline-flex text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 fill-current" viewBox="0 0 512 512">
                                    <title>Logo Google</title>
                                    <path
                                      d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z"/>
                                </svg>
                                Google
                            </a>
                            <a href="https://facebook.com/adwGumulaKubicka" className="inline-flex text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 fill-current" viewBox="0 0 512 512">
                                    <title>Logo Facebook</title>
                                    <path
                                      d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                                      fillRule="evenodd"/>
                                </svg>
                                Facebook
                            </a>
                            <a href="https:/www.linkedin.com/in/gumula-kubicka/" className="inline-flex text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 fill-current" viewBox="0 0 512 512">
                                    <title>Logo Linkedin</title>
                                    <path
                                      d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"/>
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>



            </div>
            <footer className="w-full text-center text-white/20 text-sm">Prawa autorskie © {new Date().getFullYear()} Kancelaria. Wszelkie prawa zastrzeżone.</footer>
        </div>

    )

}
