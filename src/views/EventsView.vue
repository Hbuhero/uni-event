<template>
    <div class="flex flex-col">
        <div class="bg-[hsl(240,4.8%,95.9%)] pt-12">
            <div class="place-self-center !mt-20 !pb-20 ">
                <h1 class="text-center text-4xl !p-4">All Events</h1>
                <h3 class="!p-4 text-center">Browse all upcoming events across all categories</h3>

                <div class="flex h-[4vh] mb-10 !p-4">
                    <input type="search" class="border !pl-3 pr-8 !py-4 placeholder:text-sm placeholder:font-light"
                        placeholder="Search for events...">
                    <!-- <textarea name="" id="" placeholder="Search for events..." class="border pl-4 pr-4 pb-4 pt-4"></textarea> -->
                    <div
                        class="bg-blue-500 text-white rounded-br-md rounded-tr-md border flex items-center pl-4 pr-4 pb-4 pt-4 ">
                        <v-icon icon="mdi-magnify" />
                        <a href="#" class="ml-6 ">Search</a>
                    </div>
                </div>
            </div>
        </div>

        <div class=" !p-6 max-w-7xl mx-auto !py-6 sm:!px-6 lg:!px-8 ">
            <div class="flex !mt-10 !mb-10 justify-between">
                <div @click="getAllEvents" class="mt-4 border w-[6rem] h-[2rem] rounded-full !px-2 !py-1 text-xs text-black text-center">
                    <span>All</span>
                </div>
                <div v-for="category in categories" :key="category.uuid" @click="viewCategoryEvents(category)" class="mt-4 border w-[6rem] rounded-full !px-2 !py-1 text-xs text-black text-center">
                    <span >{{ category.name }}</span>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Event v-for="event in events" :key="event.uuid" :event="event" />
            </div>

        </div>



    </div>
</template>

<script setup>
import Event from '../components/Event.vue';
import { ref, onMounted } from 'vue';
import { eventService } from '../services/eventService';
import { useRouter } from 'vue-router';
import { categoryService } from '../services/categoryService';


const router = useRouter()
const events = ref([])
const categories = ref([{}])

const getAllEvents = async () => {
    try {

        const response = await eventService.getEvents({

        })
        events.value = response.content
    } catch (error) {
        console.log(error)
    }
}

const getCategories = async () => {
    try {
        const response = await categoryService.getCategories({})

        categories.value = response.content
    } catch (error) {

    }
}

const viewCategoryEvents = async (category) => {
    // router.push(`/events/${category.category}`)
    try {
        
        
        const response = await eventService.getEventsByCategory({
            categoryUuid: category.uuid
        })

        events.value = response.data.content

        
        
    } catch (error) {

    }
}

// const goToEvent = (uuid) => {
//     router.push(`/event/${uuid}`)
// }

onMounted(() => {
    getAllEvents()
    viewCategoryEvents()
    getCategories()
})
</script>

<style lang="scss" scoped></style>