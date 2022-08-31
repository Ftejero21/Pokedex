import React, { useEffect } from 'react'
import { useState } from 'react'
import CardsPokemon from './CardsPokemon'
import InfoPokemon from './InfoPokemon'
import axios from 'axios'

const Main = () => {
    const [pokeData , setPokeData] = useState([])
    
    const [url , setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0')
    const [next,setNext] = useState()
    const [previous , setPrevious] = useState()
    const [loading , setLoading] = useState(true)
    const [pokedex , setPokedex] = useState();

    useEffect(() =>{
        pokefetch();
    },[url])


    const pokefetch = async () =>{
        setLoading(true)
        const res = await axios.get(url);
        //console.log(res.data.results)
        setNext(res.data.next);
        setPrevious(res.data.previous)
        DatosPokemon(res.data.results)
        setLoading(false);
    }

    const DatosPokemon = async (res) =>{
        res.map(async (item) =>{
            const result = await axios.get(item.url)
            setPokeData(state =>{
               state = [...state,result.data]
               
               
               state.sort((a,b) => a.id > b.id ? 1 : -1);
               return state
            })
            
        })

        
    }

    


    const siguiente = () =>{
        setPokeData([])
        setUrl(next);
        
    }


    const anterior = () =>{
        setPokeData([])
        setUrl(previous)
    }

   


    return (
        <>
            
            <div className='conteiner'>
                <div className="pokemons">
                    <CardsPokemon pokemon={pokeData}  loading = {loading} pokeinfo = {poke => setPokedex(poke)}></CardsPokemon>
                    
                </div>
                <div className="info">
                   <InfoPokemon data = {pokedex}></InfoPokemon>
                </div>
            </div>
            <div className="botones">
                <button onClick={anterior}>Previous</button>
                <button onClick={siguiente}>Next</button>
            </div>
        </>

    )
}

export default Main