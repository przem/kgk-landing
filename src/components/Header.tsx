import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {BellIcon, MenuIcon, PhoneIcon, XIcon} from '@heroicons/react/outline'

import {Link as ScrollLink} from "react-scroll";

// @ts-ignore
import LogoFull from '../images/logo_full.svg';
import './header.scss';

const Header = (props: HeaderProps) => (
    <Disclosure as="nav" className="bg-white shadow fixed z-50 w-full">
        {({ open }) => (
            <>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Otwórz menu</span>
                                {open ? (
                                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                            <div className="flex-shrink-0 flex items-center">
                                <Link to="/"> <img src={LogoFull} className="w-48 md:w-64"/> </Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                { props.spa ?  <SpaMenuItems/> : <MenuItems/> }
                            </div>
                        </div>
                        <div className="flex items-center md:ml-4 ">
                            <div className="flex-shrink-0 hidden lg:block">
                                <Link to='/eprawnik'>
                                    <button type="button" className="navbar-quick-action" > Prawnik On-line </button>
                                </Link>
                            </div>
                            <div className="flex-shrink-0 block lg:hidden">
                                <a href='tel://609610013'>
                                    <button type="button" className="navbar-quick-action" > <PhoneIcon className="w-4 h-4"/> </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                    <div className="pt-2 pb-4 pl-2 flex space-y-3 flex-col">
                        {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                        { props.spa ?  <SpaMenuItems/> : <MenuItems/> }
                    </div>
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>
)

type HeaderProps = {
  spa: boolean
}

export default Header

const SpaMenuItems = () => (
    <>
        <ScrollLink to='o-kancelarii' className="navbar-link"  smooth={true} duration={500} offset={-50}>O Kancelarii</ScrollLink>
        <ScrollLink to='uslugi' className="navbar-link"  smooth={true} duration={500} offset={-50}>Usługi</ScrollLink>
        <ScrollLink to='zespol' className="navbar-link" smooth={true} duration={500} offset={-50} >Zespół</ScrollLink>
        <Link to='/blog' className="navbar-link" >Blog</Link>
        <ScrollLink to='kontakt' className="navbar-link"  smooth={true} duration={500} offset={-50}>Kontakt</ScrollLink>
    </>
)

const MenuItems = () => (
    <>
        <Link to='/#o-kancelarii' className="navbar-link" >O Kancelarii</Link>
        <Link to='/#uslugi' className="navbar-link">Usługi</Link>
        <Link to='/#zespol' className="navbar-link" >Zespół</Link>
        <Link to='/blog' className="navbar-link" >Blog</Link>
        <Link to='/#kontakt' className="navbar-link" >Kontakt</Link>
    </>
)
