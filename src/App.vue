<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="bg-primary-foreground">
    <!-- <Header /> -->

      <RouterView />

    <Footer />

  </div>



</template>
