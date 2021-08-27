<template>
  <Main />
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
*{
  margin: 0;
    box-sizing: border-box;
}
header {
    background-color: #212121;
    color: #fff;
    padding: .5rem 1rem;
    text-align: center;
}
.pokedex-control {
    margin: 2rem 0 3rem;
    display: grid;
    grid-template-columns: 17rem;
    grid-gap: .5rem;
    justify-content: center;
}
</style>
