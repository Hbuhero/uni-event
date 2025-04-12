<template>

    <div class="border rounded-lg relative w-full">
        <div  @click="goToEvent(event.uuid)">
            <img src="../assets/img/unievent-high-resolution-logo.png" alt="" class="!mb-7 w-full h-52 object-cover">

        <div class="!px-4 sm:!px-5 mb-3">
            <h2 class="text-xl sm:text-2xl mb-4">{{ event.title }}</h2>
            <p class="text-sm text-gray-500 mb-7">{{ event.about }}</p>

            <div class="flex items-center pb-1 pt-1">
                <v-icon icon="mdi-calendar-blank-outline" class="icon" size="1.2rem" />
                <span class="text-sm text-gray-500 break-words">{{ event.startingDate }}</span>
            </div>

            <div class="flex items-center pb-1 pt-1">
                <v-icon icon="mdi-clock-outline" class="icon" size="1.2rem" />
                <span class="text-sm text-gray-500 break-words">{{ }}</span>
            </div>

            <div class="flex items-center pb-1 pt-1">
                <v-icon icon="mdi-map-marker-outline" class="icon" size="1.2rem" />
                <span class="text-sm text-gray-500 break-words">{{ event.location }}</span>
            </div>
        </div>
        </div>

        <div @click="goToCategory(event.category)" class="badge mt-3 ml-3 cursor-pointer">
            <span>{{ event.category }}</span>
        </div>
    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import {eventService} from "../services/eventService"
import { useRouter } from 'vue-router';
import { categoryService } from '../services/categoryService';

const router = useRouter()
const { size, event } = defineProps({
    size: Number,
    event: Object,
})

const goToCategory = async (category) => {
    try {
        const response =await categoryService.getCategoryByName(category)

        router.push(`/category/${response.data.uuid}`)
    } catch (error) {

    }
}

const goToEvent = (uuid) => {
    router.push(`/event/${uuid}`)
}


onMounted(() => {
    
    
})






</script>

<style lang="scss" scoped></style>