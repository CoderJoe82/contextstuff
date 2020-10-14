import React, { useContext, useEffect } from 'react';
import './EncounterView.css';
import pokemart from '../../img/pokemart.png';
import pokedex from '../../img/pokedexsmol.png'
import { UserContext } from '../Context/Context'
import EncounterButton from '../EncounterButton/EncounterButton'


function EncounterView() {
    const user = useContext(UserContext)

    useEffect(() => {

        const url = 'http://127.0.0.1:8000/current_trainer'
        fetch(url, {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(json => {
                user.setCurrentTrainer(json)
            })
    }, [])
    console.log(user.currentTrainer)

    useEffect(() => {
        const randomPokemon = Math.floor(Math.random() * 151 + 1)
        const url = 'http://127.0.0.1:8000/api/Pokemon/' + randomPokemon
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                user.setPokemon(json)
            })
    }, [])
    
    console.log(user.pokemon)


    return (
        <div className="encounter-view">
            <h1>Pokémon Encounter</h1>
            <h1>Trainer {user.currentTrainer.username}</h1>
    <h3>Exp Points: {user.currentTrainer.exp}</h3>
    <h3>Lvl: {user.currentTrainer.lvl}</h3>
    <h3>Moneyz $ {user.currentTrainer.currency}</h3>

            <img id = "pokemonImage" alt={user.pokemon.name} />
            <h3>A wild {user.pokemon.name} has appeared!</h3>
            <EncounterButton/>
            <div>

                <a href='/pokemart' style={{ color: 'yellow' }}>
                    <img src={pokemart} alt='pokemart' />
                Pokémart

                </a>
            </div>
            <div>
                <a href='/pokedex' style={{ color: 'yellow' }}>

                    <img src={pokedex} alt='pokedex' />
                Pokédex
                </a>

            </div>
        </div>

    )

};

export default EncounterView;