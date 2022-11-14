import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    loading: false,
    data:null,
    error:'',
}

export const fetchPokemon = createAsyncThunk("pokemon/getPokemons",()=>{
    return axios.get("")
    .then((res) => res.data)
})

const pokeSlice = createSlice({
    name:'pokemon',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchPokemon.pending , (state)=>{
        state.loading = true   
        })
        builder.addCase(fetchPokemon.fulfilled, (state, action)=>{
            state.loading = false
            state.data = action.payload
            state.error = ''
        })
        builder.addCase(fetchPokemon.rejected, (state , action) =>{
            state.loading = false
            state.data =[]
            state.error = action.error.message
        })
    }
})

export default pokeSlice.reducer