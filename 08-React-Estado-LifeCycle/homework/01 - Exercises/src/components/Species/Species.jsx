import React from "react";
// import styledSpecies from "./Species.module.css";

export default function Species({ species, handleSpecies, handleAllSpecies }) {

  return (
    <div>
      <h2>Species</h2>
      {species.map((el, ind) => (
        <button key={ind} onClick={()=> handleSpecies(el)} >{el}</button>
      ))}
      <button key ="4" onClick={()=>handleAllSpecies()}>All Animals</button>
    </div>
  );
}
