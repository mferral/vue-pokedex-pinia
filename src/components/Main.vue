<template>
  <div>
    <header>
      <h1>Pokedex</h1>
    </header>
    <div class="pokedex-control">      
      <ButtonMore />
    </div>
    <Pokemons />
  </div>
</template>

<script setup>
  import Pokemons from './Pokemons.vue'
  import ButtonMore from './ButtonMore.vue'
  import { usePokemonsStore } from '../store/pokemons'
      const pokemons = usePokemonsStore()
      pokemons.morePokemons()
</script>
