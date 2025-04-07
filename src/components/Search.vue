<template>
    <div class=" !px-[16.5vw] pt-4 !pb-[4vw]">
        <div class=" flex flex-col items-center mt-16  w-[30vw] place-self-center">
            <header class="text-3xl font-medium mb-7 text-center">Find Your Next Experience</header>
            <span class="mb-10 text-center">Discover events that match your interests, from tech conferences to music festivals, workshops to
                networking opportunities.</span>

            <div class="flex h-[4vh]">
                <input type="search" class="border pl-4 pr-4 pb-4 pt-4 placeholder:text-xs placeholder:font-light" placeholder="Search for events...">
                <!-- <textarea name="" id="" placeholder="Search for events..." class="border pl-4 pr-4 pb-4 pt-4"></textarea> -->
                <div class="bg-blue-500 text-white rounded-br-md rounded-tr-md border flex items-center pl-4 pr-4 pb-4 pt-4 ">
                    <v-icon icon="mdi-magnify" />
                    <a href="#" class="ml-6 ">Search</a>
                </div>
            </div>
        </div>
    </div>
   
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>