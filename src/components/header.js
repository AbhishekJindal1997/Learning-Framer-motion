import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { HeaderNav, Menu, Logo } from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"
// context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const Header = ({ siteTitle }) => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.5, -0.01, 0.9] }}
    >
      <Container>
        {console.log(currentTheme)}
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to="/"> FURR</Link>
            <span onClick={toggleTheme}></span>
            <Link to="/">W</Link>
          </Logo>
          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
