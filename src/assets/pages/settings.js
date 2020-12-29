import Back from "../components/back.js"
import { settings, defaultSettings } from "../components/game/config.js"

let cacheSettings = settings

/*
const defaultSettings = {
    population: 100,
    showDead: true,
    speed: 1
}
*/

const Input = (props) => {
    return (
        <div></div>
    )
}

const Settings = () => {
    return (
        <div id="root-settings">
            <Back />
            <h1 className="primary-color title">Settings</h1>
            <section className="text">
                <p>Manage general game settings and privacy.</p>
            </section>
            <h2 className="primary-color title">Game</h2>
            <section className="text">
                <div className="input-wrapper flex justify-between">
                    <input name="population" type="range" min="25" max="500" value={ settings.population }/>
                    <label htmlFor="population">Population</label>
                </div>
                <div className="input-wrapper flex justify-between">
                    <input name="speed" type="range" min="1" max="10" value={ settings.speed }/>
                    <label htmlFor="speed">Speed</label>
                </div>
                <div className="input-wrapper flex justify-between">
                    <input name="dead" type="checkbox" checked={ settings.showDead }/>
                    <label htmlFor="dead">Show Dead</label>
                </div>
            </section>
            <button className="primary-background restore">Restore Default Settings</button>
            <h2 className="primary-color title">Privacy</h2>
            <section className="text">
                <p>This is an offline app; data is never shared with a server or another provider. Settings persist in your local storage and will disappear if you delete this app.</p>
            </section>
        </div>
    )
}

export default Settings