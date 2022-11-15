import React from 'react'
import { Link } from 'react-router-dom';
import "./Card.css"
import { v4 as uuidv4 } from 'uuid';
import {  useNavigate } from 'react-router-dom'
import { fetchPokemon } from '../../redux/features/pokeSlice'
import { useDispatch } from 'react-redux';


const Card = ({data}) => {
    const pokeIndex =  ("000" + data.id).slice(-3)
    const colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'
    };
    
    const main_types = Object.keys(colors);
    const pokeTypes = data.types.map(el => el.type.name);
    const type = main_types.find(type => pokeTypes.indexOf(type) > -1)
    const color = colors[type]    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handelClick = (e) =>{
        dispatch( fetchPokemon(data.id))
        .then((res) => {
            if(!res.error?.message ){
                navigate(`/poke/${res.payload.id}`)
            }
        }) 
    }

  return (
        <div onClick={handelClick} style={{backgroundColor: `${color}`}} className='container' >
        <img className='pokeImg' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeIndex}.png`} alt="" />
        <div className="desc">
            <div className='pokeId'>{`#${pokeIndex}`}</div>
            <div className='title'>{data.name}</div>
            <div className="types">
                {data.types.map((el)=>
                <div key={uuidv4()} style={{backgroundColor: `${colors[el. type.name]}`}}  className="type">{el.type.name}</div>)
                }
            </div>
        </div>
    </div>
    
  )
}

export default Card