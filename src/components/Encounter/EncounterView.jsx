import React, { useState, useEffect, useContext } from "react";
import "./EncounterView.css";
import pokemart from "../../img/pokemart.png";
import pokedex from "../../img/pokedexsmol.png";
import EncounterButtons from '../EncounterButtons/EncounterButtons'
import EncounterWindow from '../EncounterWindow/EncounterWindow'
import { UserContext } from '../Context/Context'

function EncounterView() {
  const user = useContext(UserContext)
  // const [currentTrainer, setCurrentTrainer] = useState([]);
  useEffect(() => {
    const url = "http://127.0.0.1:8000/current_trainer";
    fetch(url, {
      headers: {
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        user.setCurrentTrainer(json);
      });
  }, []);
  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/Pokemon";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        user.setPokemon(json)
      });
  }, []);

  let trainerData = Object.values(user.currentTrainer).map((name) => name);

  return (
    <React.Fragment>
      <div className="encounter-view">
        <h1>Pokemon Encounter</h1>
        <h1>{trainerData[0]}</h1>
        <div>
          <a href="/pokemart" style={{ color: "yellow" }}>
            <img src={pokemart} alt="pokemart" />
            Pokémart
          </a>
        </div>
        <div>
          <a href="/pokedex" style={{ color: "yellow" }}>
            <img src={pokedex} alt="pokedex" />
            Pokédex
          </a>
        </div>
      </div>
      <EncounterWindow/>
      <EncounterButtons/>
    </React.Fragment>
  );
}

export default EncounterView;
