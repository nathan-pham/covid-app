const width = window.innerWidth
const height = window.innerHeight
const population = 100

const covid = {
  contact: 0.05,
  dying: 0.1
}

const colors = {
  healthy: "#63c8f2",
  recovered: "#d88dbc",
  infected: "#5bba4b",
  deceased: "#000"
}

export {
  width,
  height,
  covid,
  colors,
  population
}