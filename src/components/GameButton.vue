<template>
  <button @click.prevent='play'>{{ mark }}</button>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
  name: 'GameButton',
  props: ['value'],
  setup() {
    const store = useStore();
    const mark = ref('');
    const play = () => {
      if (mark.value === '') {
        mark.value = store.state.currentPlayer;
        store.commit('setPlayer');
      }
    };
    return { mark, play };
  },
};
</script>

<style scoped lang='scss'>
button {
  height: 60px;
  border-radius: 5px;
}
</style>
