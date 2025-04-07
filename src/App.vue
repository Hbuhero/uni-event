<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="bg-[#f9fafb]">
    <Header />

      <RouterView />

    <Footer />

  </div>



</template>
