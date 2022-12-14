import {  useSelector } from "react-redux"
import "./SinglePoke.css"
import { useLocation } from "react-router-dom"
import {v4 as uuidv4} from "uuid"

const SinglePoke = () => {
    

    const location = useLocation()
    const gId = location.pathname.split("/")[2]
    const pokeIndex =  ("000" + gId).slice(-3)
    const pokeData = useSelector((state) => state.pokemon)




    
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
        </div>
        <ul className="ability">Abilities: {pokeData.data.abilities.map(e => <li key={uuidv4()}>{e.ability.name}</li>)}</ul>
        

        <ul className="types1">
            <p>Type:</p>
            {pokeData.data.types.map((t) => <li key={uuidv4()}> {t.type.name} </li>)}
        </ul>

        </div>
        
    </div>
  )
}

export default SinglePoke