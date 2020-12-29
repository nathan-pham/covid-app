const width = window.innerWidth
const height = window.innerHeight

const defaultSettings = {
    population: 100,
    covid: {
        contact: 0.05,
        dying: 0.1
    },
    colors: {
        healthy: "#63c8f2",
        recovered: "#d88dbc",
        infected: "#5bba4b",
        deceased: "#000"
    }
}

let settings = defaultSettings

try {
    settings = JSON.parse(localStorage.getItem("settings")) || defaultSettings
}
catch(e) {
    console.log(e)
    settings = defaultSettings
}

export {
  width,
  height,
  settings
}