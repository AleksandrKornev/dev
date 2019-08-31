<template>
  <div class="header__wrapper">
    <div 
      class="header__item"
      :class="{ active: item.route == $route.path }"
      v-for="(item, index) in items" 
      :key="index"
      @click="route(item)"
    >{{ item.name }}</div>
  </div>
</template>

<script>
import eventBus from '@/utils/eventBus.js';

export default {
  name: 'Header-e',
  data() {
    return {
      items: [
        {
          name: "Главная",
          route: '/'
        },
        {
          name: "Вкладка",
          route: '/tab'
        },
        {
          name: "Контакты",
          route: '/contacts'
        },
      ]
    }
  },
  methods: {
    route(item) {
      eventBus.$emit('route', item);
    }
  },
}
</script>