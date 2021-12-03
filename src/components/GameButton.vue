§<template>
  <button @click.prevent='play' :class='mark === "X" ? "X" : "O"'>
    {{ mark }}
  </button>
</template>

<script>
import { useStore } from 'vuex';
import { ref, computed } from 'vue';

export default {
  name: 'GameButton',
  props: ['value'],
  setup(props) {
    const store = useStore();
    const mark = ref('');
    const winner = computed(() => store.state.winner);
    const play = () => {
      if (!winner.value && mark.value === '') {
        mark.value = store.state.currentPlayer;
        store.commit('trackPlay', { player: mark.value, value: props.value });
        store.dispatch('checkWinner');
        store.commit('incrementMoves');
      }
    };
    return { mark, play };
  },
};
</script>

<style scoped lang='scss'>
@import '../assets/variables';

button {
  height: 60px;
  border-radius: 5px;
  border: none;
  font-size: 3rem;
  font-weight: 700;
}
.X {
  color: $blue;
}
.O {
  color: $red;
}
</style>
