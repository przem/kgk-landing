/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import { Link } from "gatsby"

import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/800.css"
import "@fontsource/amiri/400.css"
import Footer from "./Footer";
import CookieConsent, {Cookies, OPTIONS} from "react-cookie-consent";
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'


const Layout = ({ children, spa }: { children: React.ReactNode, spa: boolean }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <CookieConsent
        disableStyles={true}
        enableDeclineButton={true}
        buttonText="Akceptuję"
        onAccept={() => {
          Cookies.set("gatsby-gdpr-google-analytics", "true");
          Cookies.set("gatsby-gdpr-google-tagmanager", "true");
          initializeAndTrack(location);
        }}
        declineButtonText="Odrzuć"

        containerClasses={'bg-kgk-green/80 backdrop-blur-sm fixed w-full z-[999] flex items-center justify-between left-0 bottom-0 flex-col md:flex-row pb-2 md:pb-0'}
        contentClasses={'p-4 grow'}
        buttonWrapperClasses={'flex flex-nowrap space-x-5 mx-2'}
        buttonClasses={'cursor-pointer px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-kgk-gold hover:border-white/30'}
        declineButtonClasses={'text-white/70 hover:text-white'}

        cookieName="gatsby-gdpr-google-analytics">
        <h3 className="text-xl font-semibold mb-2 text-white">Strona korzysta z plików cookies</h3>
        <p className="text-white/80 text-sm">
          „Cookies” to pliki, które pozwalają nam gromadzić informacje związane z Tobą i Twoim urządzeniem w momencie, gdy odwiedzasz naszą witrynę internetową.
          Pliki cookie pozwalają nam ustalić m.in. liczbę użytkowników odwiedzających naszą stronę i częstotliwość tych odwiedzin
          a także sposób korzystania przez Ciebie z naszej strony internetowej. <Link to={'/polityka-prywatnosci'} className="underline">Zapoznaj się z polityką prywatności</Link>
        </p>
      </CookieConsent>
      <Header spa={spa} />
      <main>{children}</main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
