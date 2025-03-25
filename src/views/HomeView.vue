<template>
    <Navbar />
    <div class="w-screen flex-col flex items-center ">
        
        <SlidingEventsPreview />
        <Search />
    </div>
    
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import SlidingEventsPreview from '../components/SlidingEventsPreview.vue';
import Search from '../components/Search.vue';

</script>

<style lang="scss" scoped>

</style>