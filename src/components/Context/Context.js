import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [trainerPokedex, updateTrainerPokedex] = useState({});
  const [trainerPokeballs, updateTrainerPokeballs] = useState({});
  const [pokeball, updatePokeball] = useState({});
  const [user, updateUser] = useState({});
  const [currentTrainer, setCurrentTrainer] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [currentBall, setCurrentBall] = useState()


  return (
    <UserContext.Provider
      value={{
        trainerPokedex,
        updateTrainerPokedex,
        trainerPokeballs,
        updateTrainerPokeballs,
        pokeball,
        updatePokeball,
        user,
        updateUser,
        currentTrainer,
        setCurrentTrainer,
        pokemon,
        setPokemon,
        currentBall,
        setCurrentBall
      }}
    >
      {children}
    </UserContext.Provider>
  );
};