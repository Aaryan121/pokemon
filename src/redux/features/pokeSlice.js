import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    loading: "idle",
    poke:"",
    data:null,
    id:null,
    error:'',
}

export const fetchPokemon = createAsyncThunk("pokemon/getPokemons",
async(poke)=>{
    try{
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}/`)
        const descPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${res.data.id}`)
        res.data.desc = descPoke.data.flavor_text_entries[0].flavor_text
        if(!res.ok){
            return res.data
        }
    }catch(err){
        throw err.message
    }
})

const pokeSlice = createSlice({
    name:'pokemon',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(fetchPokemon.pending , (state)=>{
        state.loading = true  
        })
        builder.addCase(fetchPokemon.fulfilled, (state, action)=>{
            state.loading = false
            state.poke = action.payload.name
            state.data = action.payload
            state.id = action.payload.id
            state.error = ''
        })
        builder.addCase(fetchPokemon.rejected, (state , action) =>{
            state.loading = false
            state.data =null
            state.error = action.error.message
            console.log(state.error)
        })
    }
})

export default pokeSlice.reducer