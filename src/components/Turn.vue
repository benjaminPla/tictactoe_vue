<template>
  <span>I'ts {{ currentPlayer }}'s turn!</span>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'Turn',
  setup() {
    const store = useStore();
    const currentPlayer = computed(() => store.state.currentPlayer);
    return { currentPlayer };
  },
};
</script>
