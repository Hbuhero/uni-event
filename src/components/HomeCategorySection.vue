<template>
    <div class="flex flex-col items-center border bg-[hsl(240,4.8%,95.9%)] py-8 md:pt-[4vw] md:pb-[1vw]">
        <!-- Header Section -->
        <div class="mb-7 px-4 md:px-0">
            <h2 class="text-2xl md:text-4xl mb-3 md:mb-5 text-center">Browse By Category</h2>
            <p class="text-center text-sm md:text-base">Find events tailored to your interests and passions</p>
        </div>

        <!-- Categories Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-8 w-full max-w-7xl">
            <!-- Category Card - repeated for each category -->
            <div v-for="(category, index) in categories" :key="index"
                class="border bg-white rounded-lg flex flex-col items-center !p-4 md:p-5 hover:shadow-lg transition-shadow">
                <!-- Icon Container -->
                <div class="w-12 h-12 md:w-16 md:h-16 bg-blue-300 rounded-full relative">
                    <div
                        class="w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    </div>
                </div>

                <!-- Category Info -->
                <div class="flex flex-col mt-4 md:mt-5 items-center">
                    <span class="font-medium text-sm md:text-base text-center">{{ category.name }}</span>
                    <span class="text-xs text-gray-600">{{ category.eventCount }} Events</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Call to Action Section -->
    <div class="!bg-blue-100 !py-8 md:!py-10">
        <div class="flex flex-col items-center !px-4 md:!px-12 max-w-4xl mx-auto text-center">
            <h1 class="text-2xl md:text-4xl mb-4 md:mb-5 font-semibold">Ready to Host Your Own Event?</h1>
            <h3 class="text-sm md:text-base mb-6 md:mb-8 text-gray-700">
                Create and manage your events with our powerful platform. Reach a wider audience and provide an
                exceptional experience for your attendees.
            </h3>

            <div class="button">
                <button @click="createEvent">
                    Create an Event
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const createEvent = () =>{
    router.push('/add-event')
}

// Sample categories data - replace with your actual data
const categories = ref([
    { name: 'Art & Culture', eventCount: 1 },
    { name: 'Music', eventCount: 3 },
    { name: 'Technology', eventCount: 2 },
    { name: 'Sports', eventCount: 4 },
    { name: 'Food & Drink', eventCount: 2 },
    { name: 'Business', eventCount: 1 }
])
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>