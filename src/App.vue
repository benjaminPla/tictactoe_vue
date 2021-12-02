<template>
  <div class='app'>
    <h1>Tic-Tac-Toe</h1>
    <turn />
    <board />
  </div>
</template>

<script>
import Turn from './components/Turn.vue';
import Board from './components/Board.vue';

export default {
  name: 'App',
  components: { Turn, Board },
};
</script>

<style scoped lang="scss">
.app {
  font-family: Avenir, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 60px 40% 0 40%;
}
</style>
