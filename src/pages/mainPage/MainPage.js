import React from 'react'
import { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemon } from '../../redux/features/pokeSlice'
import { fetchedHomeData } from '../../Assets/Data/Data'
import Card from '../../Components/pokemonCard/Card'


const MainPage = () => {

    const [poke,setPoke] = useState("")
    const dispatch = useDispatch()
    const initialPoke = useSelector((state) => state.pokemon)
    const res = useSelector((state)=> state.pokemon.data) 
    

    const handelSubmit = (e) =>{
        e.preventDefault()
        dispatch(fetchPokemon(poke))
    }

    console.log(res?.name)

  return (
    <div>
        <form onSubmit={handelSubmit}>
            <input type="text" onChange={(e)=>{setPoke(e.target.value)}}/>
            <button type='submit'>Search</button>
        </form>
        {fetchedHomeData.map((data)=> 
        <Card key={data.id}  data={data} />
        )}
    </div>
  )
}

export default MainPage