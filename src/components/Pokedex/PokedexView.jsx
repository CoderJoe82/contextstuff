import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from "../Context/Context";
import { Card } from 'react-bootstrap';
import './PokedexView.css';


function PokedexView() {
    const user = useContext(UserContext)
    const [capturedPokemon, setCapturedPokemon] = useState([])
    const [pokemonData, setPokemonData] = useState([])
    const current_trainer = user.currentTrainer.id

    useEffect(() => {
        const url = "http://127.0.0.1:8000/current_trainer";
        fetch(url, {
            headers: {
                Authorization: `JWT ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((response) => {
                user.setCurrentTrainer(response);
            });
    }, []);

    useEffect(() => {
        const url = "http://127.0.0.1:8000/api/CaughtPokemon/"
        fetch(url)
            .then((res) => res.json())
            .then((response) => {
                const pokemonOwned = response.map(({ owner, pokemon, date_caught }) => {
                    return { owner, pokemon, date_caught }
                })
                console.log(pokemonOwned)
                const newArr = []
                for (let i = 0; i < pokemonOwned.length; i++) {
                    console.log(pokemonOwned[i].owner, 'loop')
                    console.log(current_trainer, 'trainer')
                    if (pokemonOwned[i].owner === current_trainer) {
                        newArr.push(pokemonOwned[i])
                    }
                }
                console.log(newArr, 'newarr')
                setCapturedPokemon(newArr)
            })
    }, [current_trainer])

    useEffect(() => {
        const newArr = []
        const url = "http://127.0.0.1:8000/api/Pokemon/"
        for (let i = 0; i < capturedPokemon.length; i++) {
            fetch(url + capturedPokemon[i].pokemon)
                .then((res) => res.json())
                .then((response) => {
                    newArr.push(response)
                })
        }
        console.log(newArr, 'fetchy fetch')
        setPokemonData(newArr)
    }, [capturedPokemon])

    console.log(pokemonData, 'pokemon dataatata')


    return (
        <div className='pokedex-view'>
            <h1>Pokemon Pokédex</h1>
            <a href='/encounter' style={{ color: 'yellow' }}> Back home</a>
        </div>

    )

};

export default PokedexView;