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
export default {
  name: 'Header',
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
      this.$router.push(item.route);
    }
  },
}
</script>