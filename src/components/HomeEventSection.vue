<template>
    <div class="w-[70vw] place-self-center mt-16">
        <div class="flex justify-between pr-2 pl-2 pb-2 pt-7 mb-4">
            <header class="text-3xl">Upcoming Events</header>
            <a href="#" class="flex items-center">
                <span class="mr-4 text-sm">View All</span>
                <v-icon icon="mdi-arrow-right" size="17px"/>
            </a>
        </div>
        <!-- <div class="flex justify-between">
            <Event class="w-1/3"/>
            <Event class="w-1/3"/>
            <Event class="w-1/3"/> 
            <Event class="w-1/3"/>
        </div> -->

        <div class="grid grid-cols-3 align-content-center">
            <Event />
            <Event />
            <Event /> 
            <Event />
        </div>
        
    </div>
</template>

<script setup>
    import Event from './Event.vue';
</script>

<style lang="scss" scoped>

</style>