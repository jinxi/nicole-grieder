<script setup>
import { RouterView } from 'vue-router'
import NavHeader from './components/NavHeader.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <NavHeader/>
  <RouterView />
  <Footer />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap");

* {
  font-family: "Rubik", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
