

<template>
  <v-container id="credit-list-demo" class="d-flex justify-center">
    <transition-group name="credit-list" tag="div" class="credit-list">
      <v-list-item
        v-for="item in items"
        :key="item"
        class="credit-list-item"
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
    const items = ref([1, 2, 3, 4, 5, 6, 7, 8, 9]);

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
#credit-list-demo {
  overflow: hidden;
  height: 200px; /* Ajusta la altura al espacio que quieras para los créditos */
  background-color: #FF8C00; /* Fondo naranja */
}

.credit-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: scrollUp 10s linear infinite; /* Animación continua hacia arriba */
}

.credit-list-item {
  color: white;
  transition: transform 1s;
}

@keyframes scrollUp {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>
