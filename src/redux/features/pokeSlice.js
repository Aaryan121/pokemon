import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    loading: false,
    poke:"clefairy",
    data:null,
    id:null,
    error:'',
}

export const fetchPokemon = createAsyncThunk("pokemon/getPokemons",async(poke)=>{
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}/`)
    .then((res) => res.data)
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
            state.poke = action.payload.poke
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