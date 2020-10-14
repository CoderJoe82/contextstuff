import React, { useContext, useEffect } from "react";
import { UserContext } from "../Context/Context";
import $ from "jquery";
import "./EncounterButtons.css";

const fetchUrl = "http://127.0.0.1:8000/api/Pokemon";

function EncounterButtons() {
    const user = useContext(UserContext);

  function handleEncounter() {
    fetch(fetchUrl)
      .then((r) => r.json())
      .then((data) => {
        document.getElementById("encounterImage").src = Object.values(data)[
          Math.floor(Math.random() * Object.values(data).length)
        ].front_normal_image;
      });
    $("#encounterButton").hide();
    $("#catchThatPokemonButton").show();
  }

  function handleCatchAttempt() {

    $("#catchThatPokemonButton").hide();
    $("#encounterButton").show();
    console.log(user.currentTrainer)
    user.currentTrainer.poke_ball -= 1
    console.log(user.currentTrainer)
  }

  return (
    <React.Fragment>
      <div id="encounterButtonSpot">
        <button id="encounterButton" onClick={handleEncounter}>
          Search for a pokemon!
        </button>
        <button id="catchThatPokemonButton" onClick={handleCatchAttempt}>
          Catch It!!!!
        </button>
      </div>
    </React.Fragment>
  );
}

export default EncounterButtons;
