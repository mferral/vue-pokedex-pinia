<script setup>
    import { usePokemonsStore } from '../store/pokemons'
    const pokemons = usePokemonsStore()
</script>
<template>
    <section class="pokedex">        
        <div class="pokemon" v-for="(pokemon, index) in pokemons.getPokemons" :key="index" :data-name="pokemon.item.name" data-type="fire" :tabindex="index">
            <figure class="pokemon-figure">
                <img 
                    :src="pokemon.info.sprites.other['official-artwork'].front_default"                
                    :alt="pokemon.item.name"
                    width="215"
                >
            </figure>
            <section class="pokemon-description">
                <span class="pokemon-id">#{{ pokemon.info.id }}</span>
                <h1 class="pokemon-name">{{ pokemon.item.name }}</h1>                
                <div class="pokemon-types" ><span class="pokemon-type" v-for="(_type, index) in pokemon.info.types" :key="index">{{ _type.type.name}}</span></div>
            </section>
            <section class="pokemon-stats">
                <div class="stat-row" v-for="(stat, index) in pokemon.info.stats" :key="index">
                    <div>{{ stat.stat.name }}</div>
                    <div class="stat-bar">
                        <div class="stat-bar-bg" :style="{width: `${stat.percent_base}%`}">{{ stat.base_stat }}</div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<style>
.pokedex {
    padding: 1rem;
    display: grid;
    grid-gap: 3rem 2rem;
    grid-template-columns: repeat(auto-fill, 250px);
    justify-content: center;
}

.pokemon {
    background-color: #f2f2f2;
    overflow: hidden;
    position: relative;
}

.pokemon:hover {
    animation: pokemon-up .3s;
    cursor: pointer;
}

.pokemon:focus {
    outline: none;
}

.pokemon .pokemon-figure {
    text-align: center;
}

.pokemon .pokemon-figure img {
    position: relative;
    z-index: 1;
    transition: transform .3s;
}

.pokemon:focus .pokemon-figure img {
    transform: scale(.6) translate(100px, -80px);
}

.pokemon .pokemon-description {
    background-color: #fff;
    margin: 0 1rem 1rem;
    padding: .5rem;
    transition: transform .3s;
}

.pokemon:focus .pokemon-description {
    transform: translateY(-160px);
}

.pokemon .pokemon-id {
    color: #919191;
}

.pokemon .pokemon-name {
    margin: 1rem 0 .6rem;
    font-size: 1.5rem;
    font-weight: normal;
}

.pokemon .pokemon-types {
    display: flex;
}

.pokemon .pokemon-type {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    margin-right: .5rem;
    padding: .1rem .3rem;
    font-size: .8rem;
}

.pokemon .pokemon-stats {
    position: absolute;
    width: calc(100% - 2rem);
    margin: 0 1rem 1rem;
    padding: .5rem;
    font-size: .8rem;
    background-color: #fff;
    transform: translatey(300px);
    transition: all .3s;
}

.pokemon:focus .pokemon-stats {
    transform: translatey(-180px);
}

.pokemon .pokemon-stats .stat-row {
    display: grid;
    grid-template-columns: 2fr 3fr;
    margin: .5rem 0;
}

.pokemon .pokemon-stats .stat-bar {
    background-color: #a2a2a2;
}

.pokemon .pokemon-stats .stat-bar-bg {
    background-color: #212121;
    color: #fff;
    padding: 0 .2rem;
}
.pokemon .pokemon-types {
    display: flex;
}

.pokemon .pokemon-type {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    margin-right: .5rem;
    padding: .1rem .3rem;
    font-size: .8rem;
}
</style>