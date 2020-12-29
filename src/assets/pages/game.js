import { useState } from "react"
import { Link } from "react-router-dom"

import Person from "../components/game/classes/person.js"
import * as config from "../components/game/config.js"

import Canvas from "../components/canvas"

const Game = () => {
    const [ modal, showModal ] = useState(false)

    const people = [ new Person(true) ]
    let safe = modal ? "SHOW_MODAL" : 0

    for(let i = 0; i < config.settings.population; i++) {
        people.push(new Person())
    }

    const draw = (ctx) => {
        if(safe === "SHOW_MODAL") {
            return
        }

        safe = 0

        ctx.clearRect(0, 0, config.width, config.height)
        people.forEach(person => {
            person.collision(people)
            person.update()
            person.render(ctx)

            if(person.infected) {
                safe ++    
            }
        })

        if(safe === 0) {
            showModal(true)
        }
    }

    const restartSimulation = () => {
        showModal(false)
        safe = 0
    }

    return (
        <div id="root-game">
            <Canvas draw={ draw } />
            <div className="canvas-overlay flex align-center justify-center" style={ {
                display: modal ? "flex" : "none"
            } }>
                <Link to="/">
                   <button className="secondary-background default-button">
                        <i className="fas fa-chevron-left"></i>
                    </button> 
                </Link>
                <button className="primary-background default-button play" onClick={ restartSimulation }>
                    <i className="fas fa-redo-alt"></i>
                </button>
            </div>
        </div>
    )
}

export default Game 