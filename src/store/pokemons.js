import {
    defineStore
} from 'pinia'

export const usePokemonsStore = defineStore({
    id: 'pokemons',
    state: () => ({
        pokemons: [],
        loading: false,
    }),
    actions: {
        async morePokemons() {
            this.$state.loading = true
            const offset = Math.random() * (700 - 1) + 1
            const responseArray = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
            const responseJson = await responseArray.json()
            const pokemonsMap = responseJson.results.map(async (item) => {
                const responseItem = await fetch(item.url)
                const info = await responseItem.json()
                info.stats.forEach((stat) => {
                    stat['percent_base'] = (100 * stat.base_stat) / 200
                })
                return {
                    item,
                    info
                }
            })
            const pokemons = await Promise.all(pokemonsMap)            
            this.$state.loading = false
            this.$state.pokemons = [
                ...pokemons,
                ...this.$state.pokemons,
            ]
        },
    },
    getters: {
        getPokemons(state) {
            return state.pokemons
        },
        isLoading(state) {
            return state.loading
        },
    },
})