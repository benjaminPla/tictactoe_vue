<template>
  <div class='app'>
    <h1>Tic-Tac-Toe</h1>
    <turn />
    <board />
    <reset-button />
  </div>
</template>

<script>
import Turn from './components/Turn.vue';
import Board from './components/Board.vue';
import ResetButton from './components/ResetButton.vue';

export default {
  name: 'App',
  components: { Turn, Board, ResetButton },
};
</script>

<style scoped lang="scss">
@import './assets/variables';

.app {
  font-family: Avenir, sans-serif;
  text-align: center;
  color: $main;
  margin: 60px 40% 0 40%;
}
</style>
