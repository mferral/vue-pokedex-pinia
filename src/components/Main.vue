<template>
  <div>
    <header>
      <h1>Pokedex</h1>
    </header>
    <div class="pokedex-control">      
      <ButtonMore />
    </div>
    <div style="text-align: center;" v-show="pokemons.isLoading">
      <img src="https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!c1024wm0/compress/true/progressive/true/format/webp/fw/1024" width="150">
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
