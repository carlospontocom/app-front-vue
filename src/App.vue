<script setup>
import AppHeader from '../src/components/AppHeader.vue';
import Footer from '../src/components/Footer.vue';
</script>
<template>
  <div>
    <AppHeader />
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss" src="./styles/global.scss"></style>
