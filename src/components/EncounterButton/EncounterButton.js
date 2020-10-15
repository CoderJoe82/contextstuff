import React, { useContext } from 'react';
import { UserContext } from '../Context/Context'
import './EncounterButton.css'
import $ from 'jquery'

function EncounterButton() {
    const user = useContext(UserContext)
    
    const handleEncounter = () => {
        const url = 'http://127.0.0.1:8000/api/Pokemon'
        fetch(url)
            .then(r => r.json())
            .then(image => {
                
                document.getElementById('pokemonImage').src = image[Math.floor(Math.random() * Object.keys(image).length) + 1].front_normal_image
                
            })
        user.currentTrainer.poke_ball -= 1;
        console.log(user.currentTrainer)
        $('#encounterButton').hide()
        $('#catchButton').show()
    }

    const handleCatch = () => {
        $('#catchButton').hide()
        $('#encounterButton').show()
    }

    return (
        <React.Fragment>
            <div id = "buttonHolder">
                <button id = 'encounterButton' onClick = {handleEncounter}>Search for Pokemon!</button>
                <button id = 'catchButton' onClick = {handleCatch}>Catch it!!!!!</button>
            </div>
        </React.Fragment>
    )
}

export default EncounterButton