<template>
  <div class="footer__wrapper">
    <div 
      class="footer__side left"
      :class="isHover ? 'active' : ''"
      @mouseover="hoverElements"
      @mouseleave="leaveElements"
    >
      <div 
        class="footer__side__content"
      >
        <span>ВК</span>
        <span>ТГ</span>
        <span>ВК</span>
      </div>
    </div>
    <div 
      class="footer__side right"
      :class="isHover ? 'active' : ''"
      @mouseover="hoverElements"
      @mouseleave="leaveElements"
    >
      <div 
        class="footer__side__content"
      >
        <span>Адрес</span>
        <span>Телефон</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      isHover: null
    }
  },
  methods: {
    hoverElements() {
      this.isHover = true;
    },
    leaveElements() {
      this.isHover = false;
    }
  },
}
</script>