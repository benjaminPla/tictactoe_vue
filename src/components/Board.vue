<template>
  <div>
    <game-button v-for='(button, index) in buttons' :key='index' :value='index'/>
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
@import '../assets/variables';

div {
  border-radius: 5px;
  padding: 8px;
  background-color: $main;
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(3, 1fr);
}
</style>
