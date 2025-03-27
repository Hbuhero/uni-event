<template>
    <div class="flex flex-col !px-[16.5vw]">
        <div class="place-self-center !mt-20 !pb-20 border-b">
            <h1 class="text-center text-6xl !p-4">All Events</h1>
            <h3 class="!p-4 text-center">Browse all upcoming events across all categories</h3>

            <div class="flex h-[4vh] mb-10 !p-4">
                <input type="search" class="border !px-7 !py-4 placeholder:text-xs placeholder:font-light" placeholder="Search for events...">
                <!-- <textarea name="" id="" placeholder="Search for events..." class="border pl-4 pr-4 pb-4 pt-4"></textarea> -->
                <div class="bg-blue-500 text-white rounded-br-md rounded-tr-md border flex items-center pl-4 pr-4 pb-4 pt-4 ">
                    <v-icon icon="mdi-magnify" />
                    <a href="#" class="ml-6 ">Search</a>
                </div>
            </div>
        </div>

        <div class="flex !mt-10 !mb-10">
            
                <div class="mt-4 border w-[6rem] rounded-full !px-2 !py-1 bg-blue-300 text-xs text-black text-center">
                    <span>Entertainment</span>
                </div>

                <div class="mt-4 ml-4 border w-[6rem] rounded-full !px-2 !py-1 bg-blue-300 text-xs text-black text-center">
                    <span>Entertainment</span>
                </div>

                <div class="mt-4 ml-4 border w-[6rem] rounded-full !px-2 !py-1 bg-blue-300 text-xs text-black text-center">
                    <span>Entertainment</span>
                </div>

                <div class="mt-4 ml-4 border w-[6rem] rounded-full !px-2 !py-1 bg-blue-300 text-xs text-black text-center">
                    <span>Entertainment</span>
                </div>

                <div class="mt-4 ml-4 border w-[6rem] rounded-full !px-2 !py-1 bg-blue-300 text-xs text-black text-center">
                    <span>Entertainment</span>
                </div>

                <div class="mt-4 ml-4 border w-[6rem] rounded-full !px-2 !py-1 bg-blue-300 text-xs text-black text-center">
                    <span>Entertainment</span>
                </div>

                
            
        </div>
        
        <Event />
        
        
    </div>
</template>

<script setup>
    import Event from '../components/Event.vue';

    const nums = 4
</script>

<style lang="scss" scoped>

</style>