<template>
    <button @click="pokemons.morePokemons">Mas Pokemones !! </button>
</template>

<script setup>
    import {
        usePokemonsStore
    } from '../store/pokemons'
    const pokemons = usePokemonsStore()
</script>