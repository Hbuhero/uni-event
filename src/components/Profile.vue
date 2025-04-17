<template>
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Profile header -->
      <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div class="px-4 py-5 sm:px-6">
          <div class="flex items-center">
            <div class="h-24 w-24 rounded-full overflow-hidden bg-gray-100">
              <img src="../assets/img/product-school--GajrOEN6m4-unsplash.jpg" alt="Profile"
                class="h-full w-full object-cover" />
            </div>
            <div class="ml-6">
              <h2 class="text-2xl font-bold text-gray-900">{{ user.firstName + " " + user.lastName }}</h2>
              <p class="text-sm text-gray-500">Event Enthusiast</p>
              <div class="mt-2 flex space-x-3">

                <div
                  class="cursor-pointer !px-4 !py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <router-link to="/edit"><span>Edit Profile</span></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left column -->
        <div class="col-span-1">
          <!-- Personal Information -->
          <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and preferences.</p>
            </div>
            <div class="border-t border-gray-200">
              <dl>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Full name</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ user.firstName + " " + user.lastName }}</dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Email address</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ user.username }}</dd>
                </div>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Phone number</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ user.phone }}</dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Location</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ user.address }}</dd>
                </div>
               
              </dl>
            </div>
          </div>

          <!-- Category Preferences -->
          <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Category Preferences</h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">Select the categories of events you're interested in</p>
            </div>

            <div class="mb-8 px-4">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <!-- <SearchIcon class="h-5 w-5 text-gray-400" /> -->
                  <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input type="text" placeholder="Search for categories..."
                  class="w-full pl-10 !pr-4 !py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <!-- v-model="searchQuery" -->
              </div>
            </div>

            <div class="border-t border-gray-200">
              <dl>
                <div v-for="[index, category] in selectedCategories.entries()" :key="index" :class="{
                  'bg-white': index % 2 === 0,
                  'bg-gray-50': index % 2 !== 0
                }" class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">

                  <dt class="text-sm font-medium text-gray-500">{{ category }}</dt>
                  <dt class="inline-flex"><v-icon icon="mdi-delete-outline" size="17px" class="cursor-pointer" /></dt>
                </div>

              </dl>
            </div>
          </div>
        </div>

        <!-- Right column -->
        <div class="col-span-1 lg:col-span-2">
          <!-- Upcoming Events -->
          <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div class="px-4 py-5 sm:px-6 flex justify-between items-center">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">Upcoming Events</h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">Events you're attending or hosting.</p>
              </div>
              <button type="button"
                
                class="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <router-link to="/your-events">View All</router-link>
                
              </button>
            </div>
            <div class="border-t border-gray-200">
              <ul role="list" class="divide-y divide-gray-200">
                <li v-for="event in events" class="px-4 py-4 sm:px-6">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div
                        class="flex-shrink-0 h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div class="ml-4">
                        <p class="text-sm font-medium text-gray-900">{{ event.title }}</p>
                        <div class="flex items-center text-sm text-gray-500 !my-1">
                          <v-icon icon="mdi-calendar-outline" ></v-icon>
                          <p class="ml-1">{{ event.startingDate }}</p>
                        </div>
                        <div class="flex items-center text-sm text-gray-500 !my-1">
                          <v-icon icon="mdi-map-marker-outline"/>
                          <p class="ml-1">{{ event.location }}</p>
                        </div>
                      </div>
                    </div>
                    <div class="ml-2 flex-shrink-0">
                      <span
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Attending
                      </span>
                    </div>
                  </div>
                </li>

                
              </ul>
            </div>
          </div>

          <!-- Notification Settings -->
          <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6 flex justify-between items-center">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">Notification Settings</h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">Customize how and when you receive email notifications
                </p>
              </div>
              <button type="button"
                class="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Turn Off
              </button>
            </div>
            <div class="border-t border-gray-200">
              <ul role="list" class="divide-y divide-gray-200">
                <li class="!px-4 !py-2 sm:!px-6">
                  <div class="space-y-4">
                    <div class="flex justify-between items-center py-2 border-gray-100">
                      <div>
                        <p class="text-md font-medium text-gray-700 mb-1">New events in preferred categories</p>
                        <p class="text-xs text-gray-500">Receive notifications when new events are added in categories
                          you follow</p>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" v-model="isEnabled" class="sr-only peer">
                        <div
                          class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600">
                        </div>
                      </label>
                    </div>
                  </div>
                </li>
                <li class="!px-4 !py-2 sm:!px-6">
                  <div class="space-y-4">
                    <div class="flex justify-between items-center py-2 border-gray-100">
                      <div>
                        <p class="text-md font-medium text-gray-700 mb-1">New events in your area</p>
                        <p class="text-xs text-gray-500">Receive notifications when new events are added in categories
                          you follow</p>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" v-model="isEnabled" class="sr-only peer">
                        <div
                          class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600">
                        </div>
                      </label>
                    </div>
                  </div>
                </li>
                <li class="!px-4 !py-2 sm:!px-6">
                  <div class="space-y-1">
                    <div class="flex justify-between items-center !py-2 border-gray-100">
                      <div>
                        <p class="text-md font-medium text-gray-700 mb-1">Event reminders</p>
                        <p class="text-xs text-gray-500">Get reminders about upcoming events you\'ve shown interest in
                        </p>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" v-model="isEnabled" class="sr-only peer">
                        <div
                          class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600">
                        </div>
                      </label>
                    </div>
                  </div>
                </li>

              </ul>
            </div>


          </div>
        </div>
      </div>
    </main>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { userService } from '../services/userServices';

const user  = ref({})
const events = ref([])
const selectedCategories = ref(['Music', 'Technology', 'Sports', 'Food & Drink']);

const removeCategory = (category) => {
  selectedCategories.value = selectedCategories.value.filter(c => c !== category);
}

const isEnabled = ref(true)

const getUserDetails = async () => {
  try {
    
    const response = await userService.getUser(
      
    ) 

    user.value = response.data
    
  } catch (error) {

  }
}

const getUserEvents = async () => {
  try {

    const response = await userService.getUserEvents({
      size: 3
    })
    
    console.log(response.data.content);
    
    
    events.value = response.data.content

  } catch (error) {
    console.log(error)
  }
}

onMounted (() => {
  getUserDetails()
  getUserEvents()
}
)

</script>