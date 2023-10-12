export class Pokemon {
    constructor(data) {
        this.id = data.id || null
        this.name = data.name
        this.nickName = data.nickName
        this.imgUrl = data.sprites.front_shiny
        this.weight = data.weight
        this.height = data.height
        this.creatorId = data.creatorId
        this.index = data.game_indices
        this.url = data.url
    }

    get activePokemonTemplate() {
        return `
        <div class="col-md-9 p-4 order 1 order-md-2 text-center text-dark">
        <h1>${this.name}</h1>
        <img class="img-fluid" src="${this.imgUrl}"
          alt="">
        <div class="pokemonButton">
          <p>${this.height}ft and ${this.weight}lbs</p>
          <p>Hello</p>
        </div>
      </div>
`
    }

}



const pokeData = {

}