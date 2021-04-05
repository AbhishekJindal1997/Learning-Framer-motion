import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
`

export const Menu = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;

    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${props => props.theme.text};
      margin: 8px;
    }
  }
`

export const Logo = styled.div`
  a {
    font-size: 2.5rem;
    font-weight: 800;
    color: ${props => props.theme.text};
  }

  span {
    color: ${props => props.theme.red};
    font-weight: 800;
    display: inline-block;

    font-size: 2.2rem;
    margin-left: 5px;
    margin-top: 10px;
  }
`
