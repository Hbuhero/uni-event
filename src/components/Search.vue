<template>
    <div class="!px-4 sm:!px-8 lg:!px-[16.5vw] !py-8 lg:pt-4 lg:!pb-[4vw]">
        <div class="flex flex-col items-center mt-8 lg:mt-16 w-full max-w-3xl mx-auto">
            <header class="text-2xl sm:text-3xl font-medium mb-4 sm:mb-7 text-center !px-4">
                Find Your Next Experience
            </header>

            <span class="mb-6 sm:mb-10 text-center text-sm sm:text-base !px-4 text-gray-600">
                Discover events that match your interests, from tech conferences to music festivals, workshops to
                networking opportunities.
            </span>

            <div class="flex flex-col sm:flex-row w-full max-w-xl !px-4 gap-3 sm:gap-4">
                <div class="relative flex-grow">
                    <input type="search" class="w-full border !px-4 !py-2.5 
                               placeholder:text-xs placeholder:font-light 
                               rounded-xl sm:rounded-2xl
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                               transition-all duration-200" placeholder="Search for events...">
                    
                </div>

                <div
                    class="button flex items-center justify-center">
                    <button>
                        <v-icon icon="mdi-magnify" size="18" class="hidden sm:block mr-2" />
                        <span class="sm:ml-4">Search</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
/* Add any additional custom styles here */
</style>