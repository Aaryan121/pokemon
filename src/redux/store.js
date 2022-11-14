import { configureStore } from "@reduxjs/toolkit";
import pokeSlice from "./features/pokeSlice"

const store = configureStore({
    reducer:{
        pokemon: pokeSlice
    }
});


export default store;