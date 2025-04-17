<template>


  <main class=" max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    
      <div class="flex items-center justify-between mb-4">
        <h1 class="text-2xl font-bold">Your Events</h1>
      </div>

      <div class="flex flex-col gap-4 sm:flex-row sm:items-center w-[50%] mb-4">
        <div class="w-[100%] ">
          <input type="search" class="w-full border !px-4 !py-2.5 
                               placeholder:text-sm placeholder:font-light 
                               rounded-lg sm:rounded-xl
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                               transition-all duration-200" placeholder="Search for events...">

        </div>

        <div class="  w-[100%] flex items-center justify-center ">
          <v-select clearable label="Filter" density="compact" width="100%" height="100%"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']">
          </v-select>
        </div>

      </div>

      <div class="w-full mb-4 ">
        <div class="grid w-full grid-cols-4 tabs-list !bg-secondary gap-4 text-center">
          <div v-for="(tab, index) in tabs" :key="index" @click="navigate(index)"
            class="w-full h-full flex items-center gap-1 tabs-trigger " :class="activeTab == index ? 'bg-white' : ''">
            <v-icon :icon="`${tab.icon}`" />
            <span class="">{{ tab.name }}</span>
          </div>

        </div>
      </div>

      <div v-if="events.length === 0">
        <v-card>
          <v-card-text
            class="text-center"
          >
            No available events
          </v-card-text>
        </v-card>
        
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Event v-for="event in events" :key="event.uuid" :event="event" :size="9" @click="goToEvent(event.uuid)" />
      </div>



    
  </main>




</template>

<script setup>
import Event from '../components/Event.vue';
import Navbar from '../components/Navbar.vue';
import { computed, onMounted, ref } from 'vue';
import { eventService } from '../services/eventService.js';
import { useRouter } from 'vue-router';
import { userService } from '../services/userServices.js';

const tabs = [
  { name: "All", icon: '' },
  { name: "Upcoming", icon: 'mdi-clock-outline' },
  { name: "Saved", icon: 'mdi-bookmark-multiple-outline' },
  { name: "Past", icon: 'mdi-history' }
]

const activeTab = ref(0)
const router = useRouter()
const eventResponse = ref([])

const events = ref([])

// computed(() => {
//   console.log("ok", eventResponse.value[0]);
//   console.log(tabs[activeTab.value].name.toUpperCase());
//   if (tabs[activeTab.value].name.toUpperCase()){
//     return eventResponse.value
//   }
//   eventResponse.value.filter(e => e.status === tabs[activeTab.value].name.toUpperCase())
// })

const navigate = async(index) => {
  try {

    activeTab.value = index
  
    if (tabs[index].name == 'All') {
      console.log("inside all");
      
      return events.value = eventResponse.value
    }
    
    events.value = eventResponse.value.filter(e => e.status == tabs[activeTab.value].name.toUpperCase())

  } catch (error) {

  }
  
}

const getUserEvents = async () => {
  try {

    const response = await userService.getUserEvents({
      size: 40
    })
    
    console.log(response.data.content);
    
    eventResponse.value = response.data.content
    events.value = eventResponse.value

  } catch (error) {
    console.log(error)
  }
}

const goToEvent = (uuid) => {
  router.push(`/event/${uuid}`)
}

onMounted(() => {
  getUserEvents()
})


</script>

<style lang="scss" scoped></style>