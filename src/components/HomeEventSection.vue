<template>
    <div class="min-h-[30vh] bg-white !pb-8">
    <main class="!p-6 max-w-7xl mx-auto !py-6 sm:!px-6 lg:!px-8 ">
    <!-- <div class=" !px-[16.5vw] border !pb-[4vw] bg-white"> -->
        <div class="flex justify-between pr-2 pl-2 pb-7 !pt-[5vw] mb-4">
            <header class="text-4xl font-medium">Upcoming Events</header>
            <a href="/events" class="flex items-center link">
                <span class="mr-4 text-sm font-medium">View All</span>
                <v-icon icon="mdi-arrow-right" size="17px"/>
            </a>
        </div>
        

        <Event />
        
            
        
    <!-- </div> -->
    </main>
    </div>
</template>

<script setup>
    import Event from './Event.vue';
</script>

<style lang="scss" scoped>

</style>