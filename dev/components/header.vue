<template>
  <div class="header__wrapper">
    <div 
      class="header__item"
      v-for="(item, index) in items" 
      :key="index"
    >{{ item.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'Header-e',
  data() {
    return {
      items: [
        {
          name: "Главная"
        },
        {
          name: "Вкладка"
        },
        {
          name: "Контакты"
        },
      ]
    }
  },
}
</script>