import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { PokemonApi } from "./AxiosService.js"



class PokemonsService {
    async getPokemonIndex(pokemonUrl) {
        // console.log('index?', pokemonUrl);
        const res = await PokemonApi.get(`/pokemon/`)
        console.log('GOT POKEMON', res.data);
        // const newPokemon = new Pokemon(res.data)
        // AppState.activePokemon = newPokemon
    }
    async getPokemons() {
        const res = await PokemonApi.get('pokemon')
        // console.log('got the pokemon', res.data);
        AppState.pokemon = res.data.results
        // console.log('got the pokemon', res.data.results);
    }

}


export const pokemonsService = new PokemonsService