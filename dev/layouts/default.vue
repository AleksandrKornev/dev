<template>
  <section class="container">
    <Header/>
    <Content>
      <transition name="routerAnim">
        <nuxt 
          ref="current"
        />
      </transition>
    </Content>
    <Footer/>
  </section>
</template>

<script>
import eventBus from '@/utils/eventBus.js';

import Header from '@/components/header.vue';
import Content from '@/components/content.vue';
import Footer from '@/components/footer.vue';

export default {
  components: {
    Header,
    Content,
    Footer
  },
  watch: {
    '$route.path'() {
      
      setTimeout(() => {
        this.$refs.current.$el.classList.add('content__in');

        setTimeout(() => {
          this.$refs.current.$el.style.opacity = 1;
          this.$refs.current.$el.classList.remove('content__in');
        }, 1000);
      }, 100);
    }
  },
  created() {
    eventBus.$on('route', this.route);
  },
  beforeDestroy() {
    eventBus.$off('route', this.route);
  },
  methods: {
    route(item) {
      this.$refs.current.$el.classList.add('content__out');
      setTimeout(() => {
        this.$router.push(item.route);
        this.$refs.current.$el.classList.remove('content__out');
      }, 1000);
    }
  },
}
</script>

<style>
html {
  font-family: sans-serif;
}

html, body {
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  color: #fff;
}

</style>

