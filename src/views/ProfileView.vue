<template>
  <div class="flex min-h-screen">
    <Navbar />

    <div class="flex-2 !p-4">
      <RouterView />
    </div>
    
  </div>
</template>



<script setup>
import Navbar from '../components/Navbar.vue';

</script>

