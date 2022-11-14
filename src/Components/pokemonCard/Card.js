import React from 'react'
import "./Card.css"

const Card = ({data}) => {
    const pokeIndex =  ("000" + data.id + 1).slice(-1)
    console.log(pokeIndex)
  return (

    <div className='container'>
        <img className='pokeImg' src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="" />
        <div className='pokeId'>{data.id}</div>
        <div className='title'>{data.name}</div>
        <div className="types">
            <div className="type">Grass</div>
            <div className="type">Dragon</div>
        </div>
    </div>
  )
}

export default Card