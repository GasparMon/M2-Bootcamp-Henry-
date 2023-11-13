import React from "react";
// import styledAnimals from './Animals.module.css'

export default function Animals(props) {
  //console.log(props.animals);

  const animals = props.animals;
  return (
    <div>
      {animals.map((elemento, index) => (
        <div key={index}>
          <h5 key={index}>{elemento.name}</h5>
          <img
            src={elemento.image}
            alt={elemento.name}
            style={{ width: "300px" }}
          />
          <br></br>
          <span>{elemento.specie}</span>
        </div>
      ))}
    </div>
  );
}
