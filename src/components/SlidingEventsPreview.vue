<template>
    <div class="relative min-h-[70vh]">
        <div
            class="bg-[url('/home/hud/Desktop/projects/frontend/uni_event/src/assets/img/headway-F2KRf_QfCqw-unsplash.jpg')] bg-cover bg-center bg-no-repeat min-h-[70vh]">
            <div class="bg-gradient-to-r from-white via-white/70 to-white/30 min-h-[70vh]">
                <!-- Content container with fixed height -->
                <div class="!px-4 sm:!px-8 md:!px-[16.5vw] !py-16 sm:!py-24 md:!py-32">
                    <div class="relative min-h-[400px] sm:min-h-[450px]"> <!-- Fixed height container -->
                        <Transition name="fade" mode="out-in">
                            <div :key="currentEventIndex"
                                class="flex flex-col gap-8 sm:gap-12 md:!px-[15vw] absolute inset-0">
                                <article class="mt-6 sm:mt-8 md:mt-10">
                                    <header class="text-3xl sm:text-4xl md:text-5xl font-medium mb-3 sm:mb-4">
                                        {{ currentEvent.title }}
                                    </header>
                                    <p class="text-gray-800 text-base sm:text-lg font-light">
                                        {{ currentEvent.about }}
                                    </p>
                                </article>

                                <div class="flex flex-col sm:flex-row gap-4 sm:gap-5">
                                    <div class="flex items-center w-full sm:w-[14vw] pl-2 pt-1 pb-1">
                                        <v-icon icon="mdi-calendar-blank-outline" class="text-gray-700 min-w-[24px]" />
                                        <span class="ml-2 text-gray-700 text-sm sm:text-base break-words">
                                            {{ currentEvent.startingDate }}
                                        </span>
                                    </div>

                                    <div class="flex items-center w-full sm:w-[14vw] pl-2 pt-1 pb-1">
                                        <v-icon icon="mdi-map-marker-outline" class="text-gray-700 min-w-[24px]" />
                                        <span class="ml-2 text-gray-700 text-sm sm:text-base break-words">
                                            {{ currentEvent.location }}
                                        </span>
                                    </div>
                                </div>

                                <div class="flex flex-col sm:flex-row gap-4">
                                    <div class="button text-sm w-full sm:w-auto text-center cursor-pointer" @click="goToEvent(currentEvent.uuid)">View Details
                                    </div>
                                    <div class="button text-sm w-full sm:w-auto text-center cursor-pointer" @click="register(currentEvent.url)">
                                        Register Now ({{ currentEvent.price }})
                                    </div>
                                </div>

                                <div class="badge">
                                    {{ currentEvent.category }}
                                </div>
                            </div>
                        </Transition>

                        <!-- Navigation dots (outside of transition) -->
                        <div class="absolute bottom-0 left-0 right-0 flex justify-center gap-2 mt-4">
                            <button v-for="(_, index) in events" :key="index" @click="currentEventIndex = index"
                                class="w-2 h-2 rounded-full transition-colors"
                                :class="index === currentEventIndex ? 'bg-blue-600' : 'bg-gray-300'"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { eventService } from '../services/eventService';
import { useRouter } from 'vue-router';

const router = useRouter()
const events = ref([{}])

const goToEvent = (uuid) => {
    router.push(`/event/${uuid}`)
}

const register = (url) => {
    window.location.href = url
}

const getRandomEvents = async () => {
    try {
        const response = await eventService.getRandomEvents()
        console.log(response);
        
        events.value = response.data.content
    } catch (error) {

    }
}

const currentEventIndex = ref(0);
let intervalId = null;

const nextSlide = () => {
    currentEventIndex.value = (currentEventIndex.value + 1) % events.value.length;
};

// Computed property to get current event
const currentEvent = computed(() => events.value[currentEventIndex.value]);

// Start automatic sliding
onMounted(() => {
    getRandomEvents(),
    intervalId = setInterval(nextSlide, 4000); // Change slide every 5 seconds
});

// Clean up interval when component is destroyed
onUnmounted(() => {
    if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>