<template>
  <section class="container">
    <Header/>
    <Content>
      <transition name="routerAnim">
        <nuxt/>
      </transition>
    </Content>
    <Footer/>
  </section>
</template>

<script>
import Header from '@/components/header.vue';
import Content from '@/components/content.vue';
import Footer from '@/components/footer.vue';

export default {
  components: {
    Header,
    Content,
    Footer
  }
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

