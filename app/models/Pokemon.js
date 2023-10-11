export class Pokemon {
    constructor(data) {
        this.id = data.id || null
        this.name = data.name
        this.nickName = data.nickName
        this.imgUrl = data.imgUrl
        this.weight = data.weight
        this.height = data.height
        this.creatorId = data.creatorId
        this.index = data.game_indices
        this.url = data.url
    }



}



const pokeData = {

}