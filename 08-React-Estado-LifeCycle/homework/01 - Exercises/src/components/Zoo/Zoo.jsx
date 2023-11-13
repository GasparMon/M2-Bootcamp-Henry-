import React, { useEffect } from "react";

// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */

  const [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: [],
  });

  console.log(zoo)

  const handleInputChange = (event) => {
    setZoo({ ...zoo, zooName: event.target.value });
  };


  function handleSpecies(elem){

    setZoo({...zoo, animals: zoo.allAnimals.filter((animal) => animal.specie === elem)})
  }

  function handleAllSpecies(){

    setZoo({...zoo, animals: zoo.allAnimals})
  }

  React.useEffect(() => {
    fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((data) => {
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        });
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <div>
      <label>Zoo Name:</label>
      <input value={zoo.zooName} onChange={handleInputChange}></input>
      <h1>{zoo.zooName}</h1>
      <Species species = {zoo.species} handleSpecies = {handleSpecies} handleAllSpecies = {handleAllSpecies }/>
      <Animals animals = {zoo.animals}/>
    </div>
  );
}
