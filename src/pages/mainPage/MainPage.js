import React from 'react'
import { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemon } from '../../redux/features/pokeSlice'
import { fetchedHomeData } from '../../Assets/Data/Data'
import Card from '../../Components/pokemonCard/Card'
import "./MainPage.css"
import { BiSearch } from 'react-icons/bi';
import { Navigate, useNavigate } from 'react-router-dom'


const MainPage = () => {

    const [poke,setPoke] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const initialPoke = useSelector((state) => state.pokemon)
    //const res = useSelector( (state)=> state.pokemon) 
    const sres = useSelector( (state)=> state.pokemon)
    

    const handelSubmit =(e) =>{
        e.preventDefault()
        dispatch( fetchPokemon(poke))
        .then((res) => {
            console.log(res)
            navigate(`/poke/${res.payload.id}`)
        })  
    }
    

    
    

  return (
    <div className='mainContainer'>
        <div className="formContainer">
        <form className='form' onSubmit={handelSubmit}>
            <input placeholder='Enter Pokemon Name...' className='inputBox' type="text" onChange={(e)=>{setPoke(e.target.value)}}/>
            <button className='btn' type='submit'>
                    <BiSearch />
            </button>
        </form>
        </div>
        <div className="cardContainer">
            
        {fetchedHomeData.map((data)=> 
        <Card key={data.id}  data={data} />
        )}
        </div>
    </div>
  )
}

export default MainPage