<template>
  <div class='app' :class='winner && "shake"'>
    <h1>Tic-Tac-Toe</h1>
    <turn />
    <board />
    <reset-button />
    <footer-bar />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import Turn from './components/Turn.vue';
import Board from './components/Board.vue';
import ResetButton from './components/ResetButton.vue';
import FooterBar from './components/FooterBar.vue';

export default {
  name: 'App',
  // eslint-disable-next-line
  components: { Turn, Board, ResetButton, FooterBar },
  setup() {
    const store = useStore();
    const winner = computed(() => store.state.winner);
    return { winner };
  },
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
