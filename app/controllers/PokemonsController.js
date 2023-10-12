import { AppState } from "../AppState.js"
import { pokemonsService } from "../services/PokemonsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawPokemon() {
    const pokemon = AppState.pokemon
    let content = ''
    pokemon.forEach(pokemon => content += ` <div class="text-center mb-2">
    <button onclick="app.PokemonsController.getPokemonIndex('${pokemon.url}')"
      class="btn pokemonButton w-75 rounded">${pokemon.name}</button>
  </div>
    `)

    setHTML('pokemon', content)
}

function _drawActivePokemon() {
    setHTML('activePokemon', AppState.activePokemon?.activePokemonTemplate)
}



export class PokemonsController {
    constructor() {
        // Pop.success("pokemon controller!")
        this.getPokemons()

        AppState.on('pokemon', _drawPokemon)
        AppState.on('activePokemon', _drawActivePokemon)

    }
    async getPokemons() {
        try {
            await pokemonsService.getPokemons()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    async getPokemonIndex(pokemonUrl) {
        try {
            // console.log('index?', pokemonUrl);
            await pokemonsService.getPokemonIndex(pokemonUrl)

        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}