import React, { useState, useEffect, useContext } from 'react';
// import { useFetchUrl } from '../hooks';
import './PokedexView.css';
import { UserContext } from '../Context/Context'

function PokedexView() {

    const user = useContext(UserContext)

    const handlePokedex = () => {
        console.log(user.currentTrainer)
    }


    return (
        <React.Fragment>
        <div className='pokedex-view'>
            <h1>Pokemon Pokédex</h1>
            <a href='/encounter' style={{color: 'yellow'}}> Back home</a>
        </div>
        <div className = 'pokedex-view' id = "dempokemon">
            <h1 id = "pokemonList">Pokemon!</h1>
            {/* {handlePokedex()} */}
            <button onClick = {handlePokedex}>click me!</button>
        </div>
        </React.Fragment>
    )

};

export default PokedexView;