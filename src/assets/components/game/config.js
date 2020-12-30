const width = window.innerWidth
const height = window.innerHeight

const defaultSettings = {
    dead: true,
    speed: 1,
    healthy: 100,
    infected: 1,
    covid: {
        contact: 0.05,
        dying: 0.1
    },
    colors: {
        healthy: "#1d7874",
        recovered: "#f4c095",
        infected: "#ee1e31",
        deceased: "#071e22"
    }
}



const generateSettings = () => {
    let _settings = defaultSettings

    try {
        _settings = JSON.parse(localStorage.getItem("settings")) || defaultSettings
    }
    catch(e) {
        _settings = defaultSettings
    }

    return _settings
}

const settings = generateSettings()

export {
  width,
  height,
  settings,
  defaultSettings,
  generateSettings
}