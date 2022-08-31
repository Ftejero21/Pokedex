import React from 'react'
import { useState } from 'react'
const CardsPokemon = ({ pokemon, loading , pokeinfo}) => {
  //console.log(pokemon)
  
    




  return (

    <>
    
      {
        loading ? "Loading...." :
        pokemon.map((item) =>{
          return(

            <div className='card' key={item.id} onClick={() =>pokeinfo(item)}>
              <h2>{item.id}</h2>
              <img id='pokemon' src={item.sprites.front_default} alt="" />
              <h2>{item.name}</h2>
            </div>
          )
            
          
        })
      }

    
    </>

  )




}

export default CardsPokemon