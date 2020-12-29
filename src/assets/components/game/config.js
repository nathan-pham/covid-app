const width = window.innerWidth
const height = window.innerHeight
const version = 1

const defaultSettings = {
    population: 100,
    showDead: true,
    speed: 1,
    covid: {
        contact: 0.05,
        dying: 0.1
    },
    colors: {
        healthy: "#63c8f2",
        recovered: "#d88dbc",
        infected: "#5bba4b",
        deceased: "#000"
    },
    version
}

let settings = defaultSettings

try {
    settings = JSON.parse(localStorage.getItem("settings"))
    if(version !== settings.version || !settings) {
        settings = defaultSettings
    }
}
catch(e) {
    settings = defaultSettings
}

export {
  width,
  height,
  settings
}