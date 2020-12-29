const resize = (canvas) => {
  const { width, height } = canvas.getBoundingClientRect()
  const { devicePixelRatio:ratio=1 } = window
  const ctx = canvas.getContext("2d")

  Object.assign(canvas, {
    width: width * ratio,
    height: height * ratio
  })

  ctx.scale(ratio, ratio)
} 

export default resize