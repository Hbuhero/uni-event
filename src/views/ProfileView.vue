<template>
  <div class="flex min-h-screen">
    <Navbar />

    <div class="flex-2 !p-4">
      <RouterView />
    </div>
    
  </div>
</template>



<script setup>
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';

const selectedCategories = ref(['Music', 'Technology', 'Sports', 'Food & Drink']);

const removeCategory = (category) => {
  selectedCategories.value = selectedCategories.value.filter(c => c !== category);
}

const isEnabled = ref(true)

</script>

