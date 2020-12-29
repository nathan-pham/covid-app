import React, { useRef, useEffect } from "react"
import resize from "./game/libs/resize"

const Canvas = (props) => {
  
  const { draw, ...rest } = props
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    let frameCount = 0
    let animationFrameId

    resize(canvas)

    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [ draw ])
  
  return <canvas ref={ canvasRef } {...rest}/>
}

export default Canvas
