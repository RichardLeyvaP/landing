

<template>
  <v-container id="flip-list-demo" class="d-flex justify-center">
    <transition-group name="flip-list" tag="div" class="d-flex flex-column align-center">
      <v-list-item
        v-for="item in items"
        :key="item"
        class="flip-list-item"
        style="font-size: 1.5rem;"
      >
        {{ item }}
      </v-list-item>
    </transition-group>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue';
import _ from 'lodash';

export default {
  setup() {
    const items = ref(['Pasión', 2, 3, 4, 5, 6, 7, 8, 9]);

    const shuffle = () => {
      items.value = _.shuffle(items.value);
    };

    onMounted(() => {
      setInterval(shuffle, 2000); // Mezcla automáticamente cada 2 segundos
    });

    return {
      items
    };
  }
};
</script>

<style scoped>
.flip-list-item {
  transition: transform 1s;
}
.flip-list-enter-active, .flip-list-leave-active {
  transition: transform 1s;
}
.flip-list-move {
  transition: transform 1s;
}
</style>
