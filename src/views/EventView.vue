<template>
    <div
        class="bg-[url('/home/hud/Desktop/projects/frontend/uni_event/src/assets/img/product-school--GajrOEN6m4-unsplash.jpg')] min-h-[70vh] bg-cover w-full">
        <div class="bg-gradient-to-r from-white/70 to-white/60 px-4 sm:px-8 lg:!px-[16.5vw] py-16 lg:py-32">
            <!-- Back Button -->
            <div class="flex items-center pt-4 sm:pt-15 mb-6 sm:mb-13 text-sm link">
                <v-icon icon="mdi-chevron-left" class="icon" />
                <span>Back</span>
            </div>

            <!-- Category Tag -->
            <div class="inline-block border rounded-full px-4 py-1 text-xs text-black text-center mb-4 sm:mb-7">
                <span>{{ event.category }}</span>
            </div>

            <!-- Title -->
            <h2 class="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-7">{{ event.title }}</h2>

            <!-- Event Details -->
            <div class="flex flex-col sm:flex-row gap-4 sm:gap-7 mb-8 sm:mb-20">
                <div class="flex items-center pl-2 pt-1 pb-1 text-sm sm:text-base">
                    <v-icon icon="mdi-calendar-blank-outline" class="icon" />
                    <span class="ml-2">{{ event.startingDate }}</span>
                </div>

                <div class="flex items-center pl-2 pt-1 pb-1 text-sm sm:text-base">
                    <v-icon icon="mdi-clock-time-two-outline" class="icon" />
                    <span class="ml-2">9:00 AM - 5:00 PM</span>
                </div>

                <div class="flex items-center pl-2 pt-1 pb-1 text-sm sm:text-base">
                    <v-icon icon="mdi-map-marker-outline" class="icon" />
                    <span class="ml-2">{{ event.location }}</span>
                </div>
            </div>

            <!-- Main Content Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                <!-- About Section -->
                <div class="text-base lg:text-lg lg:col-span-2 pr-0 lg:pr-10">
                    {{ event.about }}
                </div>

                <!-- Register Card - Fixed height and proper sticky positioning -->
                <div
                    class="lg:sticky lg:top-24 h-fit w-full lg:w-[25rem] border px-4 lg:px-[1vw] py-6 rounded-2xl bg-white self-start">
                    <!-- Price and Time -->
                    <div class="flex justify-between mb-5">
                        <div class="flex flex-col">
                            <span class="font-lighter text-sm">Price</span>
                            <span class="font-semibold text-lg">$299</span>
                        </div>

                        <div class="flex flex-col items-end">
                            
                            <div v-if="event.eventStatus === 'PAST'">
                                Event has Past
                            </div>
                            <div v-else>
                                Upcoming
                                <span class="font-lighter text-sm block">Starts in </span>
                            </div>
                        </div>
                    </div>

                    <!-- Register Button -->
                    <button
                        class="w-full border rounded-lg py-3 mb-5 text-center bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                        Register Now
                    </button>

                    <!-- Action Buttons -->
                    <div class="flex justify-between gap-4 mb-5">
                        <button
                            class="flex-1 flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-blue-500 hover:text-white transition-colors">
                            <v-icon icon="mdi-heart-outline" size="20px" class="icon" />
                            <span class="text-sm">Save</span>
                        </button>
                        <button
                            class="flex-1 flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-blue-500 hover:text-white transition-colors">
                            <v-icon icon="mdi-share-variant-outline" class="icon" size="20px" />
                            <span class="text-sm">Share</span>
                        </button>
                    </div>

                    <hr class="mb-7 opacity-15">

                    <!-- Organizer Section -->
                    <div>
                        <h4 class="font-medium mb-4">Organizer</h4>
                        <div class="flex items-center">
                            <img src="../assets/img/unievent-high-resolution-logo.png" alt=""
                                class="rounded-full w-12 h-12 object-cover">
                            <div class="flex flex-col ml-4">
                                <span class="font-semibold">Future Tech Association</span>
                                <a href="#" class="text-sm text-blue-600 hover:text-blue-700">View Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { eventService } from '../services/eventService';
import { onMounted, ref } from 'vue';

const route = useRoute()
const event = ref({})

const getEventDetail = async () => {
    try{
        
        
        const response = await eventService.getEvent(route.params.uuid)
        event.value = response.data
        
    } catch (error) {

    }
}

onMounted (() => {
    getEventDetail()
})


</script>

<style lang="scss" scoped></style>