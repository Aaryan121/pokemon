import { useSelector } from "react-redux"
import "./SinglePoke.css"

const SinglePoke = () => {

    const pokeData = useSelector((state) => state.pokemon)
  
    return (
    <div className="singlePoke">
        <div className="imageWrapper">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="" />
        </div>
        <div className="textWrapper">
        <div className="name">Bulbosor</div>
        <div className="desc1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, natus?
        </div>

        <div className="statContainer">
            <ul>
                <li>Height: 66</li>
                <li>Weight: 49</li>
                <li>Gender: Male</li>
                <li>Category: Flame</li>
                <li>Abilities: Blaze</li>
            </ul>
        </div>

        <div className="types1">
            fire
        </div>

        <div className="weakness">
            <ul>
                <li>Water</li>
                <li>Ground</li>
                <li>Rock</li>
            </ul>
        </div>
        </div>
        
    </div>
  )
}

export default SinglePoke