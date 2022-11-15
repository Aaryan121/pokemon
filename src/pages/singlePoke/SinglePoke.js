import { useDispatch, useSelector } from "react-redux"
import "./SinglePoke.css"
import { useLocation } from "react-router-dom"
import { fetchPokemon } from '../../redux/features/pokeSlice'
import { useEffect } from "react"
import { useState } from "react"

const SinglePoke = () => {
    

    const location = useLocation()
    const gId = location.pathname.split("/")[2]
    const pokeIndex =  ("000" + gId).slice(-3)
    const pokeData = useSelector((state) => state.pokemon)
    const [data , setData] = useState(pokeData);
    const dispatch = useDispatch()
    useEffect(()=>{
        if(pokeData){
            setData(pokeData)
        }

    },[pokeData])


    console.log(pokeData)

    
    //console.log(res.id , gId)
    return (
    <div className="singlePoke">
        <div className="imageWrapper">
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeIndex}.png`} alt="" />
        </div>
        <div className="textWrapper">
        <div className="name">{pokeData.poke}</div>
        <div className="desc1">
            {pokeData.data.desc}
        </div>

        <div className="statContainer">
            <ul>
                <li>Height: {pokeData.data.height}</li>
                <li>Weight: {pokeData.data.weight}</li>
                <li>Category: {pokeData.data.types[0].type.name}</li>
            
            </ul>
                <div>Abilities: {pokeData.data.abilities.map(e => <li>{e.ability.name}</li>)}</div>
        </div>

        <div className="types1">
            {pokeData.data.types.map((t) => <li> {t.type.name} </li>)}
        </div>

        </div>
        
    </div>
  )
}

export default SinglePoke