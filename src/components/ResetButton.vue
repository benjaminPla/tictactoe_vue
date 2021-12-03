<template>
  <button v-if='winner' @click.prevent='reset'>RESET</button>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'ResetButton',
  setup() {
    const store = useStore();
    const winner = computed(() => store.state.winner);
    const reset = () => {
      store.commit('reset');
    };
    return { winner, reset };
  },
};
</script>

<style scoped lang='scss'>
@import '../assets/variables';

button {
  border: none;
  border-radius: 10px;
  background: $main;
  margin-top: 10px;
  color: #fff;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
