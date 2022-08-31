import React from 'react'

const InfoPokemon = ({ data }) => {
  console.log(data)
  return(
    <div>
      {
        (!data) ? "":(
          <div key={data.id}>
            <h1>{data.name}</h1>
            <img src={data.sprites.other.dream_world.front_default} alt="" />
            <div className='habilidades'>
              {
                data.abilities.map(abilitie =>{
                  return <h3>{abilitie.ability.name}</h3>
                  
                })
              }
            </div>
            <div>
              <h3>Height: {data.height}</h3>
              <h3>weight: {data.weight}</h3>
            </div>
            <div className="stats">
            {
                data.stats.map(poke =>{
                  return(
                    <>
                    
                    <h3>{poke.stat.name} : {poke.base_stat}</h3>
                  
                    
                    </>
                  )
                 
                })
              }
            </div>
          
          </div>
        )
      }



    </div>




  )
  
    





  



}

export default InfoPokemon