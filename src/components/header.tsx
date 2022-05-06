import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }: HeaderProps) => (
  <header>
    <Link to="/">{siteTitle}</Link>
  </header>
)

type HeaderProps = {
  siteTitle: string
}

export default Header
