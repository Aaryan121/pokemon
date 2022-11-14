import { configureStore } from "@reduxjs/toolkit";
import pokeSlice from "./features/apiSlice"

const store = configureStore({
    reducer:{
        pokemon: pokeSlice
    }
});