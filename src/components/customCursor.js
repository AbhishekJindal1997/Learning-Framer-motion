import React, { useEffect, useState } from "react"
import { Cursor } from "../styles/globalStyles"

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 400,
    y: 400,
  })

  const onMouseMove = event => {
    const { pageX: x, pageY: y } = event
    setMousePosition({ x, y })
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, []) // when this component loads it reloads  , Empty array set user in this array

  return (
    <>
      <Cursor
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />
    </>
  )
}

export default CustomCursor
