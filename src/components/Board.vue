<template>
  <div>
    <game-button />
    <game-button />
    <game-button />
    <game-button />
    <game-button />
    <game-button />
    <game-button />
    <game-button />
    <game-button />
  </div>
</template>

<script>
import GameButton from './GameButton.vue';

export default {
  name: 'Board',
  components: { GameButton },
  setup() {
    const buttons = 9;
    return { buttons };
  },
};
</script>

<style scoped lang='scss'>
div {
  border-radius: 5px;
  padding: 5px;
  background-color: #2c3e50;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
}
</style>
