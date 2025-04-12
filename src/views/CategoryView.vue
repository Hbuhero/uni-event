<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Category Hero Section -->
      <div class="relative h-[300px] lg:h-[400px]">
        <div class="absolute inset-0">
          <img 
            :src="category.image" 
            :alt="category.name"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div class="relative max-w-7xl mx-auto px-4 h-full flex items-end pb-8 justify-between">
          <div class="text-white">
            <h1 class="text-4xl lg:text-5xl font-bold mb-4">{{ category.name }}</h1>
            <div class="flex items-center space-x-4 text-gray-200 justify-between">
              <span class="flex items-center mr-4">
                <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ category.eventCount }} Events
              </span>
              <span class="flex items-center">
                <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {{ category.followers }} Followers
              </span>
            </div>
          </div>

          <div class="button">
            <button>Subscribe</button>
          </div>
        </div>
      </div>
  
      <!-- Main Content -->
      <div class="max-w-7xl mx-auto px-4 py-8">
        <!-- Category Description -->
        <div class="bg-white rounded-xl shadow-sm !p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4"> Description </h2>
          <p class="text-gray-600 leading-relaxed">{{ category.description }}</p>
        </div>
  
        <!-- Upcoming Events Section -->
        <div class="mb-8">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-semibold">Upcoming Events</h2>
            <!-- Filters -->
            <div class="flex items-center space-x-4">
              <select class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>Sort by Date</option>
                <option>Sort by Price</option>
                <option>Sort by Popularity</option>
              </select>
            </div>
          </div>
  
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Event v-for="event in events" :key="event.uuid" :event="event" :size="9" @click="goToEvent(event.uuid)"/>
            </div>
  
          <!-- Load More Button -->
          <div class="text-center mt-8">
            <div class="button">
              <button class="">
              Load More Events
            </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
import Event from '../components/Event.vue';
import { categoryService } from '../services/categoryService';
import { onMounted,ref } from 'vue';
import { eventService } from '../services/eventService';
  
  const route = useRoute()
  const category = ref({})
  const events = ref([])

  const categoryUuid = route.params.uuid

  const getCategory = async () => {
    try {
      
      const categoryResponse = await categoryService.getCategory(categoryUuid)
            
      category.value = categoryResponse.data
    } catch (error) {

    }
  }

  const getCategoryEvent = async () => {
    try {
      const eventsResponse = await eventService.getEventsByCategory({
        categoryUuid: categoryUuid,
        size: 6
      })
      
      events.value = eventsResponse.data.content

    } catch (error) {

    }
  }

  onMounted (() => {
    getCategory()
    getCategoryEvent()
  })
  </script>