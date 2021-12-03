<template>
  <p v-if='!winner'>It is
    <span
    :class='currentPlayer === "X" ? "X" : "O"'>
      {{ currentPlayer }}
    </span>'s turn!
  </p>
  <p v-else :class='winner[0] === "X" ? "X" : "O"'>{{ winner }}</p>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'Turn',
  setup() {
    const store = useStore();
    const currentPlayer = computed(() => store.state.currentPlayer);
    const winner = computed(() => store.state.winner);
    return { currentPlayer, winner };
  },
};
</script>

<style scoped lang='scss'>
@import '../assets/variables';

p {
  margin-bottom: 20px;
  span {
    font-weight: 700;
  }
}
.X {
  color: $blue;
}
.O {
  color: $red;
}
</style>
