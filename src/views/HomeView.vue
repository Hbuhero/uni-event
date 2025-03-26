<template>
    <Navbar />
    <div class="w-screen h-screen flex flex-col ">
        <SlidingEventsPreview />
        <Search />
        <HomeEventSection />
    </div>
    
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import SlidingEventsPreview from '../components/SlidingEventsPreview.vue';
import Search from '../components/Search.vue';
import Event from '../components/Event.vue';
import HomeEventSection from '../components/HomeEventSection.vue';

</script>

<style lang="scss" scoped>

</style>