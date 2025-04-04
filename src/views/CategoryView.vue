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
        <div class="relative max-w-7xl mx-auto px-4 h-full flex items-end pb-8">
          <div class="text-white">
            <h1 class="text-4xl lg:text-5xl font-bold mb-4">{{ category.name }}</h1>
            <div class="flex items-center space-x-4 text-gray-200 justify-between">
              <span class="flex items-center">
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
        </div>
      </div>
  
      <!-- Main Content -->
      <div class="max-w-7xl mx-auto px-4 py-8">
        <!-- Category Description -->
        <div class="bg-white rounded-xl shadow-sm !p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4">About {{ category.name }}</h2>
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
  
          <!-- Events Grid -->
          <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="event in events" :key="event.id" 
                 class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div class="relative">
                <img :src="event.image" :alt="event.name" 
                     class="w-full h-48 object-cover rounded-t-xl">
                <div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {{ event.price }}
                </div>
              </div>
              <div class="p-4">
                 Date 
                <div class="text-indigo-600 text-sm font-semibold mb-2">
                  {{ event.date }}
                </div>
                
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ event.name }}</h3>
                
                <div class="flex items-center text-gray-500 text-sm mb-4">
                  <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {{ event.location }}
                </div>
                
                <button class="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                  Get Tickets
                </button>
              </div>
            </div>
          </div> -->

          <Event />
  
          <!-- Load More Button -->
          <div class="text-center mt-8">
            <button class="bg-white text-indigo-600 border border-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
              Load More Events
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Event from '../components/Event.vue';
  // Sample data - replace with your actual data
  const category = {
    name: 'Music & Concerts',
    image: 'https://source.unsplash.com/random/1600x900/?concert',
    eventCount: 45,
    followers: '2.5K',
    description: 'Discover the best live music experiences in your area. From intimate acoustic sessions to stadium-filling concerts, our music events bring together fans and artists for unforgettable performances. Whether you\'re into classical, rock, jazz, or electronic music, find your perfect rhythm here.'
  }
  
  const events = [
    {
      id: 1,
      name: 'Summer Music Festival 2024',
      image: 'https://source.unsplash.com/random/400x300/?festival',
      date: 'Sat, Jun 15 • 2:00 PM',
      location: 'Central Park, New York',
      price: '$49',
    },
    {
      id: 2,
      name: 'Jazz Night Under Stars',
      image: 'https://source.unsplash.com/random/400x300/?jazz',
      date: 'Fri, Jun 21 • 8:00 PM',
      location: 'Blue Note Jazz Club',
      price: '$35',
    },
    {
      id: 3,
      name: 'Classical Symphony Orchestra',
      image: 'https://source.unsplash.com/random/400x300/?orchestra',
      date: 'Sun, Jun 23 • 7:00 PM',
      location: 'Symphony Hall',
      price: '$75',
    },
    // Add more events as needed
  ]
  </script>